import User from '../../src/apollo/users';

// cookie-jwt
declare module 'fastify' {
  interface FastifyRequest {
    user: User | null;
  }

  interface FastifyReply {
    signJwt(user: User): void;
    clearJwt(): void;
  }
}
