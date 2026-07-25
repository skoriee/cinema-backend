const express = require("express");

const app = express();

app.use(express.json());

app.get("/", function(req, res) {
    res.send("Backend do Cinema Domingo funcionando! 🎬");
});

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