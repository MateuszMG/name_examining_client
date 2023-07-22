import { separateStringOnSlashes } from './strings';

export const setWebsiteTitle = (path: string) => {
  document.title =
    path === '/' ? 'Name examining' : separateStringOnSlashes(path.slice(1));
};
