all: CPUTESTS.json

#
# TODO: Finish converting cpuid.asm to cpuid.nasm
#
bin/cpuid.com: cpuid.nasm
	nasm -f bin cpuid.nasm -l bin/cpuid.lst -o bin/cpuid.com

bin/id.com: id.asm
	nasm -f bin id.asm -l bin/id.lst -o bin/id.com

bin/test386.com: 80386/test386.asm ../inc/dos.inc ../inc/misc.inc ../inc/x86.inc
	nasm -i../inc/ -f bin 80386/test386.asm -l bin/test386.lst -o bin/test386.com

CPUTESTS.json: cpuid.asm id.asm bin/id.com bin/test386.com
	node ../../../modules/diskdump/bin/diskdump --path="cpuid.asm;bin/id.com;test386.com" --label=CPUTESTS --output=CPUTESTS.json --format=json --manifest --overwrite
