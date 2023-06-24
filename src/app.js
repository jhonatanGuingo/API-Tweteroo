import express from 'express';
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const usuario = [];
const tweets = [];
app.get('/tweets', (req, res) => {
    res.send('retorna os 10 últimos tweets');
})

app.post('/sign-up', (req, res) => {
    usuario.push(req.body)
    res.send('OK')
})

app.post('/tweets', (req, res) => {
    const {username} = req.params;
    if(!usuario.find(username)){
        res.send('UNAUTHORIZED')
        return
    }

    tweets.push(req.body)
})
app.listen(5000, () => console.log('server is running on port 5000'));