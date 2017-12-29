const calcWithDiscount = require('./calcWithDiscount');

const factorDiscounts = {
  'A': {
    progressive: 1,
    limit: 5
  },
  'B': {
    progressive: 5,
    limit: 3
  },
  'C': {
    progressive: 10,
    limit: 3
  }
};

const calcDiscount = (num1, num2) =>
  parseInt(num1, 10) * parseInt(num2)

const isQuantityBiggerThanFactor = (quantity, factor) => quantity > factor;

const calcProductsPriceWithDiscount = list =>
  list.map(product => {
    const factor = factorDiscounts[product.factor];

    let discount = calcDiscount(product.quantity, factor.progressive);

    if (isQuantityBiggerThanFactor(product.quantity > factor.limit)) {
      discount = calcDiscount(factor.progressive, factor.limit);
    }
    const fullPrice = product.price * product.quantity;

    product.total = calcWithDiscount(fullPrice, discount);

    return product;
  });

module.exports = calcProductsPriceWithDiscount;
