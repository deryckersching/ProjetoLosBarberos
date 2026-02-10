const express = require('express');
const app = express();

// Importar os módulos de rotas
const agendaRoutes = require('./routes/agendas');
const barbeirosRoutes = require('./routes/barbeiros');
const clientesRoutes = require('./routes/clientes');
const servicosRoutes = require('./routes/servicos');

// Usar os módulos de rotas
app.use('/clientes', agendaRoutes);
app.use('/categorias', barbeirosRoutes);
app.use('/movimentacoes', clientesRoutes);
app.use('/historico-estoque', servicosRoutes);

module.exports = app;