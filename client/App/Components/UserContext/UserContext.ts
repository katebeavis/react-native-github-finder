import { createContext } from 'react';

import { IUserContext } from '../../Types/Types';

const UserContext = createContext<IUserContext>({
  user: null,
  getUser: () => {},
  loading: false,
  error: undefined,
});

export default UserContext;
