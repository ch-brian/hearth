import express from 'express';
import path from 'path';
const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, '../build/')));

app.get('/', (req, res) => {
  console.log('fired');
  res.send('HELLO WORLD!');
});

app.get('/test', (req, res) => {
  console.log('test get fired');
  res.send('Test Endpoint');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
