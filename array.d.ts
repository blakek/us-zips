import { Geolocation, ZIPCode } from '.'

export type ZIPCodeList = Geolocation & { zipCode: ZIPCode }

declare module 'us-zips/array' {
  const defaultExport: ZIPCodeList[]
  export default defaultExport
}
