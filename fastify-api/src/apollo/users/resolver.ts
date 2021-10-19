import { /* ApolloError, */ UserInputError } from 'apollo-server-fastify';
import bcrypt from 'bcryptjs';
// import { IsEmail, Matches, MinLength } from 'class-validator';
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';

import type Context from '../context';
import User, { Users } from './user';

@InputType()
class LoginInput implements Partial<User> {
  @Field({ nullable: false })
  email!: string;

  @Field({ nullable: false })
  password!: string;
}

// @InputType()
// class SignupInput implements Partial<User> {
//   @Field({ nullable: false })
//   @IsEmail()
//   email!: string;

//   @Field({ nullable: false })
//   @MinLength(8)
//   @Matches(/[A-Z]/, { message: 'password must contain an uppercase letter' })
//   @Matches(/[a-z]/, { message: 'password must contain a lowercase letter' })
//   @Matches(/[0-9]/, { message: 'password must contain a number' })
//   @Matches(/[^A-Za-z0-9]/, { message: 'password must contain a special character' })
//   password!: string;
// }

@Resolver(User)
class UserResolver {
  @Query(() => User)
  me(@Ctx() { user }: Context) {
    return user;
  }

  @Mutation(() => User)
  async logIn(@Arg('input', { nullable: false }) { email, password }: LoginInput, @Ctx() { reply }: Context) {
    const user = await Users.findOne({ email: email.toLowerCase() });
    if (!user) throw new UserInputError('Invalid Email or Password');

    const validated = await bcrypt.compare(password, user.password);
    if (!validated) throw new UserInputError('Invalid Email or Password');

    reply.signJwt(user);

    return user;
  }

  @Mutation(() => Boolean, { nullable: false })
  logOut(@Ctx() { reply }: Context) {
    reply.clearJwt();
    return true;
  }

  // @Mutation(() => User)
  // async signUp(@Arg('input', { nullable: false }) { email, password }: SignupInput, @Ctx() { reply }: Context) {
  //   const user = await Users.findOne({ email: email.toLowerCase() });
  //   if (user) throw new ApolloError('A User With This Email Already Exists');

  //   const newUser = await Users.create({ email, password });

  //   reply.signJwt(newUser);

  //   return newUser;
  // }
}

export default UserResolver;
