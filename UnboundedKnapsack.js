function maxDuffelBagValue(cakeTypes, weightCapacity) {

   // we make an array to hold the maximum possible value at every
   // duffel bag weight capacity from 0 to weightCapacity
   // starting each index with value 0
   var maxValuesAtCapacities = [];
   for (var i = 0; i < weightCapacity + 1; i++) {
       maxValuesAtCapacities[i] = 0;
   }

   for (var currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {

       // set a variable to hold the max monetary value so far for currentCapacity
       var currentMaxValue = 0;

       cakeTypes.forEach(function(cakeType) {

           // if the current cake weighs as much or less than the current weight capacity
           // it's possible taking the cake would give get a better value
           if (cakeType.weight <= currentCapacity) {

               // so we check: should we use the cake or not?
               // if we use the cake, the most kilograms we can include in addition to the cake
               // we're adding is the current capacity minus the cake's weight. we find the max
               // value at that integer capacity in our array maxValuesAtCapacities
               var maxValueUsingCake = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];

               // now we see if it's worth taking the cake. how does the
               // value with the cake compare to the currentMaxValue?
               currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
           }
       });

       // add each capacity's max value to our array so we can use them
       // when calculating all the remaining capacities
       maxValuesAtCapacities[currentCapacity] = currentMaxValue;
   }

}
