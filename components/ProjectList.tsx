import { FC } from 'react';
import { css } from '@emotion/react';

const ProjectList: FC = ({ children }) => {
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
      `}
    >
      {children}
    </ul>
  );
};

export default ProjectList;
