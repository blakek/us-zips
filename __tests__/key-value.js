import test from 'ava'
import zipCount from '../zipCount'
import zipKeyValue from '../key-value'

test('exports the correct number of zips', t => {
  t.is(zipKeyValue.length, zipCount)
})

test('exports the expected format', t => {
  t.true(Array.isArray(zipKeyValue))

  const [zipCode, location] = zipKeyValue[0]

  t.truthy(zipCode)
  t.truthy(location.latitude)
  t.truthy(location.longitude)
})
