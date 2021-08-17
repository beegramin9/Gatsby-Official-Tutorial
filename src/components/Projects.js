import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ProjectsWrapper, ProjectCard, ProjectLinks, TagCards } from "../styles";
import { arrayOfProject } from '../constants/constants';

export const Projects = () => {
    return (
        <ProjectsWrapper>
            {arrayOfProject.map(({ id, title, description, image, tags, link, github }) => (
            <ProjectCard key={id}>
                <div style={{overflow:'hidden'}}>
                    <StaticImage src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <hr/>
                <TagCards>
                    {tags.map((tag, index) => (
                    <StaticImage key={index} src={tag} alt={tag.split('/')[4]}></StaticImage>
                    ))}
                </TagCards>
                <p>{'\u00A0'}{description}</p>
                <ProjectLinks>
                    <a href={link}>Link</a>
                    <a href={github}>Github</a>
                </ProjectLinks>
            </ProjectCard>
        ))}
        </ProjectsWrapper>
    )
}

