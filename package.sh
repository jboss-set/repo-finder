#!/bin/bash
grunt build --force
wget -q https://raw.githubusercontent.com/jboss-set/aphrodite/master/src/main/resources/default.streams.json -O default.streams.json
mv default.streams.json dist/
git add dist/