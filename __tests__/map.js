const test = require('ava').default;
const zipCount = require('../zipCount');
const zipMap = require('../map');

test('exports the correct number of zips', t => {
  t.is(zipMap.size, zipCount);
});

test('exports the expected format', t => {
  t.true(zipMap instanceof Map);

  const testZip = zipMap.get('38873');

  t.truthy(testZip.latitude);
  t.truthy(testZip.longitude);
});
