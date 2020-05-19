import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Image from "./Image"
import FooterStyles from "../styles/modules/footer.module.scss"

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <Container>
        <Row>
          <Col>
            <Image filename="logo.png" className={FooterStyles.footerLogo} />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
