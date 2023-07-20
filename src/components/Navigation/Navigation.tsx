import { separateString } from '../../helpers/strings';

import { paths } from '../../routes/paths';

import { Link, List } from './Navigation.styled';

interface NavigationLinkProps {
  path: string;
}

const NavigationLink = ({ path }: NavigationLinkProps) => (
  <Link to={path}>{path === '/' ? 'Home' : separateString(path.slice(1))}</Link>
);

export const Navigation = () => {
  return (
    <nav>
      <List>
        <NavigationLink path={paths.home} />
      </List>
    </nav>
  );
};
