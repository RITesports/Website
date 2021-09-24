import { Config } from 'apollo-server-fastify';
import { FastifyReply, FastifyRequest } from 'fastify';

import type User from './users';

// https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields
type FastifyContextFunctionParams = {
  request: FastifyRequest;
  reply: FastifyReply;
};

type Context = {
  request: FastifyRequest;
  reply: FastifyReply;
  user: User | null;
};
export const context: Config<FastifyContextFunctionParams>['context'] = ({ request, reply }): Context => ({ request, reply, user: request.user });

export default Context;
