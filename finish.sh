#! /bin/bash
if [[ $# -eq 0 ]] ; then
    echo "Please specify name of the problem that you have finished "
    exit 1
fi
git checkout -b $1
git add topics/$1
git commit -m "$1"
git push origin $1
