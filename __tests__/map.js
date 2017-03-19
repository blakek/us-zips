import test from 'ava'
import zipCount from '../zipCount'
import zipMap from '../map'

test('exports the correct number of zips', t => {
  t.is(zipMap.size, zipCount)
})

test('exports the expected format', t => {
  t.true(zipMap instanceof Map)

  const testZip = zipMap.get('38873')

  t.truthy(testZip.latitude)
  t.truthy(testZip.longitude)
})
