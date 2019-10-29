# us-zips

> A list of US ZIP codes and their geolocations

I needed a list of ZIP codes, and the [US Census Bureau had one][1].

## Usage

Example: get the nearest zip to a geolocation

```javascript
const geolib = require('geolib');
const usZips = require('us-zips');

const somewhere = {
  lat: 33.1234,
  lng: -88.4321
};

geolib.findNearest(somewhere, usZips); // { distance: 12834, key: '39341' }
```

If you want to get the nearest ZIP, see if
[`geo2zip`][2] fits your needs.

## Data Formats

### Default (Object)

The default export returns an object. The object's keys are each ZIP code and
values are objects with latitude and longitude properties.

```javascript
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

```javascript
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

```javascript
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

```javascript
const usZips = require('us-zips/map');

console.log(usZips.get('90210'));
// { latitude: 34.100517, longitude: -118.41463 }
```

## Install

With [Yarn](https://yarnpkg.com/en/) or [npm](https://npmjs.org/) installed,
run:

```shell
yarn add us-zips

# ...or, if using `npm`
npm install us-zips
```

## Acknowledgments

Data for ZIP codes and their geolocations was generated from [this file][1],
which can be downloaded from the [US Census Bureau map data
page][4].

## See Also

- [`blakek/geo2zip`][2] - get the nearest zip code from a geolocation
- [`blakek/standardize-geolocation`][3] - takes geolocations of different
  formats and outputs a standardized version
- [US Census Bureau - map data page][4]

## License

MIT

[1]: https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2019_Gazetteer/2019_Gaz_zcta_national.zip
[2]: https://github.com/blakek/geo2zip
[3]: https://github.com/blakek/standardize-geolocation
[4]: https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.html
