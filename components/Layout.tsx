import { FC } from 'react';
import Head from 'next/head';
import Header from 'components/Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Non Profit</title>
        <meta name='description' content='Non Profit website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
