#!/bin/bash
if [[ $# -eq 0 ]] ; then
    echo "Please specify a name for this problem"
    exit 1
fi
echo "Checkout laster master...";
git checkout master;
git pull;
mkdir topics/$1;
cp template/* topics/$1
cd topics/$1
sed -i 's/funcName/'$1'/g' index.js
sed -i 's/funcName/'$1'/g' test.js
sed -i 's/funcName/'$1'/g' script.js
