import express from 'express';
import path from 'path';
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, '../build/')));

app.get('/', (req, res) => {
  res.send('HELLO WORLD!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
