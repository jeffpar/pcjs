#!/usr/bin/env bash
#
# The purposes of redump is to DiskDump each IMG file listed in every disk manifest to a temporary JSON file,
# then DiskDump that back into a temporary IMG file, then hexdump both the original IMG and temporary IMG files,
# diff the dumps, and save the differences in the current log file.  Then we want to mount the temporary IMG file
# (which should normally be possible, since we used --forceBPB to create the temporary JSON) and dump all the files
# into an archived subfolder.
#
# After all that, we're ready to delete the temporary JSON and IMG files, as well as the hexdumps, and then redump
# the original JSON file and update the manifest with a list of all the files contained in the corresponding archived
# subfolder.
#
# redump.sh accepts two arguments:
#
#	$1 is the directory to search for manifests containing disk images (eg, "."); this is a required argument
#	$2 is an optional DiskDump argument (eg, "--forceBPB" if you're sure the boot sector(s) can be safely modified)
#
if [ -z "$1" ]; then
	echo "no directory specified"
	exit 1
fi
if [ ! -d "$1" ]; then
	echo "directory $1 does not exist"
	exit 1
fi
log=$PCJS/tools/diskdump/redump.log
find -L $1 -name "manifest.xml" -exec grep -H -e "<disk.*img=" {} \; | sed -E "s/^([^:]*)\/manifest\.xml:.*img=\"([^\"]*)\".*href=\"([^\"]*)\".*/\1;\2;\3/" > disks.lst
while read line; do
	dirManifest=`echo ${line} | sed -E "s/;.*//"`
	imgFile=`echo ${line} | sed -E "s/.*;(.*);.*/\1/"`
	jsonFile=$(basename `echo ${line} | sed -E "s/.*;.*;(.*)/\1/"`)
	img="${dirManifest}/${imgFile}"
	dir=$(dirname "${img}")
	name=$(basename "${img}" ".img")
	# log=${dir}/${name}.log
	jsonTmp="${dir}/${name}.json"
	if [ -f "${jsonTmp}" ]; then
		rm "${jsonTmp}"
	fi
	echo diskdump --disk="${img}" --format=json --output="${jsonTmp}" --forceBPB >> ${log}
	node $PCJS/tools/diskdump/bin/diskdump --disk="${img}" --format=json --output="${jsonTmp}" --forceBPB >> ${log}
	if [ ! -f "${jsonTmp}" ]; then
		echo "WARNING: diskdump failed to create ${jsonTmp}"
		continue
	fi
	imgTmp="${dir}/${name}-TMP.img"
	if [ -f "${imgTmp}" ]; then
		chmod +w "${imgTmp}"
		rm "${imgTmp}"
	fi
	echo diskdump --disk="${jsonTmp}" --format=img  --output="${imgTmp}" >> ${log}
	node $PCJS/tools/diskdump/bin/diskdump --disk="${jsonTmp}" --format=img  --output="${imgTmp}" >> ${log}
	if [ ! -f "${imgTmp}" ]; then
		echo "WARNING: diskdump failed to create ${imgTmp}"
		break
	fi
	chmod oga-w "${imgTmp}"
	hexdump -C "${img}" > "${dir}/${name}.txt"
	hexdump -C "${imgTmp}" > "${dir}/${name}-TMP.txt"
	echo diff "${img}" "${imgTmp}" >> ${log}
	diff "${dir}/${name}.txt" "${dir}/${name}-TMP.txt" >> ${log}
	rm "${dir}/${name}.txt" "${dir}/${name}-TMP.txt"
	dirDisk="${dir}/${name}"
	if [ -d "${dirDisk}" ]; then
		chflags -R nouchg,nohidden "${dirDisk}"
		rm -rf "${dirDisk}"
	fi
	# echo "mounting "${imgTmp}"..."
	hdiutil mount "$imgTmp" > disk
	if grep -q -e "^/dev" disk; then
		echo "mounted $imgTmp"
		vol=`grep -o -e "/Volumes/.*" disk`
		# subdir=`echo "$vol" | grep -o -e "[^/]*$"`
		# subdir=`echo "$img" | grep -o -e "[^/]*$" | sed -E "s/(.*)\.img/\1/"`
		# echo cp -Rpv "$vol/" "$dirDisk"
		cp -Rp "$vol/" "$dirDisk"
		# chmod -R go-w "$dirDisk"
		hdiutil unmount "$vol" > /dev/null
		# echo "unmounted $imgTmp"
	else
		echo "WARNING: unable to mount $imgTmp"
		break
	fi
	chmod +w "${imgTmp}"
	rm disk "${imgTmp}" "${jsonTmp}"
	pushd ${dirManifest} > /dev/null
	imgFile=`echo ${imgFile} | sed -E "s/^\.\///"`
	jsonFile=`echo ${imgFile} | sed -E "s/(.*)(archive|private).*/\1/"`${jsonFile}
	echo diskdump --disk="${imgFile}" --format=json --output="${jsonFile}" --overwrite --manifest $2 >> ${log}
	node $PCJS/tools/diskdump/bin/diskdump --disk="${imgFile}" --format=json --output="${jsonFile}" --overwrite --manifest $2 | tee -a ${log}
	popd > /dev/null
done < disks.lst
rm disks.lst
