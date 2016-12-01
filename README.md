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

If you want to get the nearest ZIP, just use [`blakek/geo2zip`](https://github.com/blakek/geo2zip).

## Data Format

Returns an object with keys for each ZIP code.  The value of each key is an object with lat and lng properties.

```js
const usZips = {
  '12345': {
    lat: 12.345678,
    lng: -87.654321
  },
  ...
}
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install --save us-zips
```

## Acknowledgments

Data for ZIP codes and their geolocations was generated from [this file](http://www2.census.gov/geo/docs/maps-data/data/gazetteer/2015_Gazetteer/2015_Gaz_zcta_national.zip), which can be downloaded from the [US Census Bureau map data page](http://www.census.gov/geo/maps-data/data/gazetteer2015.html).

## See Also

- [`blakek/geo2zip`](https://github.com/blakek/geo2zip) - get the nearest zip code from a geolocation
- [US Census Bureau - map data page](http://www.census.gov/geo/maps-data/data/gazetteer2015.html)
- [`manuelbieh/Geolib`](https://github.com/manuelbieh/Geolib) - easily do stuff with a list of geolocations (e.g. find nearest, get within radius)

## License

MIT

