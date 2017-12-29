const Correios = require('node-correios');

const correios = new Correios();

const dependencies = {
  correios
};

const Shipping = (cep, injection) => {
  const { correios } = Object.assign({}, dependencies, injection);

  try {
    const result = new Promise((resolve, reject) =>
      correios.consultaCEP({ cep }, (errA, address) => {
        if (errA) {
          return reject(errA);
        }

        // Fetch shipping prices
        const shippingPriceArgs = {
          nCdServico: 41106,
          sCepOrigem: '69945-000',
          sCepDestino: cep,
          nVlPeso: 2,
          nCdFormato: 1,
          nVlComprimento: 30,
          nVlAltura: 30,
          nVlLargura: 30,
          nVlDiametro: 30
        };

        return correios.calcPrecoPrazo(shippingPriceArgs, (errP, price) => {
          if (errP) {
            return reject(errP);
          }

          return resolve({
            address,
            price: price.shift()
          });
        });
      })
    );

    return result;
  } catch (err) {
    new Error(err);
  }
};

module.exports = Shipping;
