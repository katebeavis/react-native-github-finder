import { createContext } from 'react';

import { IUserContext } from '../../Types/Types';

const UserContext = createContext<IUserContext>({
  user: null,
  getUser: () => {},
  userNotFound: false,
  setUserNotFound: () => {},
  loading: false,
  error: undefined,
});

export default UserContext;
