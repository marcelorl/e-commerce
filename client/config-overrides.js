module.exports = config => {
  const { entry = [] } = config;
  const devtool = 'source-map';

  entry.unshift('bootstrap/dist/css/bootstrap.css');

  const nConfig = Object.assign({}, config, { devtool, entry });

  return nConfig;
};
