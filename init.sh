#! /bin/bash
if [[ $# -eq 0 ]] ; then
    echo "Please specify a name for this problem"
    exit 1
fi
mkdir $1;
cp template/* topics/$1