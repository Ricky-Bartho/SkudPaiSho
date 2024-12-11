#!/bin/bash

#in images
cd images
find . -type d -not -path "*SkudPaiSho*" -not -path "*renamer*" -exec rm -rf {} +
cd SkudPaiSho
find . -type d -not -path "*tgggyatso*" -exec rm -rf {} +
cd ../../style
find . -type f -not -name "*tgg*" -not -name "logo.png" -not -name "main.css" -delete
cd ../
rm -r ./.git/
rm -r ./other/
rm -r ./Other/
