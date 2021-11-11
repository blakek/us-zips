import { Geolocation, ZIPCode } from '.'

export type ZIPCodeList = Record<ZIPCode, Geolocation>

declare module 'us-zips/object' {
  const defaultExport: ZIPCodeList
  export default defaultExport
}
