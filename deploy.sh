#!/bin/bash

nvm use 24
npm run docs:build
rsync -azv .vitepress/dist/ static@arch:/home/static/menu-temp/