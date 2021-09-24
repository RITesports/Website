import { createContext } from 'react';

import { MeData } from './queries';

type Context = MeData['me'];
const UserContext = createContext<Context | false>(false);

export default UserContext;
