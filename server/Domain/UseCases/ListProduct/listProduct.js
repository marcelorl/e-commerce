const dependencies = {
  Repository: require('Infra/repositories/ProductsRepository')
};

const ListProduct = (injection) => {
  const { Repository } = Object.assign({}, dependencies, injection);

  return Repository.list();
};

module.exports = ListProduct;
