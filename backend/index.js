const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "e147ba20-341f-4d97-ac6c-54660fd8136f"}}
    )

    return res.status(r.status).json(r.data)
  } catch (e) {
    if (e.response && e.response.status) {
        return res.status(e.response.status).json(e.response.data);
      } else {
        // Trate o erro de acordo com a situação
        // ou retorne uma resposta de erro padrão
        console.log('deu ruim')
      }
  }
 
 
});

app.listen(3001);