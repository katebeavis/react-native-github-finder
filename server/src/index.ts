import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import * as cors from 'cors';
import { importSchema } from 'graphql-import';
import * as path from 'path';
import { mergeSchemas, makeExecutableSchema } from 'graphql-tools';

import Query from './query';
import db from './db';
import { typeDefs } from './schema';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/api/healthz', (req, res) => {
  res.send('OK');
});

const resolvers = { Query };

const prismaSchema = path.resolve('src/schema.graphql');

const prisma = importSchema(prismaSchema);

const main = makeExecutableSchema({ typeDefs });

const schema = mergeSchemas({
  schemas: [prisma, main],
  resolvers,
});

const apollo = new ApolloServer({
  schema,
  resolvers,
  introspection: true,
  context: ({ req }): any => {
    return {
      db,
    };
  },
});

apollo.applyMiddleware({ app });

app.use(
  cors({
    credentials: true,
    origin: [process.env.PRISMA_URL!, process.env.PLAYGROUND_URL!],
  })
);

app.listen({ port: process.env.PORT }, () => {
  console.log('Server listening on PORT', process.env.PORT);
});
