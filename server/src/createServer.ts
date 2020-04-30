import { GraphQLServer } from 'graphql-yoga';
import db from './db';

import Query from './query';
import Mutation from './mutation';

const createServer = () => {
  return new GraphQLServer({
    typeDefs: __dirname + '/schema.graphql',
    resolvers: { Query, Mutation },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: (req) => ({ ...req, db }),
  });
};

export default createServer;
