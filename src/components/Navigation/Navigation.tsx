import { useNavigate } from 'react-router-dom';

import { separateString } from '../../helpers/strings';

import { paths } from '../../routes/paths';

import { LogoutIcon, PersonIcon } from '../global/Icon/Icon.styled';
import { AuthLinksWrapper, Link, List } from './Navigation.styled';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { logout } from '../../redux/user/userActions';

interface NavigationLinkProps {
  path: string;
}

const NavigationLink = ({ path }: NavigationLinkProps) => (
  <Link to={path}>{path === '/' ? 'Home' : separateString(path.slice(1))}</Link>
);

export const Navigation = () => {
  const { user } = useAppSelector();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <nav>
      <List>
        <NavigationLink path={paths.home} />

        <AuthLinksWrapper>
          {user.logged ? (
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
