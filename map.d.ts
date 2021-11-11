import { Geolocation, ZIPCode } from '.'

export type ZIPCodeList = Map<ZIPCode, Geolocation>

declare module 'us-zips/map' {
  const defaultExport: ZIPCodeList
  export default defaultExport
}
