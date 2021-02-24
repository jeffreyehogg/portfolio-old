import React, { ReactNode } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import styles from '../styles/Layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Jeff Hogg' }: Props) => (
  <div className={styles.bgContainer}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    {children}
  </div>
);

export default Layout;
