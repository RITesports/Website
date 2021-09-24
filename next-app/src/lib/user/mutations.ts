import { gql } from '@apollo/client';

import User from './user';

export const LOG_IN = gql`
  mutation LogIn($logInInput: LoginInput!) {
    logIn(input: $logInInput) {
      _id
      email
      roles
    }
  }
`;
export interface LogInData {
  logIn: Pick<User, '_id' | 'email' | 'roles'> | null
}

export interface LogInVariables {
  logInInput: {
    email: string;
    password: string;
  }
}

export const LOG_OUT = gql`
  mutation LogOut {
    logOut
  }
`;

export interface LogOutData {
  logOut: boolean
}
