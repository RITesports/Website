import UserRole from './role';

interface User {
  _id: string;
  email: string;
  roles: UserRole[];
}

export default User;
