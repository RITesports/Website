import { ApolloServerFastifyConfig, FastifyContext } from 'apollo-server-fastify';

import User from './users';

type Context = FastifyContext & {
  user: User | null;
};
export const context: ApolloServerFastifyConfig['context'] = ({ request, reply }): Context => ({ request, reply, user: request.user });

export default Context;
