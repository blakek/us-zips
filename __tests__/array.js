import test from 'ava'
import zipArray from '../array'
import zipCount from '../zipCount'

test('exports the correct number of zips', t => {
  t.is(zipArray.length, zipCount)
})
