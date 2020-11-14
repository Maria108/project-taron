import React from "react"
import "../styles/footer.css"
import { Row, Col, Grid } from "react-bootstrap"

import { FaMapMarkerAlt, FaPhone, FaInstagram } from "react-icons/fa"

const Footer = () => (
  <footer className="footer">
    <Grid className="box-footer">
      <Row>
        <Col xs={12} md={6}>
          {/*<p className="footer-contact-header">CONTACT </p>*/}
          <div className="footer-contact">
            <FaMapMarkerAlt color="red" />{" "}
            <a
              href="https://www.google.com/maps/dir//Park+Slope+Colonics,+7th+Street,+Brooklyn,+NY/@40.7136227,-74.0399837,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25bfecdb8bcc7:0x40af216f52f8c20a!2m2!1d-73.9858381!2d40.6708317"
              target="_blank"
              rel="noopener noreferrer"
            >
              Columbia University, NY
            </a>
          </div>
          <div className="footer-contact">
            <FaPhone color="green" />{" "}
            <a href="tel:+16463859985">646-385-9985</a>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="footer-contact">
            <FaInstagram className="instagram-icon-footer" />{" "}
            <a
              href="https://www.instagram.com/parkslopecolonics/?hl=en"
              rel="noopener noreferrer"
              target="_blank"
            >
              salsaclass
            </a>
          </div>
          © {new Date().getFullYear()}, Built by Taron
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer
