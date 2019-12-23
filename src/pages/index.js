import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Search from "../components/SearchContainer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <div>
    <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
      Search data using JS Search
    </h1>
    <div>
      <Search />
    </div>
  </div>
  </Layout>
)

export default IndexPage
