import { useContext } from 'react';

import UserContext from './Context';

const useUser = () => {
  const user = useContext(UserContext);
  if (user === false) throw new Error('useUser Must Be Used Within A UserProvider');
  return user;
};

export default useUser;
