import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, '../build/')));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    // Don't give the specific database errors to the client.
    if (err.message.startsWith('Database Error: ')) {
      return new Error('Internal server error');
    }
    // Otherwise return the original error.  The error can also
    // be manipulated in other ways, so long as it's returned.
    return err;
  },
});

server.applyMiddleware({ app });

// test endpoint
app.get('/test', (req, res) => {
  console.log('test endpoint fired');
  res.send('Test Endpoint');
});

// 404 handler
app.use('*', (req, res) => {
  console.log('404 Error');
  res.status(404).send('Page Not Found');
});

// generic error handler
app.use((err, req, res, next) => {
  const errorObj = {
    log: 'Express error handler caught unknown error',
    status: 400,
    message: { err: 'error occurred' },
  };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
