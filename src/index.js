import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer.js';
import createStore from './helpers/createStore';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(port, () => {
  console.log('listening to port ' + port);
});

function apple() {
  'sdfdfas
  [dfasdfadf]
  {dsfadsf} 
  (sdfad)

  
}

app();
