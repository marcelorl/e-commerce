const calcTotalPrice = require('./Steps/calcTotalPrice');
const listByIdAndQuantity = require('./Steps/listByIdAndQuantity');
const calcProductsPriceWithDiscount = require('./Steps/calcProductsPriceWithDiscount');
const mergeQuantitiesIntoProducts = require('./Steps/mergeQuantitiesIntoProducts');

const dependencies = {
  Repository: require('Infra/repositories/ProductsRepository')
};

const ListProduct = async (ids, injection) => {
  const { Repository } = Object.assign({}, dependencies, injection);

  try {
    const uniqueIds = [...new Set(ids)];
    const idsAndQuantities = listByIdAndQuantity(ids);

    const uniqueProducts = await Repository.list(uniqueIds);

    const listProductWithQuantities = mergeQuantitiesIntoProducts(uniqueProducts, idsAndQuantities);
    const fullList = calcProductsPriceWithDiscount(listProductWithQuantities);
    const total = calcTotalPrice(fullList);

    const result = {
      list: fullList,
      total
    };

    return result;
  } catch (err) {
    console.log('PreviewCheckout Error -> ', err);

    return new Error(err);
  }

};

module.exports = ListProduct;
