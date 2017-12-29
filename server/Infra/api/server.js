const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const router = require('Infra/api/controllers/router');

app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.use('/api', router);

app.use('/images', express.static(path.resolve(__dirname, '../../uploads')));

app.set('port', (process.env.PORT || 1337));

app.listen(app.get('port'), function () {
  console.log(`Example app listening on port ${app.get('port')}!`);
});
