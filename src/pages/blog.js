import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/blog.module.css"

const Blog = ({ data }) => (
  <Layout>
    <SEO title="blog" />
    <h1>Blog</h1>
    <h4 className={styles.count}>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id} className={styles.container}>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
        <div className={styles.blogLink}>
          <Link to={node.fields.slug} className={styles.title}>{node.frontmatter.title}</Link>
          <span className={styles.postDate}>{node.frontmatter.date}</span>
        </div>
        <p className={styles.content}>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`