import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Non Profit</title>
        <meta name='description' content='Non Profit helps people' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main
        css={css`
          color: hotpink;
        `}
      >
        Home
      </main>
    </div>
  );
};

export default Home;
