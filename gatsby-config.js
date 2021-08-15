module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby-OfficialTutorial",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // how to add blog posts to the data layer
    // In other words, GraphQL search posts data at ${__dirname}/posts directory
    //* __dirname is a variable from Node.js that stores the absolute path for the directory that contains the file currently being run.
    {
      resolve: "gatsby-source-filesystem", 
      //todo Creates "File nodes"
      //* 파일들의 이름만 가져온다. 
      // gatsby-source-filesystem은 내용을 가져오지 못하는데, 
      // 내용을 가져오려면 transformer plugin을 써야 한다
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },
    "gatsby-plugin-mdx",
    // GraphQL data layer에 allMdx, mdx field 추가
    // MDXRenderer Component 사용가능
  ],
};
// transform plugin은 다른 타입의 nodes를 필요한 타입의 nodes로 변환한다
// gatsby-plugin-mdx는 .mdx 파일들로 MDX nodes를 새로 만든다. 기존 File nodes는 유지
// 여기서 MDX 파일의 내부 데이터를 꺼내올 수 있다
