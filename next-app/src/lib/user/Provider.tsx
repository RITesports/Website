import { useQuery } from '@apollo/client';
import { ReactNode } from 'react';

import UserContext from './Context';
import { ME, MeData } from './queries';

export type UserProviderProps = { children: ReactNode };
const UserProvider = ({ children }: UserProviderProps) => {
  const { data } = useQuery<MeData>(ME);

  return (
    <UserContext.Provider value={data?.me || null}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
