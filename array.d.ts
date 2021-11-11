import { Geolocation, ZIPCode } from '.'

export type ZIPCodeRecord = Geolocation & { zipCode: ZIPCode }
export type ZIPCodeList = ZIPCodeRecord[]

declare module 'us-zips/array' {
  const defaultExport: ZIPCodeList
  export default defaultExport
}
