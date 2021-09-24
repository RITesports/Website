import { UserInputError } from 'apollo-server-fastify';
import { GraphQLScalarType, Kind } from 'graphql';
import { Types } from 'mongoose';

const ObjectIdScalar = new GraphQLScalarType({
  name: 'ObjectId',
  description: 'The `ObjectId` scalar type represents a MongoDB ObjectId.',

  serialize(value: Types.ObjectId) {
    return value.toHexString();
  },

  parseValue(value) {
    return new Types.ObjectId(value);
  },

  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Types.ObjectId(ast.value);
    }
    throw new UserInputError('ObjectId Scalar Can Only Parse String Values');
  },
});

export default ObjectIdScalar;
