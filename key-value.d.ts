import { Geolocation, ZIPCode } from '.'

export type ZIPCodeList = [ZIPCode, Geolocation][]

declare module 'us-zips/key-value' {
  const defaultExport: ZIPCodeList
  export default defaultExport
}
