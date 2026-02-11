const express = require("express");
const { pool } = require("../config/db");

const router = express.Router();

// ✅ GET - listar todos os agendamentos
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM agenda");
    res.json(rows);
  } catch (error) {
    console.error("Erro ao consultar agenda:", error);
    res.status(500).json({ error: "Erro ao consultar agenda", details: error.message });
  }
});

// ✅ GET - buscar agendamento por ID
router.get("/:id", async (req, res) => {
  const agendaId = req.params.id;

  try {
    const [rows] = await pool.execute(
      "SELECT * FROM agenda WHERE Id_agendamento = ?",
      [agendaId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Agendamento não encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Erro ao buscar agendamento:", error);
    res.status(500).json({ error: "Erro ao buscar agendamento", details: error.message });
  }
});

// ✅ POST - criar novo agendamento
router.post("/", async (req, res) => {
  const { Data_agendamento, Hora, Servico, Status_agendamento, id_cliente, CPF_barbeiro } = req.body;

  try {
    const [result] = await pool.execute(
      `INSERT INTO agenda (Data_agendamento, Hora, Servico, Status_agendamento, id_cliente, CPF_barbeiro)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [Data_agendamento, Hora, Servico, Status_agendamento, id_cliente, CPF_barbeiro]
    );

    res.status(201).json({
      message: "Agendamento criado com sucesso",
      id: result.insertId
    });
  } catch (error) {
    console.error("Erro ao criar agendamento:", error);
    res.status(500).json({ error: "Erro ao criar agendamento", details: error.message });
  }
});

// ✅ PUT - atualizar agendamento por ID
router.put("/:id", async (req, res) => {
  const agendaId = req.params.id;
  const { Data_agendamento, Hora, Servico, Status_agendamento, id_cliente, CPF_barbeiro } = req.body;

  try {
    const [result] = await pool.execute(
      `UPDATE agenda
       SET Data_agendamento = ?, Hora = ?, Servico = ?, Status_agendamento = ?, id_cliente = ?, CPF_barbeiro = ?
       WHERE Id_agendamento = ?`,
      [Data_agendamento, Hora, Servico, Status_agendamento, id_cliente, CPF_barbeiro, agendaId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Agendamento não encontrado" });
    }

    res.json({ message: "Agendamento atualizado com sucesso", id: agendaId });
  } catch (error) {
    console.error("Erro ao atualizar agendamento:", error);
    res.status(500).json({ error: "Erro ao atualizar agendamento", details: error.message });
  }
});

// ✅ DELETE - excluir agendamento por ID (ARRUMADO E FUNCIONANDO)
router.delete("/:id", async (req, res) => {
  const agendaId = req.params.id;

  try {
    const [agenda] = await pool.execute(
      "SELECT * FROM agenda WHERE Id_agendamento = ?",
      [agendaId]
    );

    if (agenda.length === 0) {
      return res.status(404).json({ error: "Agendamento não encontrado" });
    }

    const [result] = await pool.execute(
      "DELETE FROM agenda WHERE Id_agendamento = ?",
      [agendaId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Agendamento não encontrado" });
    }

    res.json({
      message: "Agendamento excluído com sucesso",
      agendamento_excluido: agenda[0],
      id: agendaId
    });
  } catch (error) {
    console.error("Erro ao excluir agendamento:", error);
    res.status(500).json({ error: "Erro ao excluir agendamento", details: error.message });
  }
});

module.exports = router;
