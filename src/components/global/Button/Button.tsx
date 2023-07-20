import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { ButtonTag } from './Button.styled';

import { Loader } from '../Loader/Loader';

interface GlobalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  isError?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, GlobalButtonProps>(
  (
    { children, disabled, isError, isLoading, ...rest }: GlobalButtonProps,
    ref,
  ) => {
    return (
      <ButtonTag
        {...rest}
        disabled={disabled || isLoading || isError}
        ref={ref}
      >
        {isLoading ? <Loader /> : children}
      </ButtonTag>
    );
  },
);
