import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header style={{ background: `rebeccapurple`, marginBottom: `1.45rem` }}>
    <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, display: `flex`, justifyContent: `space-between` }}>
      <h1 style={{ margin: 0, color: ` white` }}>{siteTitle}</h1>
      <div style={{ display: `flex`, alignItems: `flex-end`}}>
        <Link to="/" style={{ color: `white`, textDecoration: `none` }}>Profile</Link>
        <Link to="/about/" style={{ color: `white`, textDecoration: `none`}}>About</Link>
        <Link to="/blog/" style={{ color: `white`, textDecoration: `none`}}>Blog</Link>
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
