/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Script from 'react-load-script'

export default function Layout ({ children }) {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Script url="/js/jquery-3.6.0.min.js"/>
      <Script url="/js/bootstrap.min.js"/>
      <Script url="/js/wow.min.js"/>
      <Script url="/js/default.js"/>
      
      <Header/>
      {children}
      <Footer/>
      
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

