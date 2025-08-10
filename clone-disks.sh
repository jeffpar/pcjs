#!/bin/sh
# Clone PCjs disk image repositories locally
set -ue

clone_repo() {
	mkdir -p "$1"
	if ! test -d "$1/$2/.git"; then
		git clone "https://github.com/jeffpar/pcjs-$2.git" "$1/$2"
	fi
}

cd "$(dirname "$0")"
mkdir -p disks
clone_repo disks diskettes
clone_repo disks gamedisks
clone_repo disks miscdisks
clone_repo disks pcsigdisks

# Below disabled for now, repos publicly unavailable
# clone_repo cdroms cds001
# clone_repo cdroms cds002
# clone_repo cdroms cds005
