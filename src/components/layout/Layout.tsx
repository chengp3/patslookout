import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col items-center w-full h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
