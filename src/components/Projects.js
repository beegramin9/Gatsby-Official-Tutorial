import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { ProjectsWrapper, ProjectCard, ProjectLinks, TagCards } from "../styles";
import { arrayOfProject } from '../constants/constants';


export const Projects = () => {
    console.log(arrayOfProject.map( ({image} ) => console.log(image) ));
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
                        <img key={index} src={tag} alt={tag.split('/')[4]}/>
                        //! 받아오는 이미지가 이미지 폴더에 내가 저장한 static image도 아니고,
                        //! GraphQL로 받아오는 dynamic image도 아니기 때문에
                        //! 그냥 img태그를 사용한다
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

// 여기서도 GraphQL로 이미지 데이터를 받아와야하는거야?
