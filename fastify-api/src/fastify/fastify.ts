import fastify from 'fastify';
import cookie from 'fastify-cookie';
import formbody from 'fastify-formbody';
import helmet from 'fastify-helmet';
import fs from 'fs';

import cookieJwt from './cookie-jwt';

const createApp = () => {
  const app = fastify({ logger: true, trustProxy: true });

  // Apollo Sandbox doesn't work with CSP, disable in dev
  app.register(helmet, { contentSecurityPolicy: process.env.NODE_ENV === 'production' });
  app.register(cookie, { secret: fs.readFileSync('/run/secrets/cookie_private', 'utf8') });
  app.register(formbody);

  app.register(cookieJwt, {
    expiration: (86400 * 0) + (3600 * 0) + (60 * 30) + 0, // 0d 0h, 30m, 0s
    cookie: {
      name: `${process.env.NODE_ENV === 'production' ? '__Host-' : ''}auth-jwt`,
      signed: true,
    },
    jwt: {
      algorithm: 'RS256',
      secretOrPublicKey: fs.readFileSync('/run/secrets/jwt_public', 'utf8'),
      secretOrPrivateKey: fs.readFileSync('/run/secrets/jwt_private', 'utf8'),
    },
  });

  return app;
};

export default createApp;
