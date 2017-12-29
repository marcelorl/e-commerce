const dependencies = {
  Pagarme: require('pagarme'),
  PreviewCheckout: require('Domain/UseCases/PreviewCheckout'),
  Shipping: require('Domain/UseCases/Shipping')
};

const calcAmount = (checkout, shipping) => {
  const sum = parseFloat(checkout.total) + parseFloat(shipping.price.Valor);

  const sumToCents = sum * 100;

  const convertToInt = parseInt(sumToCents);

  return convertToInt;
};


const cardTransform = data =>
  ({
    card_holder_name: data.card.holderName,
    card_expiration_date: data.card.expirationDate.replace('/', ''),
    // forced this number, once it cant just be a random one
    card_number: '4111111111111111',
    card_cvv: data.card.cvv
  });

const customerTransform = data =>
  ({
    customer: {
      external_id: "#",
      name: data.user.name,
      email: data.user.email,
      type: 'individual',
      country: "br",
      documents: [
        {
          type: 'cpf',
          number: '00000000000'
        }
      ],
      phone_numbers: [
        '+5511999998888'
      ]
    }
  });

const billingTransform = (data, address) =>
  ({
    billing: {
      name: data.user.name,
      address: {
        country: 'br',
        state: address.uf,
        city: address.localidade,
        street: address.logradouro,
        street_number: data.address.number,
        zipcode: address.cep.replace('-', '')
      }
    }
  });

const itemsTransform = (checkout) => {
  const items = checkout.list.map(product => ({
    id: product.id,
    title: product.name,
    unit_price: product.price * 100,
    quantity: product.quantity,
    tangible: true
  }));

  return { items };
};

const Checkout = async (data, injection) => {
  const { Pagarme, PreviewCheckout, Shipping } = Object.assign({}, dependencies, injection);

  try {
    const api = await Pagarme.client.connect({ api_key: 'ak_test_Fdo1KyqBTdnTFeLgBhkgRcgm9hwdzd' });

    const productIds = data.ids;
    const cep = data.address.cep;

    const checkoutInfo = await PreviewCheckout(productIds);
    const shippingInfo = await Shipping(cep);

    const amount = calcAmount(checkoutInfo, shippingInfo);

    const transactionData = Object.assign({},
      {
        amount,
        payment_method: data.paymentMethod
      },
      customerTransform(data),
      billingTransform(data, shippingInfo.address),
      itemsTransform(checkoutInfo)
    );

    if (data.paymentMethod === 'credit_card') {
      Object.assign(transactionData, cardTransform(data));
    }

    return api.transactions.create(transactionData)
      .catch(err => {
        console.log(JSON.stringify(err));

        return new Error(JSON.stringify(err));
      })
  } catch (err) {
    return new Error(err);
  }
};

module.exports = Checkout;
