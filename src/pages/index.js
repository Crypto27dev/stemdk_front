import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query EnglishStatements {
      allDataJson(filter: { lang: { eq: "en" } }) {
        edges {
          node {
            welcomingMessage
          }
        }
      }
    }
  `).allDataJson.edges[0].node

  console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <div>{data.welcomingMessage}</div>
    </Layout>
  )
}

export default IndexPage
