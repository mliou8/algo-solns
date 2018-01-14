const stockPrices = [42, 13, 29, 39, 59, 281, 11, 2394]

function getMaxProfit(stockPrices) {
  if(stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  var minPrice = stockPrices[0];
  var maxProfit = stockPrices[1] - stockPrices[0];

  for (var i = 0; i < stockPrices.length; i++) {
    var currentPrice = stockPrices[i];
    minPrice = Math.min(minPrice, currentPrice);

    var currentProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, currentProfit)
  }
  return maxProfit;
}
