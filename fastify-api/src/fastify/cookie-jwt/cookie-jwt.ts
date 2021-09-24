import { FastifyPluginCallback } from 'fastify';
import { CookieSerializeOptions } from 'fastify-cookie';
import fp from 'fastify-plugin';
import jwt, {
  Algorithm,
  JwtPayload,
  Secret,
  SignOptions,
} from 'jsonwebtoken';

import User, { UserRole, Users } from '../../apollo/users';

type UserJwt = {
  _id: string;
  roles: UserRole[];
};

type VerifiedUserJwt = JwtPayload & UserJwt;

export type CookieJwtPluginOptions = {
  expiration: number;
  cookie: {
    name: string;
    signed: boolean;
  }
  jwt: {
    algorithm: Algorithm;
    secretOrPublicKey: Secret;
    secretOrPrivateKey: Secret;
  }
};

const cookieJwtPlugin: FastifyPluginCallback<CookieJwtPluginOptions> = (fastify, { expiration, cookie: { name, signed }, jwt: { algorithm, secretOrPublicKey, secretOrPrivateKey } }, done) => {
  const cookieOptions: CookieSerializeOptions = {
    path: '/',
    maxAge: expiration,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',

    signed,
  };

  const jwtOptions: SignOptions = {
    algorithm,
    expiresIn: expiration,
  };

  fastify.decorateRequest('user', null);

  fastify.decorateReply('signJwt', function signJwt(user: User) {
    // type safety
    const payload: UserJwt = {
      _id: user._id.toHexString(),
      roles: user.roles,
    };

    this.setCookie(name, jwt.sign(payload, secretOrPrivateKey, jwtOptions), cookieOptions);
  });

  fastify.decorateReply('clearJwt', function clearJwt() {
    this.clearCookie(name, cookieOptions);
  });

  fastify.addHook('onRequest', async function onRequestHookHandler(request, reply) {
    if (request.cookies[name]) {
      try {
        let cookieValue = request.cookies[name];
        if (signed) {
          const { value, valid } = this.unsignCookie(cookieValue);
          if (!valid || !value) throw new Error('Cookie Not Valid');
          cookieValue = value;
        }

        const verified = jwt.verify(cookieValue, secretOrPublicKey) as VerifiedUserJwt;

        const user = await Users.findById(verified._id).orFail();

        request.user = user;

        reply.signJwt(user);
      } catch {
        reply.clearJwt();
      }
    }
  });

  done();
};

export default fp(cookieJwtPlugin, {
  name: 'cookie-jwt',
  fastify: '3.x',
});
