const fs = require('fs');
const path = require('path');
const util = require('util');
const usZips = require('..');

const outputFile = path.join(__dirname, '../key-value.js');

const outputStart = 'module.exports = [\n  ';
const outputEnd = '\n]\n';

const outputBody = Object.keys(usZips)
  .map(zipCode => JSON.stringify([zipCode, usZips[zipCode]]))
  .join(',\n  ');

fs.writeFileSync(outputFile, outputStart + outputBody + outputEnd, 'utf8');
