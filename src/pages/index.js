import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {eq: "profile.png"}) {
        childImageSharp{
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{ textAlign: `center`}}>
        <Img fluid={data.file.childImageSharp.fluid} />
        <h2>Sachie Terada</h2>
      </div>
      <h4>Biography</h4>
      <p>
        Hi, thanks for visiting my site.
        I am a freelance front-end develper. I was born and raised in Fukuoka, Japan and lived in Australia for more than one year after graduating from uni.
        I worked for an internet sales company for two years after I got back to Japan. I helped them start a new rental bike business, also customise and translate their website.
        More than 3 years ago, I started learing web development by myself(sometimes with my friend).
        Now I am working mostly on buiding websites for companies or individuals. Feel free to contact me via SNS or Blog.
      </p>
      <h4>Skills</h4>
      <ul>
        <li>HTML5 / CSS3</li>
        <li>Responsive web design</li>
      </ul>
      <h4>Things I've been learning</h4>
      <ul>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>React.js</li>
        <li>Gatsby.js (*this website is made by Gatsby)</li>
      </ul>
    </Layout>
  )
}
