import React, { useState, useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import UserContext from './UserContext';
import { IUserContext, IUser, Error } from '../../Types/Types';
import { UserQuery } from '../../Queries/Queries';
import { NOT_FOUND } from '../../Constants/Constants';

export const useUser = () => useContext<IUserContext>(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [getUser, { loading, error, data }] = useLazyQuery(UserQuery, {
    errorPolicy: 'all',
  });

  const [user, setUser] = useState<IUser | null>(null);
  const [userNotFound, setUserNotFound] = useState<boolean>(false);

  useEffect(() => {
    if (!loading && data && data.user) {
      setUser(data.user);
    }
  }, [loading]);

  useEffect(() => {
    if (
      error &&
      error.graphQLErrors.length > 0 &&
      error.graphQLErrors[0].extensions?.exception
    ) {
      const errorArr = error.graphQLErrors[0].extensions?.exception;
      const notFoundError = errorArr.errors.filter((err: Error) => {
        return err.type === NOT_FOUND;
      });

      if (notFoundError.length > 0) {
        setUserNotFound(true);
      }
    }
  }, [error]);

  return (
    <UserContext.Provider
      value={{
        getUser,
        user,
        userNotFound,
        setUserNotFound,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
