# us-zips

> A list of US ZIP codes and their geolocations

I needed a list of ZIP codes, and the [US Census Bureau](http://www.census.gov/geo/maps-data/data/gazetteer2015.html) had one.

## Usage

Example: get the nearest zip to a geolocation

```js
const geolib = require('geolib')
const usZips = require('us-zips')

const somewhere = {
  lat: 33.1234,
  lng: -88.4321
}

geolib.findNearest(somewhere, usZips)  // { distance: 12834, key: '39341' }
```

If you want to get the nearest ZIP, see if [`geo2zip`](https://github.com/blakek/geo2zip) fits your needs.

## Data Formats

### Default (Object)

The default export returns an object.  The object's keys are each ZIP code and values are objects with latitude and longitude properties.

```js
const usZips = require('us-zips')

console.log(usZips['54301'])
// { latitude: 44.480778, longitude: -88.016063 }

// Shape
{
  '54301': {
    latitude: 44.480778,
    longitude: -88.016063
  }
}
```

### Array

```js
const usZips = require('us-zips/array')

console.log(usZips.find(zip => zip.zipCode === '37214'))
// { latitude: 36.162189, longitude: -86.670867, zipCode: '37214' }

// Shape
[
  ...
  {
    latitude: 36.162189,
    longitude: -86.670867,
    zipCode: '37214'
  },
  ...
]
```

### Key/value

```js
const usZips = require('us-zips/key-value')

console.log(usZips.find(([key, value]) => key === '10001'))
// ['10001', { latitude: 40.750634, longitude: -73.997176 }]

// Shape
[
  ...
  ['10001', {
    latitude: 40.750634,
    longitude: -73.997176
  }],
  ...
]
```

### Map

```js
const usZips = require('us-zips/map')

console.log(usZips.get('90210'))
// { latitude: 34.100517, longitude: -118.41463 }
```

## Install

With [Yarn](https://yarnpkg.com/en/) or [npm](https://npmjs.org/) installed, run:

```shell
yarn add us-zips

# ...or, if using `npm`
npm install us-zips
```

## Acknowledgments

Data for ZIP codes and their geolocations was generated from [this file](http://www2.census.gov/geo/docs/maps-data/data/gazetteer/2015_Gazetteer/2015_Gaz_zcta_national.zip), which can be downloaded from the [US Census Bureau map data page](http://www.census.gov/geo/maps-data/data/gazetteer2015.html).

## See Also

- [`blakek/geo2zip`](https://github.com/blakek/geo2zip) - get the nearest zip code from a geolocation
- [US Census Bureau - map data page](http://www.census.gov/geo/maps-data/data/gazetteer2015.html)
- [`manuelbieh/Geolib`](https://github.com/manuelbieh/Geolib) - easily do stuff with a list of geolocations (e.g. find nearest, get within radius)

## License

MIT
