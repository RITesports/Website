import { registerEnumType } from 'type-graphql';

enum UserRole {
  READ = 'READ',
  WRITE = 'WRITE',
}

registerEnumType(UserRole, { name: 'UserRole' });

export default UserRole;
