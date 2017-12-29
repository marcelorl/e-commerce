const mergeQuantitiesIntoProducts = (list, idsAndQuantities) =>
  list.map(product => {
    product.quantity = idsAndQuantities[product.id];

    return product;
  });

module.exports = mergeQuantitiesIntoProducts;
