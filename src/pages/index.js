import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import "../styles/bootstrap.scss"
import "../styles/about.css"
import "bootstrap/dist/css/bootstrap.css"
import {
  FaGratipay,
  FaMusic,
  FaBrain,
  FaGrinStars,
  FaHotjar,
  FaReact,
} from "react-icons/fa"

import { Container, Row, Col } from "reactstrap"
// import sample from "../images/vid.mp4"
import lights from "../images/lights.mp4"
import Example from "./carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row id="first">
        <Col xs={12} md={6}>
          <div className="hello">
            <h1>Hi people </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum..
            </p>
          </div>
        </Col>
        <Col xs={12} md={6} id="pic-first"></Col>
      </Row>
      <Row className="second-section-title" id="second">
        <Col md={12}>WHY YOU NEED THIS CLASS</Col>
      </Row>
      <Row className="second-section">
        <Col xs={12} md={4}>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <FaGratipay style={{ marginTop: "20%", fontSize: "120px" }} />
              </div>
              <div class="flip-card-back">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <FaMusic style={{ marginTop: "20%", fontSize: "120px" }} />
              </div>
              <div class="flip-card-back">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <FaGrinStars style={{ marginTop: "20%", fontSize: "120px" }} />
              </div>
              <div class="flip-card-back">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="second-section">
        <Col xs={12} md={4}>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <FaHotjar style={{ marginTop: "20%", fontSize: "120px" }} />
              </div>
              <div class="flip-card-back">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <FaReact style={{ marginTop: "20%", fontSize: "120px" }} />
              </div>
              <div class="flip-card-back">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <FaBrain style={{ marginTop: "20%", fontSize: "120px" }} />
              </div>
              <div class="flip-card-back">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="second-section-title" id="third">
        <Col xs={12} md={12}>
          SOME TEXT HERE
        </Col>
      </Row>

      <Row className="center">
        <Col xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
      </Row>
      <Row className="center">
        <Col xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
      </Row>
      <Row className="center">
        <Col xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
      </Row>
      <Row className="second-section-title" id="fourth">
        <Col xs={12} md={12}>
          SOME TEXT HERE
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
        </Col>
      </Row>
      <Row id="fifth">
        <Col>
          <Example />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
