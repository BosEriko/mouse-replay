import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import * as firebase from "firebase/app"

firebase.initializeApp({
  apiKey: "AIzaSyDEXdD9bnx-FA-aApEdv5Yx6Kz9n1gpE_k",
  authDomain: "bos-eriko-reyes.firebaseapp.com",
  databaseURL: "https://bos-eriko-reyes.firebaseio.com",
  projectId: "bos-eriko-reyes",
  storageBucket: "bos-eriko-reyes.appspot.com",
  messagingSenderId: "170211165412",
  appId: "1:170211165412:web:ff54a919a8d23622ab58f1"
})

const Layout = ({ children }) => {
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
    <div style={{ width: "100%", maxWidth: "980px", margin: "0 auto" }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        Mouse Replay &copy; {new Date().getFullYear()}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
