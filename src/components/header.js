import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "../styles/header.module.css"

const Header = ({ siteTitle }) => (
  <header style={{ background: `DarkSalmon`, marginBottom: `1.45rem` }}>
    <div className={styles.container}>
      <h1 className={styles.title}>{siteTitle}</h1>
      <div className={styles.linkList}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/blog/" className={styles.link}>Blog</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
