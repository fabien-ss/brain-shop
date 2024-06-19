require('dotenv').config();

const express = require('express');
const BrainShop = require('./brainshop/BrainShop');
const app = express();
const port = 3000;
var cors = require('cors');
let brain = new BrainShop();
app.use(cors());

let coutner = 1;

app.get('/', (req, res) => {
  console.log("Brain shop ",process.env.BRAINSHOP)
  res.send('Hello World!');
});

app.get('/brainshop/:question', async (req, res) => {
  coutner += 1;
  console.log(`call ${counter} ${req.ip} `)
  const talk = await brain.talk(req.ip, req.params.question);
  res.send(talk);    
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
