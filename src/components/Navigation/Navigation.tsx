import { useNavigate } from 'react-router-dom';

import { separateStringOnSlashes } from '../../helpers/strings';

import { paths } from '../../routes/paths';

import { LogoutIcon, PersonIcon } from '../global/Icon/Icon.styled';
import { AuthLinksWrapper, Link, List } from './Navigation.styled';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { logout } from '../../redux/user/userActions';

interface NavigationLinkProps {
  path: string;
}

const NavigationLink = ({ path }: NavigationLinkProps) => (
  <Link to={path}>
    {path === '/' ? 'Home' : separateStringOnSlashes(path.slice(1))}
  </Link>
);

export const Navigation = () => {
  const { logged } = useAppSelector().user;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <nav>
      <List>
        <NavigationLink path={paths.home} />

        <AuthLinksWrapper>
          {logged ? (
            <>
              <PersonIcon
                fontSize='20px'
                onClick={() => navigate(paths.profile)}
              />
              <LogoutIcon fontSize='20px' onClick={() => dispatch(logout())} />
            </>
          ) : (
            <>
              <NavigationLink path={paths.login} />
              <NavigationLink path={paths.register} />
            </>
          )}
        </AuthLinksWrapper>
      </List>
    </nav>
  );
};
