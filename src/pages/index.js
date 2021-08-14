// Step 1: Import React
import React from 'react';
import { Layout } from '../components';
import { StaticImage } from 'gatsby-plugin-image';


// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage src='../images/featureImage.jpg' alt="Feature Image"></StaticImage>
      </Layout>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage