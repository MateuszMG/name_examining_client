import { AppRoles } from '../utils/config/const';

import { Login } from '../pages/Auth/Login/Login';
import { Register } from '../pages/Auth/Register/Register';
import { Home } from '../pages/Home/Home';
import { Profile } from '../pages/Profile/Profile';

import { paths } from './paths';

export const routesConfig = [
  // EVERYBODY
  {
    component: Home,
    path: paths.home,
    roles: [AppRoles.EVERYBODY],
  },

  // NOT_LOGGED
  {
    component: Login,
    path: paths.login,
    roles: [AppRoles.NOT_LOGGED],
  },
  {
    component: Register,
    path: paths.register,
    roles: [AppRoles.NOT_LOGGED],
  },

  // ADMIN
  {
    component: Profile,
    path: paths.profile,
    roles: [AppRoles.ADMIN],
  },
];
