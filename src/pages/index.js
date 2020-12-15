import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
import Example from "./carousel"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `salsa`,
        `soca`,
        `reggae`,
        `class`,
        `columbia university`,
        `salsa soca reggae`,
      ]}
    />
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <h2 className="first-section-header">SALSA SOCA AND REGGAE</h2>
        </Col>
      </Row>
      <Row id="first">
        <Row>
          <Col xs={12} md={12}>
            <p className="first-p">
              I decided to take Salsa, Soca, and Reggae class in Fall 2020. I
              didn’t have much experience in music and took this class to
              fulfill my global core requirement. Since my major is Financial
              economics, I didn’t have a lot of interest in music. I remember
              our first class when professor told us that this is going to be
              the most important class in our life. Honestly, I laughed. I
              though professor was just trying to make us believe that this
              class is important when many of us just taking it because of core
              requirement. However, how surprised I was when after a couple of
              classes I changed my mind. I realized what professor meant by
              saying “this is the most important class you are going to take in
              your life.” It might not teach you how to become and investment
              banker, good coder in IT, or successful entrepreneur, but it’ll
              teach you how to become a human, to have patient, sympathy, and
              maybe understand others a little better. Now, if someone asks me
              what this class is about, it would not be easy for me to explain
              it in a short way. This class is about the history, about people
              fighting for their rights and independence, about music, about
              life and death, good and bad. This class gave me a sense that
              music is an art form in which musical sounds are organized in a
              certain way as a means of embodying artistic images. The main
              elements and expressive means of music are rhythm, meter, tempo,
              timbre, melody, harmony, polyphony, and instrumentation. Salsa,
              Soca and Reggae will take you from New York city to Caribbean and
              Jamaica. You’ll experience music, history, food, dance and many
              other things.
            </p>
          </Col>
        </Row>
      </Row>
      <Row className="second-section-title" id="second">
        <Col md={12}>HOW IT CAN AFFECT A STUDENT'S LIFE</Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <FaGratipay style={{ marginTop: "20%", fontSize: "120px" }} />
              </div>
              <div class="flip-card-back">
                <p>
                  Music has an important place in our hearts, and many people
                  can't even imagine life without it. It is able to cheer us up
                  in difficult times and remind us of happy moments. Some people
                  see their personal story in the lyrics, which immediately
                  resonates in their soul.
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
                  Music affects our brain in a certain way and can affect our
                  mood and well-being. It is a certain way ordered vibration and
                  when listening to certain melodies, music interacts with the
                  vibration of our body.
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
                  The way music helps a person cope with difficult life
                  situations is hardly comparable to any other influence of
                  external factors. Music can create and maintain the right
                  mood. It helps to relax and maybe vice versa-to recharge their
                  energy.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4}>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <FaHotjar style={{ marginTop: "20%", fontSize: "120px" }} />
              </div>
              <div class="flip-card-back">
                <p>
                  The loud and energetic music, with a clear rhythm, such as
                  Salsa, increases the pulse, blood pressure and body
                  temperature; soft, pleasant and melodic, on the contrary, has
                  a calming effect, relaxes, reduces pressure and temperature.
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
                  Calm and smooth music will help you relax and calm down,
                  distract from everyday worries, reduce the number of thoughts
                  in your head and focus on self-regulation. Slow and relaxing
                  music affects a person like a sleeping pill, so if you suffer
                  from insomnia and you do not know how to fall asleep quickly,
                  use this fact.
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
                  Physicists have proven the influence of music on the human
                  brain. It has a direct effect on the brain and can calm,
                  treat, and provoke aggression. The reports also state that if
                  a person works with music it creates a better workflow.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="second-section-title" id="third">
        <Col xs={12} md={12}>
          ENERGY
        </Col>
      </Row>

      <Row className="center">
        <Col xs={12} md={4}>
          <iframe
            src="https://youtube.com/embed/gRsOW88x3dw"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://youtube.com/embed/u_m25oVeKis"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://youtube.com/embed/mSwYBOMyO5k"
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
            src="https://youtube.com/embed/ItUiAWmnDbg"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://youtube.com/embed/I-yQ38s7iiU"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://youtube.com/embed/RuZtCiQHHq4"
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
            src="https://youtube.com/embed/3JD9RcoI4Ig"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://youtube.com/embed/bA_ejyudVHM"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs={12} md={4}>
          <iframe
            src="https://youtube.com/embed/y-2Si8flvvE"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
      </Row>
      <Row className="second-section-title" id="fourth">
        <Col xs={12} md={12}>
          HISTORY
        </Col>
      </Row>
      <Row className="reg-section">
        <Col xs={12} md={6} className="reg-salsa-sec">
          <h5>SALSA</h5>
          <p>
            Salsa is a musical genre popular mainly in Latin America and among
            people from it. Salsa includes many styles and variations; in a
            broad sense, the term can be used for almost any music of Cuban
            origin (for example, cha-cha-cha, Bolero, Mambo). In a narrower
            sense, the term refers to a style developed in the 1960s and 70s by
            Cuban and Puerto Rican immigrants in and around New York city, as
            well as its offshoots, such as salsa romance of the 1980s. This
            musical style is now widespread not only in Latin America, but all
            over the world. The closest styles to salsa are Cuban Mambo and
            Sonata of the early XX century, and Latin American jazz. In General,
            the terms Latin American jazz and salsa are often used as synonyms;
            many musicians belong to both fields, especially musicians from
            before the 1970s. Stylistically, salsa is mostly associated with the
            Afro-Cuban tradition, although it contains Puerto Rican, Colombian,
            and other Latin American influences, including pop, jazz, rock, and
            RnB. Modern salsa is mainly focused on dance. Salsa combines many
            styles and their variations, the term can be used to describe most
            of the genres that came out of Cuba, such as Cha-cha-cha and mambo.
            Salsa is the most popular music in Latin American dance clubs and,
            as Ed Morales put it, “it is setting the rhythm for all Latin
            American music.” Composer Peter Manuel called the style “the most
            popular dance music in the Puerto Rican and Cuban communities and in
            Central and South America”, as well as this composer called the
            genre one of the most dynamic and significant Pan-American musical
            phenomena of the 70s and 80s. Modern salsa remains a dance-oriented
            genre and is closely associated with the style of dancing salsa.
            Famous musicians: Ra Barretto, Ruben Blades, Juan Luis Guerra, Wayne
            Gorbea, Hector Laveau, Charlie Palmieri, Eddie Palmieri.
          </p>
        </Col>
        <Col xs={12} md={6} className="reg-salsa-sec">
          <h5>REGGAE</h5>
          <p>
            Reggae music originated in the West Indies, on the island of Jamaica
            and was part of the national liberation anti-colonial movement. One
            of its forms was Rastafarianism, which emerged in the 30s of 20th
            century. A decade earlier, one of the leaders of the struggle for
            the rights of blacks in Jamaica, Marcus Garvey, created the idea of
            the “Back to Africa” movement, which received a lot of followers
            among black population in the United States. Based on the Bible,
            Garvey prophesied that the Negroes of Jamaica would be saved from
            white supremacy by a great black leader from Africa. And when in
            1930 Ethiopian tycoon Ras Tafari (Makonnen) was crowned as Emperor
            by Haile Selassie, the Negroes who believed Garvey's prophecy
            decided that it had come true. Ras Tafari was recognized as the
            living God and Deliverer, and his followers became known as
            Rastafarians. They don’t eat meat, smoke tobacco, drink wine and use
            salt. The origin of the term reggae is explained in different ways.
            Some, for example, associate it with the English word rhythm. In
            musical parlance, the word reggae first appeared in connection with
            a band Maytals, the album which was called: “Do the Reggae”. But a
            key figure in the history of reggae music is Robert Nesta Marley,
            known as Bob Marley. The son of an ordinary Jamaican woman and an
            English officer, he dreamed of becoming a singer from childhood and
            began composing songs quite early. In 1963, Marley formed his first
            band, the Wailers. It included two of his friends – Neville O’riley
            Livingston, who took the pseudonym Bunny Wailer, and Hubert
            Mcintosh, later known as Peter Tosh. Since the second half of the
            70s, both of these musicians, separated from Bob Marley, began to
            develop reggae independently. From its beginning until the early
            70s, the Wailers consistently changed their style from ska and
            rocksteady to reggae. Bob Marley joined the Rastafarian movement,
            while at the same time he associated his activity with the record
            company “island”, organized by a white native of Jamaica, Chris
            Blackwell, who contributed to the widespread distribution of reggae
            music. After performing in the United States, in Los Angeles, Bob
            Marley was finally recognized by critics as the “king of reggae”.
          </p>
        </Col>
      </Row>
      <Row className="second-section-title">
        <Col xs={12} md={12}>
          INSPIRATION
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
