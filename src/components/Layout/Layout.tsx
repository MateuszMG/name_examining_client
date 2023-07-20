import { ReactNode } from 'react';

import { Container, Design, PageWrapper } from './Layout.styled';

import { Footer } from '../Footer/Footer';
import { Navigation } from '../Navigation/Navigation';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Design />
      <Navigation />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </Container>
  );
};
