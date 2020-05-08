import { forwardTo } from 'prisma-binding';

const Mutation = {
  createNote: forwardTo('db'),
  deleteNote: forwardTo('db'),
};

export default Mutation;
