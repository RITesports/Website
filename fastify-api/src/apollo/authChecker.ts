import { AuthChecker } from 'type-graphql';

import Context from './context';
import { UserRole } from './users';

const authChecker: AuthChecker<Context, UserRole> = ({ context: { user } }, roles) => !!user && roles.every((role) => user.roles.includes(role));

export default authChecker;
