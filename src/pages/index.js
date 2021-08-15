// Step 1: Import React
import React from 'react';
import { Layout } from '../components';
import { StaticImage } from 'gatsby-plugin-image';


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src='../images/heroImage.jpg' alt="Hero Image"></StaticImage>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage