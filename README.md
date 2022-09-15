# us-zips :us:

> A list of US ZIP codes and their geolocations

A list of United States ZIP Codes based on the [US Census Bureau's ZIP Code Tabulation Areas (ZCTAs)][4].

:information_desk_person: Before using ZIP codes, there's helpful points to know:

- USPS ZIP codes are short and memorable, but they aren't very good for geolocation. Their main use is for local mail routes.
- ZIP codes change with mail routes. They're reused, sometimes for different locations.
- The ZIP used for mail delivery may not be the closest (or even second closest) ZIP by linear distance. This may be due to terrain, political borders, etc.
- One physical location could be served by multiple ZIP codes

:package: This package:

uses [ZIP Code Tabulation Areas (ZCTAs)][6]
: Some ZIP codes used by the USPS are not included, such as those with no or very few residential addresses.

uses the center of the ZCTA polygon
: This keeps the package smaller, more performant, and simpler to use. ZIP codes aren't very good for geolocation anyway, so we chose to keep the amount of data loaded in memory to a minimum.

stays up-to-date with the Census Bureau's data
: After new data is published, this package is updated soon. Unlike several other ZIP lists, this one purges outdated information.

## Usage

Example: get the nearest ZIP to a geolocation

> :information_source: If you need the nearest ZIPs for a geolocation, check out [`geo2zip`][2]. It is much faster than the demo below and uses this package.

```javascript
const geolib = require("geolib");
const usZips = require("us-zips/array");

const somewhere = {
	lat: 33.1234,
	lng: -88.4321,
};

geolib.findNearest(somewhere, usZips);
//» { latitude: 33.088581, longitude: -88.556133, zipCode: "39341" }
```

## Data Formats

### Default (Object)

The default export returns an object. The object's keys are each ZIP code and values are objects with latitude and longitude properties.

```javascript
const usZips = require('us-zips')

console.log(usZips['54301'])
//» { latitude: 44.480778, longitude: -88.016063 }

// Shape
{
  …
  '54301': { latitude: 44.480778, longitude: -88.016063 }
  …
}
```

### Array

```javascript
const usZips = require('us-zips/array')

console.log(usZips.find(zip => zip.zipCode === '37214'))
//» { latitude: 36.162189, longitude: -86.670867, zipCode: '37214' }

// Shape
[
  …
  {
    latitude: 36.162189,
    longitude: -86.670867,
    zipCode: '37214'
  },
  …
]
```

### Key/value

```javascript
const usZips = require('us-zips/key-value')

console.log(usZips.find(([key, value]) => key === '10001'))
//» ['10001', { latitude: 40.750634, longitude: -73.997176 }]

// Shape
[
  …
  ['10001', { latitude: 40.750634, longitude: -73.997176 }],
  …
]
```

### Map

```javascript
const usZips = require("us-zips/map");

console.log(usZips.get("90210"));
//» { latitude: 34.100517, longitude: -118.41463 }
```

## Install

With [Yarn](https://yarnpkg.com/en/) or [npm](https://npmjs.org/) installed, run:

```shell
yarn add us-zips@2022.09

# ...or, if using `npm`
npm install us-zips@2022.09
```

:information_source: **NOTE:** Due to ZIP codes always changing, this package uses calendar versioning (aka [CalVer][5]). This means each year will have a separate "major" version from npm and Yarn's perspective. However, breaking changes could occur on minor versions. We suggest pinning to the minor version you want to use (e.g. `yarn add us-zips@2022.09`).

## Acknowledgments

Data for ZIP codes and their geolocations was generated from [this file][1], which can be downloaded from the [US Census Bureau map data page][4].

## See Also

- [`blakek/geo2zip`][2] - get the nearest zip code from a geolocation
- [`blakek/standardize-geolocation`][3] - takes geolocations of different
  formats and outputs a standardized version
- [US Census Bureau - map data page][4]
- [Information about ZCTAs][6]

## License

MIT

[1]: https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2022_Gazetteer/2022_Gaz_zcta_national.zip
[2]: https://github.com/blakek/geo2zip
[3]: https://github.com/blakek/standardize-geolocation
[4]: https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html
[5]: https://calver.org/
[6]: https://www.census.gov/programs-surveys/geography/guidance/geo-areas/zctas.html
