#!/usr/bin/env sh

set -e 

npm run build

cd dist

git add -A
git commit -m "New deployment"
git push -f git@github.com:eliiks/MeteoApp.git master