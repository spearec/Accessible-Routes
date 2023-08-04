#!/bin/bash

printf "\n\n%s\n\n" "***** Starting install of Accessible Routes at $(date) *****"

do_npm_install=no

if [ "node_modules/.package-lock.json" -nt "package-lock.json" ]; then
    do_npm_install=yes
fi

if [ "$do_npm_install" == "yes" ]; then
    printf "\n%s\n" "Skipping npm install as node_modules is up to date"
else
	printf "\n%s\n\n" "NPM install..."
	npm ci --loglevel=warn
	if [ $? == 0 ]; then
		printf "\n%s\n\n" "NPM install finished."
	else
		# npm reported an error. Sometimes it does so can skip steps.
		# Using printf since it is more reliable.
		printf "\n%s\n\n" "NPM install encountered an error"
		exit 2
	fi
fi

# add database build script here

printf "\n%s\n" "Accessible Routes install finished"

npm run dev & npm run start
