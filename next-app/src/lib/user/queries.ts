import { gql } from '@apollo/client';

import User from './user';

export const ME = gql`
  query Me {
    me {
      _id
      email
      roles
    }
  }
`;

export interface MeData {
  me: Pick<User, '_id' | 'email' | 'roles'> | null;
}
