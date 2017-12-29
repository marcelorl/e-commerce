const calcTotalPrice = list =>
  list.reduce((acc, product) =>
    acc + product.total
  , 0);

module.exports = calcTotalPrice;
