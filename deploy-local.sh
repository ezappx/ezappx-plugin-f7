#!/usr/bin/env bash

echo "compile ezappx-plugin-f7..."
npm run build
echo "copy dist/ezappx-plugin-f7.min.js to /E/JavaProjects/Ezappx/EzappxDesigner/src/main/resources/static/js"
cp dist/ezappx-plugin-f7.min.js /E/JavaProjects/Ezappx/EzappxDesigner/src/main/resources/static/js
echo "done"