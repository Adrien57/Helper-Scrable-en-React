// Import
const express = require('express');
const bodyParser = require('body-parser');
const words = require('./words');

// Server
const app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Get
app.get('/', (req, res) => {
  res.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir taper en POST avec Axios avec l'URL suivante :</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><a href="http://localhost:3000/words">http://localhost:3000/words</a></li>
      </ul>
    </div>
  `);
});

// tous les mots
const permutatorAll = (arr) => {
  let poss = [];
  if( arr.length == 1 ) return arr;
  for( let k in arr ) {
    let letter = arr[k];
    permutatorAll(arr.join('').replace(letter,'').split('')).concat('').map((subtree) => {
        poss.push([letter].concat(subtree));
    });
  }
  return poss;
};

// mots de 7 lettres
const permutator = (inputArr) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
  }
  permute(inputArr)
  return result;
}

// Words
app.post('/words', (req, res) => {
  const { letters } = req.body;
  if (letters && typeof letters === 'object' && letters.length === 7) {
    const comb = permutatorAll(letters).map(perm => perm.join(''));
    const ok = words.filter(word => comb.includes(word));
    res.send(ok);
  }
  else {
    res.status(400).end();
  }
});

// Start on :3000
app.listen(3000);
