import { allPropjects } from 'contentlayer/generated';
import ProjectContent from './ProjectContent';

export async function generateStaticParams() {
    const projects = await allProjects;

    return projects.map((project) => ({ slug: project.slug }));
}

export const generateMetadata = async ({ params }) => {
    const project = allProject.find((project) => project._raw.flattenedPath === 'project/' + params.slug);

    return { title: project?.title, except: project?.except };
};

const ProjectLayout = ({ params }) => {
    const project = allProjects.find((project) => project._raw.flattenedPath === 'projects/' + params.slug);

    return (
        <>
            <ProjectContent project={project} />
        </>
    );
};

export default ProjectLayout;