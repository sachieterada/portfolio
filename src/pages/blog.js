import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const Blog = ({ data }) => (
  <Layout>
    <SEO title="blog" />
    <h1>blog</h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} style={{ marginBottom: `1rem`}}>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
            <Link to={node.fields.slug} style={{ textDecoration: `none`, color: `inherit` }}>
              <h3 style={{ marginTop: `0.5rem` }}>
                {node.frontmatter.title}{" "}
                <span style={{ color: `#bbb`}}>
                  — {node.frontmatter.date}
                </span>
              </h3>
            </Link>
            <p>{node.excerpt}</p>
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