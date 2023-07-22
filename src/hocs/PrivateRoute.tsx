import { Navigate } from 'react-router-dom';

import { setWebsiteTitle } from '../helpers/websiteTitle';

import { AppRoles, refreshTokenBeforeExpire } from '../utils/config/const';

import { paths } from '../routes/paths';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { logout, refreshToken } from '../redux/user/userActions';

interface PrivateRouteProps {
  children: JSX.Element;
  roles: AppRoles[];
}

export const PrivateRoute = ({ children, roles }: PrivateRouteProps) => {
  const dispatch = useAppDispatch();
  const { exp, logged } = useAppSelector().user;

  const onlyNotLogged = roles.includes(AppRoles.NOT_LOGGED);
  const requiredAdmin = roles.includes(AppRoles.ADMIN);

  const expiriedTime = exp * 1000;
  const timeToExpired = expiriedTime - Date.now();
  const isExpired = timeToExpired < 0;
  const canRefresh = timeToExpired < refreshTokenBeforeExpire;

  if (logged && onlyNotLogged) return <Navigate to={paths.profile} />;
  if (!logged && requiredAdmin) return <Navigate to={paths.login} />;

  if (logged && !isExpired && canRefresh) dispatch(refreshToken());
  if (logged && isExpired) {
    dispatch(logout());
    return <Navigate to={paths.login} />;
  }

  setWebsiteTitle(window.location.pathname);

  return children;
};
