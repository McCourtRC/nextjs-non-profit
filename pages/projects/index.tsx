import PageTitle from 'lib/PageTitle';
import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useQuery, gql } from '@apollo/client';
import ProjectList from 'components/ProjectList';
import { Project } from 'types';
import ProjectListItem from 'components/ProjectListItem';

interface GetProjects {
  projects: Project[];
}

const GET_PROJECTS = gql`
  query AllProjects {
    projects {
      _id
      title
      description
    }
  }
`;

const Projects: NextPage = () => {
  const { data: session } = useSession();
  const { data, loading, error } = useQuery<GetProjects>(GET_PROJECTS);
  const { projects } = data ?? {};

  if (!session)
    return (
      <>
        <PageTitle>Must be logged in</PageTitle>
      </>
    );

  return (
    <>
      <PageTitle>Projects</PageTitle>
      <ProjectList>
        {projects?.map((project) => (
          <ProjectListItem key={`project-${project._id}`} project={project} />
        ))}
      </ProjectList>
    </>
  );
};

export default Projects;
