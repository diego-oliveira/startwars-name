var uniqueRandomArray = require('unique-random-array');
var startWarsNames = require('./starwars-names.json');
console.log(startWarsNames);

module.exports = {
  all: startWarsNames,
  random: uniqueRandomArray(startWarsNames)
};
