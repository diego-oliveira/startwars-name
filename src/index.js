var uniqueRandomArray = require('unique-random-array');
var startWarsNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(startWarsNames);

module.exports = {
  all: startWarsNames,
  random: random
};

function random(number) {
  if(number == undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
  
}
