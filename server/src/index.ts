import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser';
import { Request } from 'express';

import createServer from './createServer';

dotenv.config();

const server = createServer();

server.express.use(cookieParser());

server.start(
  {
    cors: {
      credentials: true,
      origin: [process.env.PRISMA_URL!, process.env.PLAYGROUND_URL!],
    },
  },
  (server: any) => {
    console.log(`Server is running on port ${server.port}`);
  }
);
