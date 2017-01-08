'use strict';

// Could not use import as this file is being shared with client
const _ = require('lodash');

var counties = [
  { name: 'Alamance', placeid: 'ChIJ2dlVg0ErU4gR6n2xZz3jM9U' },
  { name: 'Alexander', placeid: 'ChIJxwSNDe4_UYgRjngrTaft86U' },
  { name: 'Alleghany', placeid: 'ChIJ2RmlFliWUYgRWfAwxPfNMYE' },
  { name: 'Anson', placeid: 'ChIJNdDA5yf4VIgRiif7CD6B6EI' },
  { name: 'Ashe', placeid: 'ChIJ3xYC70SsUYgRGBwaPv-MybU' }
];

exports = module.exports = {
  counties: counties,
  names: _.map(counties, 'name')
}
