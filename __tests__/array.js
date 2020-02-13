const test = require('ava').default;
const zipCount = require('../zipCount');
const zipArray = require('../array');

test('exports the correct number of zips', t => {
  t.is(zipArray.length, zipCount);
});

test('exports the expected format', t => {
  t.true(Array.isArray(zipArray));

  t.is(typeof zipArray[0], 'object');

  t.truthy(zipArray[0].latitude);
  t.truthy(zipArray[0].longitude);
  t.truthy(zipArray[0].zipCode);
});
