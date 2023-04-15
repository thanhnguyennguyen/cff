#!/bin/bash
if [[ $# -eq 0 ]] ; then
    echo "Please specify a name for this problem"
    exit 1
fi
echo "Checkout latest master...";
git checkout master;
git pull;
mkdir topics/$1;
cp template/* topics/$1
cd topics/$1

# Convert to camel case
funcName=$(echo $1 | sed -E 's/-/_/g')

sed -i '.bak' 's/funcName/'$funcName'/g' index.js
sed -i '.bak' 's/funcName/'$funcName'/g' test.js
sed -i '.bak' 's/funcName/'$funcName'/g' script.js

rm *.bak
