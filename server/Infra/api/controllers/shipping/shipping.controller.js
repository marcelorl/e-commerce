const dependencies = {
  Shipping: require('Domain/UseCases/Shipping')
};

exports.shipping = async (req, res, injection) => {
  const { Shipping } =  Object.assign({}, dependencies, injection);

  return Shipping(req.query.cep)
    .then(shippingData =>
      res.send(shippingData)
    );
};
