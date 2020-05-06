import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import {
  ApolloServer,
  introspectSchema,
  makeRemoteExecutableSchema,
} from 'apollo-server-express';
import * as express from 'express';
import * as cors from 'cors';
import { importSchema } from 'graphql-import';
import * as path from 'path';
import { mergeSchemas } from 'graphql-tools';
import { fetch } from 'cross-fetch';
import { HttpLink } from 'apollo-link-http';

import Query from './query';
import Mutation from './mutation';
import db from './db';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/api/healthz', (req, res) => {
  res.send('OK');
});

const resolvers = { Query, Mutation };

const prismaSchema = path.resolve('src/schema.graphql');

const prisma = importSchema(prismaSchema);

const createSchema = async () => {
  const link = new HttpLink({
    uri: `https://api.github.com/graphql`,
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    fetch,
  });

  const schema = await introspectSchema(link);

  return makeRemoteExecutableSchema({
    schema,
    link,
  });
};

const mergedSchema = async () =>
  mergeSchemas({
    schemas: [prisma, await createSchema()],
    resolvers,
  });

const createServer = async () => {
  return new ApolloServer({
    schema: await mergedSchema(),
    introspection: true,
    context: ({ req }): any => {
      return {
        db,
      };
    },
  });
};

app.use(
  cors({
    credentials: true,
    origin: [process.env.PRISMA_URL!, process.env.PLAYGROUND_URL!],
  })
);

async function start() {
  const apollo = await createServer();
  apollo.applyMiddleware({ app });
  app.listen({ port: process.env.PORT }, () => {
    console.log('Server listening on PORT', process.env.PORT);
  });
}

start();
