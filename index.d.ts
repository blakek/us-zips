interface ZIPGeolocation {
  latitude: number
  longitude: number
}

type ZIPCode = string

type ZIPCodeList = (ZIPGeolocation & { zipCode: ZIPCode })[]
type ZIPKeyValueList = [ZIPCode, ZIPGeolocation][]
type ZIPMap = Map<ZIPCode, ZIPGeolocation>
type ZIPObject = Record<ZIPCode, ZIPGeolocation>

declare module 'us-zips/array' {
  const defaultExport: ZIPCodeList
  export default defaultExport
}

declare module 'us-zips/key-value' {
  const defaultExport: ZIPKeyValueList
  export default defaultExport
}

declare module 'us-zips/map' {
  const defaultExport: ZIPMap
  export default defaultExport
}

declare module 'us-zips/object' {
  const defaultExport: ZIPObject
  export default defaultExport
}

declare module 'us-zips' {
  const defaultExport: ZIPObject
  export default defaultExport
}

declare module 'us-zips/zipCount' {
  const zipCount: number
  export default zipCount
}
