import React, { useState } from 'react';
import { Button } from '../components';
import { ProjectSwitchButtonWrapper, ProjectsWrapper, ProjectCard, ProjectLinks, TagCards } from "../styles";
import { arrayOfStaticProject } from '../constants/staticProjects';
import { arrayOfServerProject } from '../constants/serverProjects';

export const Projects = () => {
    const [ displayingArrayOfProject, setDisplayingArrayOfProject ] = useState(arrayOfStaticProject);

    return (
        <>
            <ProjectSwitchButtonWrapper>
                <Button backgroundColor="rgb(252, 158, 148)" onClick={() => setDisplayingArrayOfProject(arrayOfStaticProject)}>
                    Static
                </Button>
                <Button backgroundColor="rgb(135, 209, 210)" onClick={() => setDisplayingArrayOfProject(arrayOfServerProject)}>
                    Server
                </Button>
            </ProjectSwitchButtonWrapper>

            <ProjectsWrapper
                >
                {displayingArrayOfProject.map(({ id, title, description, image, tags, link, github }) => (
                    <ProjectCard key={id}>
                    <img src={image} alt={title}/>
                    <h3>{title}</h3>
                    <hr/>
                    <TagCards>
                        {tags.map((tag, index) => (
                            <img key={index} src={tag} alt={tag.split('/')[4]}/>
                            //! 받아오는 이미지가 이미지 폴더에 내가 저장한 static image도 아니고,
                            //! GraphQL로 받아오는 dynamic image도 아니기 때문에
                            //! 그냥 img태그를 사용한다
                        ))}
                    </TagCards>
                    <p>{'\u00A0'}{description.split('\n').map( (line, index) => {
                        return (<span key={index}>{line}<br/>&nbsp;</span>)
                    })}</p>
                    <ProjectLinks>
                        { link ? <a href={link}>Try</a> : ""}
                        <a href={github}>Github</a>
                    </ProjectLinks>
                </ProjectCard>
            ))}
            </ProjectsWrapper>
        </>
    )
}