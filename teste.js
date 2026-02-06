const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('FUNCIONANDO');
});

app.listen(3001, () => {
  console.log('SERVIDOR RODANDO NA 3001');
});
