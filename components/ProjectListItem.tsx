import { css } from '@emotion/react';
import { Project } from 'types';

interface Props {
  project: Project;
}

const ProjectListItem = ({ project }: Props) => {
  return (
    <li
      css={css`
        margin: 4rem;
      `}
    >
      <h3
        css={css`
          margin: 0;
          font-size: 2.5rem;
        `}
      >
        {project.title}
      </h3>
      <p
        css={css`
          font-size: 1.5rem;
        `}
      >
        {project.description}
      </p>
    </li>
  );
};

export default ProjectListItem;
