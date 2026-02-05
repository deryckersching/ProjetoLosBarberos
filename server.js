const express = require('express');
const { pool } = require('./config/db'); //importa a pool de conexões com o 
const app = express();