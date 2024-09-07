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

// app.get('/usuario', function(req, res) {
//     res.status(200).json({usuario: 'Amadeu'});
// });

app.post('/cadastro', function(req, res) {
    res.redirect('http://127.0.0.1:5500/index.html')
    console.log('chegou: ' , req.body);
});

app.post('/contatos', function(req, res) {

    setTimeout(() => {
        res.json({status: true, mensagem: 'Dados salvo com sucesso.'})
        console.log('Dados de Contato: ' , req.body);
    }, 5000)

});

const hostname = '127.0.0.1';
const port = 3000;
// Inicie o servidor para escutar as requisições HTTP
app.listen(port, hostname, () => {
   console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
