import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'; 
//* useStaticQuery로 graphQl에서 데이터를 얻어온다.
//* graphql은 pass되는 tamplete literal을 graphQL query라고 정의한다.
export const Layout = ({pageTitle, children}) => {
    //* building-block component에 graphQl로 끌어온 데이터를 추가하는 법
    //todo building-block page Component 안에 새로운 query 변수를 추가한다
    // page component 방식과 다르다
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)


    return (
        <div>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header>{data.site.siteMetadata.title}</header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}
