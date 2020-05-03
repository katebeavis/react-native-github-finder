import { forwardTo } from 'prisma-binding';

const Query = {
  notes: forwardTo('db'),
  hello: () => 'Hello World',
};

export default Query;
