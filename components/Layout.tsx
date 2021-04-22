import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Jeff Hogg' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="A personal portfolio Website. Built with Next.js and Tailwind"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jeffehogg.com/" />
      <meta
        property="og:image"
        content="https://jeffehogg.com/images/homepage.png"
      />
    </Head>
    <Navbar />
    {children}
  </div>
);

export default Layout;
