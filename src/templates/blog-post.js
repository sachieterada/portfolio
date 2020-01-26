import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/blog-post.module.css"

export default ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <div style={{ margin: `3rem 0 5rem`}}>
        <h2>{post.frontmatter.title}</h2>
        <Img fluid={featuredImgFluid} style={{ margin: `2rem 0`}} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Link to="/blog/" className={styles.link}>Back to list →</Link>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`