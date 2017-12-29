const uuid = require('uuid/v1');

const dependencies = {
  ListProduct: require('Domain/UseCases/ListProduct'),
  ReadProduct: require('Domain/UseCases/ReadProduct'),
  SaveProduct: require('Domain/UseCases/SaveProduct')
};

exports.list = (req, res, injection) => {
  const { ListProduct } =  Object.assign({}, dependencies, injection);

  return ListProduct(req.body)
    .then(products =>
      res.send(products)
    );
};

exports.read = (req, res, injection) => {
  const { ReadProduct } =  Object.assign({}, dependencies, injection);

  return ReadProduct(req.params.id)
    .then(product =>
      res.send(product)
    );
};

exports.save = (req, res, injection) => {
  const { SaveProduct } = Object.assign({}, dependencies, injection);

  const product = Object.assign(
    {},
    req.body,
    {
      id: uuid(),
      image: req.file.filename
    }
  );

  SaveProduct(product);

  return res.send('saved');
};
