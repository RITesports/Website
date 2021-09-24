import jwt from 'jsonwebtoken';
import { GetServerSideProps } from 'next';

import UserRole from './role';

const cookieName = `${process.env.NODE_ENV === 'production' ? '__Host-' : ''}auth-jwt`;

const withAuth = (roles: UserRole[] = [], gssp?: GetServerSideProps): GetServerSideProps => async (ctx) => {
  if (ctx.req.cookies[cookieName]) {
    const token = ctx.req.cookies[cookieName];
    const decoded = jwt.decode(token.slice(0, token.lastIndexOf('.'))); // remove signed part of cookie
    const user = (decoded && typeof decoded === 'object' && Array.isArray(decoded.roles) && decoded) || null;

    if (user) {
      if (roles.every((role) => user.roles.includes(role))) {
        return gssp?.(ctx) || { props: {} };
      }

      return {
        redirect: {
          permanent: false,
          destination: '/403',
        },
      };
    }
  }

  return {
    redirect: {
      permanent: false,
      destination: '/login',
    },
  };
};

export default withAuth;
