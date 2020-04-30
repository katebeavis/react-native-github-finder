import { forwardTo } from 'prisma-binding';

const Mutation = {
  createNote: forwardTo('db'),
};

export default Mutation;
