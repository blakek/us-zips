import { Geolocation, ZIPCode } from '.'

export type ZIPCodeRecord = [ZIPCode, Geolocation]
export type ZIPCodeList = ZIPCodeRecord[]

declare module 'us-zips/key-value' {
  const defaultExport: ZIPCodeList
  export default defaultExport
}
