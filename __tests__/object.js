import test from 'ava'
import usZips from '../object'
import zipCount from '../zipCount'

test('exports the correct number of zips', t => {
  const numberExported = Object.keys(usZips).length
  t.is(numberExported, zipCount)
})
