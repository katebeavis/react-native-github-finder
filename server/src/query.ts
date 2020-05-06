import { forwardTo } from 'prisma-binding';

const Query = {
  notes: forwardTo('db'),
};

export default Query;
