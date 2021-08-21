import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";

export const Seo = ({title, description, image, article  }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(seoQuery);

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
    } = site.siteMetadata;

    console.log('defaultImage:',siteUrl, defaultImage)
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

Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}
Seo.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
}

//* building-block component에 graphQl로 끌어온 데이터를 추가하는 법
// useStaticQuery로 graphQl에서 데이터를 얻어온다.
// graphql은 pass되는 tamplete literal을 graphQL query라고 정의한다.
//todo building-block page Component 안에 새로운 query 변수를 추가한다
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