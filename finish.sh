#! /bin/bash
if [[ $# -eq 0 ]] ; then
    echo "Please specify name of the problem that you have finished "
    exit 1
fi
mkdir $1;
git checkout -b $1
git add $1
git commit "$1"
git push origin $1
