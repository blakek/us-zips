export interface Geolocation {
  latitude: number
  longitude: number
}

export type ZIPCode = string

declare module 'us-zips' {
  const defaultExport: import('./object').ZIPCodeList
  export default defaultExport
}
