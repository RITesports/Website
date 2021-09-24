import 'reflect-metadata';

import { Types } from 'mongoose';
import { buildSchemaSync } from 'type-graphql';

import authChecker from './authChecker';
import ObjectIdScalar from './objectId';
import TypegooseMiddleware from './typegoose';
import { UserResolver } from './users';

const schema = buildSchemaSync({
  nullableByDefault: true,
  authChecker,
  globalMiddlewares: [TypegooseMiddleware],
  orphanedTypes: [],
  resolvers: [UserResolver],
  scalarsMap: [{ type: Types.ObjectId, scalar: ObjectIdScalar }],
});

export default schema;
