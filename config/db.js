//aqui ficam as configurações de conexão com o banco de dados

const mysql = require("mysql2/promise"); //
require("dotenv").config(); 

// cria uma pool de conexões (se conecta ao banco de dados) usando as variáveis de ambiente (.env)
// pool: um conjunto de conexões que podem ser reutilizadas, melhorando a performance
// podem haver múltiplas conexões abertas ao mesmo tempo (varios bancos e usuários ao mesmo tempo)

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

// Função para testar a conexão com o banco de dados
async function testConnection() {
    try {
        const connection = await pool.getConnection();
        await connection.ping(); // testar se a conexão está ativa
        connection.release(); // libera a conexão de volta para o pool
        return { success: true, message: "Conexão com o banco de dados bem-sucedidos"}
    } catch (error) {
        return { sucess: false, message: `Falha na conexão: ${error.message}` };
    }
}

module.exports = { pool, testConnection }; //exporta a pool e a função de teste para serem usadas em outros arquivos