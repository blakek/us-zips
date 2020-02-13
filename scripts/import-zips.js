#!/usr/bin/env node
const fs = require('fs');
const util = require('util');

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error(
    'Expected one argument, a path to a txt file from the Census Bureau'
  );
  process.exit(1);
}

const filepath = args[0];
const zipList = {};

fs.readFileSync(filepath, { encoding: 'utf-8' })
  .replace(/^$/, '')
  .split('\n')
  // Remove the column names from the file
  .slice(1, -1)
  .map(line => line.split('\t'))
  // Remove unnecessary columns (land/water area), make into Object
  .forEach(([zipCode, _a, _b, _c, _d, latitude, longitude]) => {
    zipList[zipCode] = {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude)
    };
  });

const outputBody = `module.exports = ${util.inspect(zipList, {
  compact: 2
})}\n`;

fs.writeFileSync('./object.js', outputBody);
