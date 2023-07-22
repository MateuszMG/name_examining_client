import { ReactNode } from 'react';

import { Design, LayoutWrapper, PageWrapper } from './Layout.styled';

import { Footer } from '../Footer/Footer';
import { Navigation } from '../Navigation/Navigation';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Design />
      <Navigation />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </LayoutWrapper>
  );
};
