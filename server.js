const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "https://skoriee.github.io"
}));

app.use(express.json());


// ==========================
// ROTA PRINCIPAL
// ==========================

app.get("/", function(req, res) {

    res.send("Backend do Cinema Domingo funcionando! 🎬");

});


// ==========================
// RECEBER HORÁRIO
// ==========================

app.post("/horario", async function(req, res) {

    const horario = req.body.horario;

    console.log("Horário escolhido:", horario);

    try {

        const resposta = await fetch(
            `${process.env.EVOLUTION_URL}/message/sendText/${process.env.EVOLUTION_INSTANCE}`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "apikey": process.env.EVOLUTION_API_KEY
                },

                body: JSON.stringify({

                    number: "120363139929290271@g.us",

                    text: `🎬 Cinema Domingo!

Ela escolheu o horário: ${horario} 🥰❤️`

                })

            }
        );

        const dados = await resposta.json();

        console.log("Resposta da Evolution API:", dados);

        res.json({

            sucesso: true,
            mensagem: "Horário recebido e mensagem enviada!"

        });

    } catch (erro) {

        console.error("Erro ao enviar mensagem:", erro);

        res.status(500).json({

            sucesso: false,
            mensagem: "Erro ao enviar mensagem."

        });

    }

});


const PORT = process.env.PORT || 3000;


app.listen(PORT, function() {

    console.log(`Servidor rodando na porta ${PORT}`);

});
