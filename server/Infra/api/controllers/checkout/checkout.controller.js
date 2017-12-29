const dependencies = {
  Checkout: require('Domain/UseCases/Checkout'),
  PreviewCheckout: require('Domain/UseCases/PreviewCheckout')
};

exports.checkout = async (req, res, injection) => {
  const { Checkout } =  Object.assign({}, dependencies, injection);
  const data = req.body;

  const paymentInfo = await Checkout(data);

  res.send(paymentInfo);
};

exports.preview = async (req, res, injection) => {
  const { PreviewCheckout } =  Object.assign({}, dependencies, injection);
  const ids = req.query.ids;

  const products = await PreviewCheckout(ids);

  res.send(products);
};
