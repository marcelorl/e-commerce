const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World1!'));

app.listen(process.env.CARE_API_PORT || 1337, () => console.log('Example app listening on port 1337!'));