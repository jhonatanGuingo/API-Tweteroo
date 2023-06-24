import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const usuario = [];
const tweets = [];
app.get("/tweets", (req, res) => {
  res.send("retorna os 10 últimos tweets");
});

app.post("/sign-up", (req, res) => {
  usuario.push(req.body);
  res.send("OK");
  console.log(usuario);
});

app.post("/tweets", (req, res) => {
  const { username } = req.body;
  console.log(username);
  const usuarioRegistrado = usuario.find(
    (pessoa) => pessoa.username === username
  );

  if (usuarioRegistrado) {
    let tweet = {
      username: usuarioRegistrado.username,
      avatar: usuarioRegistrado.avatar,
      tweet: req.body.tweet,
    };
    tweets.push(tweet);
    res.send(tweets);
    return;
  }
  res.send("UNAUTHORIZED");
});
app.listen(5000, () => console.log("server is running on port 5000"));
