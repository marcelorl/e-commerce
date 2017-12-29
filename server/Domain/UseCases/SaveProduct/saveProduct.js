const dependencies = {
  Repository: require('Infra/repositories/ProductsRepository')
};

const SaveProduct = (data, injection) => {
  const { Repository } = Object.assign({}, dependencies, injection);

  return Repository.save(data);
};

module.exports = SaveProduct;
