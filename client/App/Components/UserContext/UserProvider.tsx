import React, { useState, useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { Text } from 'react-native';

import UserContext from './UserContext';
import { IUserContext } from './types';
import { UserQuery } from '../../Queries/Queries';

export const useUser = () => useContext<IUserContext>(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [getUser, { loading, error, data }] = useLazyQuery(UserQuery, {
    errorPolicy: 'all',
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!loading && data && data.user) {
      setUser(data.user);
    }
  }, [loading]);

  return (
    <UserContext.Provider
      value={{
        getUser,
        user,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
