require('dotenv').config();
console.log('Index carregou');

const app = require('./app');
console.log('App carregou');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});















































