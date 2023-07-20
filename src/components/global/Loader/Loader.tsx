import { LoaderTag } from './Loader.styled';

interface LoaderProps {
  size?: number;
}

export const Loader = ({ size }: LoaderProps) => {
  return <LoaderTag loading={true} size={size || 10} />;
};
