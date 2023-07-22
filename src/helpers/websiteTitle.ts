import { separateString } from './strings';

export const setWebsiteTitle = (path: string) => {
  document.title =
    path === '/' ? 'Name examining' : separateString(path.slice(1));
};
