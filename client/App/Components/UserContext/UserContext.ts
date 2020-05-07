import { createContext } from 'react';

import { IUserContext } from './types';

const UserContext = createContext<IUserContext>({
  user: null,
  getUser: null,
  loading: null,
  error: null,
});

export default UserContext;
