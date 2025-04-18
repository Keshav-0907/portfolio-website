import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        demoUrl: string;
        image: string;
        githubUrl?: string;
        date: string;
    };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="border border-[#363635] hover:bg-[#1b1b1b] rounded-lg p-4 flex flex-col gap-3">
            <Link href={project.demoUrl} target="_blank">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-lg"
                />
            </Link>
            <div className="flex flex-col justify-between h-full gap-2">
                <div className='flex flex-col gap-1'>
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-semibold w-fit">{project.title}</div>
                        <div className="text-sm text-gray-500">{project.date}</div>
                    </div>
                    <p className="text-sm text-gray-400">{project.description}</p>
                </div>
                <div className="flex gap-4 text-sm">
                    <Link
                        href={project.demoUrl}
                        target="_blank"
                        className="text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                    >
                        Live Demo
                    </Link>
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            className="text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                        >
                            GitHub
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
