// O(N) Space
//O(N)  runtime

function findUniqueIds(Ids) {
  var idOccurences = new Map();

  Ids.forEach(function(deliveryId) {
       if (idOccurences.has(deliveryId)) {
           var newCount = idOccurences.get(deliveryId) + 1;
           idOccurences.set(deliveryId, newCount);
       } else {
           idOccurences.set(deliveryId, 1);
       }
   });

   for (var [id, count] of idOccurences) {
       if (count === 1) {
           return id;
       }
   }
}

//with a O(1) space complexity and O(N) runetime
//Bitwise xor operator returns
function findUniqueIds(Ids) {
  var uniqueDeliveryId = 0;
  Ids.forEach(function(deliveryId) {
    uniqueDeliveryId ^= deliveryId;
  });
  return uniqueDeliveryId;
}
