import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, '../build/')));

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

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
