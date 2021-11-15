import Link from 'next/link';
import { css } from '@emotion/react';

const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 2rem;
      `}
    >
      <nav>
        <ul
          css={css`
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            list-style: none;
            > * {
              margin-right: 2rem;
            }
          `}
        >
          <li>
            <Link href='/'>
              <a>
                <h1>Non Profit</h1>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
