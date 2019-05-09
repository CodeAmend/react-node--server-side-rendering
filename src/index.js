import express from 'express';
import renderer from './helpers/renderer.js';

const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer());
});

app.get('/normal', (req, res) => {
  
});

app.listen(port, () => {
  console.log('listening to port ' + port);
});
