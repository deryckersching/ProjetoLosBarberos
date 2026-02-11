const express = require("express");
const { testConnection } = require("./config/db");

const clientesRoutes = require("./routes/clientes");
const barbeirosRoutes = require("./routes/barbeiros");
const agendaRoutes = require("./routes/agenda");

const app = express();

app.use(express.json());

// rotas
app.use("/clientes", clientesRoutes);
app.use("/barbeiros", barbeirosRoutes);
app.use("/agenda", agendaRoutes);

app.get("/", (req, res) => {
  res.send("API LosBarbeiros rodando!");
});

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);

  const result = await testConnection();
  console.log(result.message);
});
