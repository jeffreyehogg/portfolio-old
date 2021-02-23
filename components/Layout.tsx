import React, { ReactNode } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import Landing from '../components/Background';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    <Landing />
    {children}
  </div>
);

export default Layout;
