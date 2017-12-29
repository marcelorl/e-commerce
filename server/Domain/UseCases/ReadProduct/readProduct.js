const dependencies = {
  Repository: require('Infra/repositories/ProductsRepository')
};

const ReadProduct = (id, injection) => {
  const { Repository } = Object.assign({}, dependencies, injection);

  return Repository.read(id);
};

module.exports = ReadProduct;
