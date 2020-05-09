import { forwardTo } from 'prisma-binding';

const Mutation = {
  createNote: forwardTo('db'),
  deleteNote: forwardTo('db'),
  updateNote: forwardTo('db'),
};

export default Mutation;
