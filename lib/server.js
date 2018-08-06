
import express from 'express';
import { port } from './config';


const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', { answer: 222221 });
});

app.listen(port, function listenHandeler() {
  console.info(`Running on ${port}.....`);
});