const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware para permitir conexões de qualquer origem
app.use(cors());

// Middleware para processar dados JSON
app.use(bodyParser.json());

// Dados simulados para rastreamento (você pode substituir pelo banco de dados futuramente)
const pedidos = {
    "123456789": { status: "Entregue", detalhes: "Pedido entregue em 01/12/2024." },
    "987654321": { status: "Em transporte", detalhes: "Pedido a caminho do destino." },
    "111222333": { status: "Aguardando envio", detalhes: "Pedido ainda não foi despachado." }
};

// Rota para rastrear pedido
app.post('/rastrear', (req, res) => {
    const { cpf, pedido } = req.body;

    // Simulação de busca pelo CPF ou número do pedido
    if (pedidos[pedido]) {
        res.json({ sucesso: true, dados: pedidos[pedido] });
    } else {
        res.json({ sucesso: false, mensagem: "Nenhum pedido foi encontrado. Tente novamente." });
    }
});

// Inicializar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});


  