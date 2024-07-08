import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Navbar from '../Dashboard/Navbar/Navbar';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
