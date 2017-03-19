import test from 'ava'
import usZips from '../object'
import zipCount from '../zipCount'

test('exports the correct number of zips', t => {
  const numberExported = Object.keys(usZips).length
  t.is(numberExported, zipCount)
})

test('exports the expected format', t => {
  t.is(typeof usZips, 'object')

  const testZip = usZips['37214']

  t.is(typeof testZip, 'object')
  t.truthy(testZip.latitude)
  t.truthy(testZip.longitude)
})
