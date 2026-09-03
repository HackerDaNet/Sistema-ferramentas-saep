const express = require('express');
const cors = require('cors');
const connection = require('./db');

const server = express();
server.use(cors());
server.use(express.json());

server.get('/produtos', (req, res) => {
    const sql = 'SELECT * FROM PRODUTO';

    connection.query(sql, (erro, resultado) => {
        if(erro){
            return res.status(500).json({erro: erro.message });
        }
        return res.json(resultados);
    })
})