import React from "react"
import "../styles/footer.css"
import { Row, Col, Grid } from "react-bootstrap"

import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa"

const Footer = () => (
  <footer className="footer">
    <Grid className="box-footer">
      <Row>
        <Col xs={12} md={4}>
          {/*<p className="footer-contact-header">CONTACT </p>*/}
          <div className="footer-contact">
            <FaMapMarkerAlt color="red" />{" "}
            <a
              href="https://www.google.com/maps/dir//Columbia+University,+New+York,+NY/@40.8075143,-74.0326131,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c2f63e96d30dc9:0x577933f947e52750!2m2!1d-73.9625727!2d40.8075355"
              target="_blank"
              rel="noopener noreferrer"
            >
              Columbia University, NY
            </a>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="footer-contact">
            <FaInstagram className="instagram-icon-footer" />{" "}
            <a
              href="https://www.instagram.com/salsaybachataspain"
              rel="noopener noreferrer"
              target="_blank"
            >
              salsaybachataspain
            </a>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div>© {new Date().getFullYear()}, Built by Taron Arshakian</div>
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer
