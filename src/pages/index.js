import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/index.module.css"
import { Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {eq: "images/profile.png"}) {
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
        <Img fluid={data.file.childImageSharp.fluid} className={styles.imgProfile} />
        <h1>Sachie Terada</h1>
        <h4 style={{ marginTop: `.8rem`}}>Front-end Engineer</h4>
      </div>
      <section className={styles.contents}>
        <div className={styles.contents_inner}>
          <h3 style={{ marginBottom: `1rem` }}>Biography</h3>
          <p>
            Hi, thanks for visiting my portfolio site.<br />
            I am Front-end Engineer from Tokyo. I was born and raised in Shizuoka, Japan and moved to Tokyo after graduating from uni.<br /><br />
            From 2019, I started learing front-end development by myself.<br /><br />
          </p>
        </div>
      </section>
      <section className={styles.contents2}>
        <div className={styles.contents_inner}>
          <h3 style={{ marginBottom: `1rem` }}>Skills</h3>
          <ul>
            <li><p>HTML5 / CSS3</p></li>
            <li><p>JavaScript</p></li>
            <li><p>Responsive web design</p></li>
          </ul>
          <h3 style={{ marginBottom: `1rem` }}>Things I've been learning</h3>
          <ul>
            <li><p>Vue.js</p></li>
            <li><p>React.js</p></li>
            <li><p>Gatsby.js (*this website is made by Gatsby)</p></li>
          </ul>
        </div>
      </section>
      <section className={styles.contents}>
        <div className={styles.contents_inner}>
          <h3 style={{ marginBottom: `1rem` }}>Blog</h3>
          <p style={{ marginBottom: `3rem`}}>
            I write about life in Tokyo/Japan / travel / WebDevelopment / Design etc.<br /><br />
            If you are interested, please check it out ;)<br />
            Hope you enjoy it!
          </p>
          <Link to="/blog/" className={styles.link} activeClassName={styles.activeLink}>Go to blog</Link>
        </div>
      </section>
      <div style={{ textAlign: `center`, marginTop: `2rem`}}>
        <h2>Contact</h2>
      </div>
    </Layout>
  )
}
