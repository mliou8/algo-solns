//bottom up approach
var cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
];

var capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);

function maxDuffelBagValue(cakeTypes, weightCapacity) {
  // we make an array to hold the maximum possible value at every
  //duffel bag weight capacity from 0 to weightCapacity
  // starting each index with value 0

  var maxValuesAtCapacities  [];
  for (var i  0; i < weightCapacity; i++) {
    maxValuesAtCapacities[i] = 0;
  }

  for (var currentCapacity = 0; currentCapacity < weightCapacity; currentCapacity++) {
    // set a variable to hold the max monetary value so for currentCapacity
    var currentMaxValue = 0;

    // we use a for loop here instead of forEach because we return infinity
    // if we get a cakeType that weighs nothing and has a value but forEach
    // loops always return undefined and you can't break out of them without
    // throwing an exception
    for (var j = 0; j < cakeTypes.length; j++) {
      var cakeType = cakeTypes[j];

      // if a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
      if (cakeType.weight === 0 && cakeType !== 0) {
        return Infinity;
      }
      // if the current cake weighs as much or less than the current weight capacity
      // it's possible taking the cake would give a better value
      if (cakeType.weight <= currentCapacity) {
        // so we should check do we take the cake or not?
        // if we use the cake, the most kilograms we can include in addition to the cake
        // we're adding is the currenct capacity minus the cake's weight. we find the maxValuesAtCapacities
        // value at that integer capacity in our array maxValuesAtCapacities
        var maxValueUsingCake = cakeType.value + maxValuesAtCapacities

      }

    }


  }



}
