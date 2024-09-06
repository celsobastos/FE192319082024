const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', function(req, res) {
    res.send('olá deu certo, na url "/"');
});

app.get('/usuario', function(req, res) {
    res.status(200).json({usuario: 'Amadeu'});
});

app.post('/cadastro', function(req, res) {
    res.status(200).json({status: true});
    console.log('chegou: ' , req.body);
});

const hostname = '127.0.0.1';
const port = 3000;
// Inicie o servidor para escutar as requisições HTTP
app.listen(port, hostname, () => {
   console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
