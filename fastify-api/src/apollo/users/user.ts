import { getModelForClass, pre, prop } from '@typegoose/typegoose';
import bcrypt from 'bcrypt';
import { Types } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';

import UserRole from './role';

@pre<User>('save', async function preSaveHashPassword() {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
})

@ObjectType()
class User {
  @Field({ nullable: false })
  _id!: Types.ObjectId;

  @prop({ required: true, unique: true, lowercase: true })
  @Field({ nullable: false })
  email!: string;

  @prop({ required: true })
  password!: string;

  @prop({
    type: [String],
    required: true,
    enum: UserRole,
    default: [UserRole.READ, UserRole.WRITE],
  })
  @Field(() => [UserRole], { nullable: 'items' })
  roles!: UserRole[];
}

export const Users = getModelForClass(User);

export default User;
