const express = require("express");
const cors = require("cors");

const app = express();

// Permite que o seu site converse com o backend
app.use(cors({
    origin: "https://skoriee.github.io"
}));

app.use(express.json());

// Rota inicial
app.get("/", function(req, res) {

    res.send("Backend do Cinema Domingo funcionando! 🎬");

});

// Recebe o horário escolhido
app.post("/horario", function(req, res) {

    const horario = req.body.horario;

    console.log("Horário escolhido:", horario);

    res.json({
        sucesso: true,
        mensagem: "Horário recebido!"
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {

    console.log(`Servidor rodando na porta ${PORT}`);

});
