import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/Image"
import HeroStyles from "../styles/modules/hero.module.scss"
import { Row, Container, Col } from "react-bootstrap"
import ContentStyles from "../styles/modules/content.module.scss"
import Card from "../components/Card"

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

  return (
    <Layout>
      <SEO title="Home" />

      {/* SECTION: Hero */}
      <div className={HeroStyles.heroImageContainer}>
        <Image
          className={`${HeroStyles.heroImage} shadow`}
          filename="hero.jpeg"
          alt="Dakahlia STEM School"
        />
      </div>

      {/* SECTION: Content */}
      <div className="mt-5">
        <Container>
          <Row>
            <Col md={12} lg={4} className="mb-5">
              <Row>
                <Col sm={6} lg={12}>
                  <div className="mb-4">
                    <Image
                      filename="b1.png"
                      alt="banner image"
                      className={`${ContentStyles.bannerImage} shadow-sm rounded`}
                    />
                  </div>
                </Col>

                <Col sm={6} lg={12}>
                  <div className="mb-4">
                    <Image
                      filename="b2.jpg"
                      alt="banner image"
                      className={`${ContentStyles.bannerImage} shadow-sm rounded`}
                    />
                  </div>
                </Col>
                <Col sm={6} lg={12}>
                  <div>
                    <Image
                      filename="b3.jpg"
                      alt="banner image"
                      className={`${ContentStyles.bannerImage} shadow-sm rounded`}
                    />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col md={12} lg={8}>
              <Row>
                <Col md={7}>
                  <div>
                    <Card title="News">
                      <Image
                        filename="card1.jpg"
                        className="mt-3 shadow-sm rounded"
                      />
                      <p className="text-sm mt-3 bg-secondary px-2 rounded shadow-sm text-white inline-block">
                        Our School Restaurant
                      </p>
                    </Card>
                  </div>
                </Col>
                <Col md={5}>
                  <div>
                    <Card title="Athletics">
                      <Image
                        filename="card2.jpg"
                        className="mt-3 shadow-sm rounded"
                      />
                      <p className="text-sm mt-3 bg-secondary px-2 rounded shadow-sm text-white inline-block">
                        School Stadium
                      </p>
                    </Card>
                  </div>
                </Col>
              </Row>
              <div className="mt-4">
                <Card title="Sights & Sounds">
                  <Row>
                    <Col lg={3} md={6}>
                      <Image
                        filename="lab1.jpg"
                        className="mt-3 shadow-sm rounded"
                      />
                      <p className="text-sm mt-2">Chemistry Laboratory</p>
                    </Col>
                    <Col lg={3} md={6}>
                      <Image
                        filename="lab2.jpg"
                        className="mt-3 shadow-sm rounded"
                      />
                      <p className="text-sm mt-2">Physics Laboratory</p>
                    </Col>
                    <Col lg={3} md={6}>
                      <Image
                        filename="lab3.jpg"
                        className="mt-3 shadow-sm rounded"
                      />
                      <p className="text-sm mt-2">Biology Laboratory</p>
                    </Col>
                    <Col lg={3} md={6}>
                      <Image
                        filename="lab4.jpg"
                        className="mt-3 shadow-sm rounded"
                      />
                      <p className="text-sm mt-2">Computer Laboratory</p>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
