## Project Status
![Generic badge](https://img.shields.io/badge/build-passing-green.svg)
<br/> [Link](https://www.wontaeblog.space). try!

## Overview
![Blog](https://user-images.githubusercontent.com/58083434/130402483-77c32103-ace9-4db4-bd9a-fa6680eecdc1.gif)

## Technology Stack
<img src='https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=Gatsby&logoColor=white'/></a>&nbsp;
<img src="https://img.shields.io/badge/GraphQL-E434AA?style=flat-square&logo=GraphQL&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>&nbsp;
<img src="https://img.shields.io/badge/Framer-df0eb1?style=flat-square&logo=Framer&logoColor=white"/>&nbsp;
<img src='https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=Styled-Components&logoColor=white'/></a>&nbsp;

## Outline
&nbsp; This blog is built along with the [Gatsby official documentation tutorial](https://www.gatsbyjs.com/docs/tutorial/) that provides Search Engine Optimization. You can check out my brief introduction and projects that I have made. Gatsby is a open-source static website generator that follows the latest web standards and provides optimized for speed and security. <br/>
&nbsp; I was able to grow strenght forreading documentations that gave me a better understanding about the overall concept, and get used to reading and acquiring valuable solutions.
<br/><br/>
&nbsp; 개발하면서 배운 것들을 정리하는 개발 블로그입니다. SEO(검색 엔진 최적화)를 제공합니다. 저에 대한 간단한 소개와 프로젝트도 확인할 수 있습니다. Gatsby official documentation을 보며 개발하면서 제 아이디어와 프로젝트를 추가했습니다. Gatsby는 React 기반 Static Generator로, static website를 빠르게 띄워 더 나은 사용자 경험을 제공합니다. 프로젝트를 하면서 React와 개발 문서를 읽는 힘을 매우 기를 수 있었습니다.

## Main Feature Code
- Seo with react-helmet <br/>
> (/pages/index.js 등 모든 페이지 파일, templates/ 포함 ) <br/>
> Seo(검색 엔진 최적화)는 html <head>태그 내부에 <meta>태그들을 추가하여 현재 웹사이트 검색엔진에서 검색이 쉽도록 돕습니다. <br/>
> 이와 같은 기능은 블로그와 같은 웹사이트에 필수적입니다. <br/>
> 완성된 Seo Component는 모든 페이지.js 파일에 import 됩니다. <br/>
```js
import { Helmet } from "react-helmet";

 export const Seo = ({title, description, image, article  }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(seoQuery);

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    }

    return  (
        <Helmet title={seo.title} /* titleTemplate={titleTemplate} */>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
        </Helmet>
    )
} 

//* building-block component에 graphQl로 끌어온 데이터를 추가하는 법
// useStaticQuery로 graphQl에서 데이터를 얻어온다.
// graphql은 pass되는 tamplete literal을 graphQL query라고 정의한다.
// useStaticQuery hoook으로 쿼리 데이터를 가져와 변수에 저장할 수 있다.
const seoQuery = graphql`
    query SEOQuery {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteUrl: url
                defaultImage: image
            }      
        }
    }
`
```

- Gatsby-node <br/>
> (/gatsby-node.js) <br/>
> gatsby-node.js 파일은 데이터를 fetch해서 페이지를 만듭니다. article list와 single article 페이지를 만들 수 있습니다.
```js
// createPages: fetches data, asynchronous
// graphql: Graphql query funciton
// actions: set of methods, one of which is to generate pages
exports.createPages = async ({ actions, graphql }) => {
    // slug를 찾는 이유는, 해당 page의 route로 사용할 것이기 때문
    const { data } = await graphql(`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                        id
                    }
                }
            }
        }
    `)
    // Create paginated pages for posts
    const postPerPage = 5;
    const totalNumOfPages = Math.ceil(data.allMdx.edges.length / postPerPage)
    Array.from({ length: totalNumOfPages }).forEach((_, pageIndex) => {
        actions.createPage({
            path: pageIndex === 0 ? '/posts/' : `/posts/${pageIndex + 1}`,
            component: require.resolve("./src/templates/allPosts.js"), 
            // 페이지네이션을 고려해 데이터를 fetch해 allPosts.js(component)로 보내면,
            // allPosts.js에서 query의 skip, limit parameter를 통해 한 페이지에 postPerPage만큼의 articles를 보여줍니다.
            context: {
                limit: postPerPage,
                skip: pageIndex * postPerPage,
                totalNumOfPages,
                currentPage: pageIndex + 1
            }
        })
    });

    // Create single blog post
    data.allMdx.edges.forEach(edge => {
        const slug = edge.node.frontmatter.slug;
        const id = edge.node.id;
        actions.createPage({
            path: `/posts/${slug}`,
            component: require.resolve('./src/templates/singlePost.js'),
            context: { id }
        })
    });
}
```
