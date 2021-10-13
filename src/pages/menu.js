import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import VizSensor from 'react-visibility-sensor'
import { Fade } from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import { SEO } from '../components'

import { Layout } from '../layouts'

import './menu.sass'

const getMenu = graphql`
  {
    notes: file(name: { eq: "rest" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pc: file(name: { eq: "trip" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    phone: file(name: { eq: "seabass" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Menu = () => {
  const data = useStaticQuery(getMenu)
  let [active, setActive] = useState(false)
  return (
    <Layout>
      <SEO title="Menu" />
      <main className="aboutContainer">
        <section className="aboutSectionContainer greyBG">
          <div className="aboutSection">
            <div className="aboutText">
              <h2>Menu.</h2>
              <p className="lead">
                Homemade, <span className="italic">locally-sourced</span> produce for everyone to enjoy.
              </p>
              <p>
                We Pride ourselves on using fresh, locally sourced produce throughout our seasonal menus.
                All of our dishes are made on site so we can cater to any dietary requirements you may have.
              </p>
              <p>
                Due to current events, we understand if you would rather takeaway our food, so collection is also available.
              </p>
            </div>
            <VizSensor
              onChange={isVisible => {
                setActive(isVisible)
              }}
              partialVisibility
            >
              <Fade in={active} timeout={3000}>
                <div className="aboutImage dropped">
                  <Img
                    alt={data.notes.name}
                    fluid={data.notes.childImageSharp.fluid}
                    objectFit="cover"
                  />
                </div>
              </Fade>
            </VizSensor>
          </div>
        </section>

        <section className="aboutSectionContainer">
          <div className="aboutSection column">
            <div className="aboutText alignStart">
              <p className="lead">
                Sunday <span className="italic">Lunches</span> served 1200 to 1500
              </p>
              <p>
                Gluten-free, Dairy-free and Vegan also available.
              </p>
            </div>

            <div className="aboutListing">
              <div>
                <p>Starters</p>
                <p>Toasted handmade seasalt and rosemary focaccia, herb pitted olives, dipping oil | GF V | £6</p>
                <p>Cromer crab and lemongrass ravioli, tromboncino noodles, tomato consomme | £9</p>
                <p>Allotment apple and celeriac soup, smoked bacon crumb | GF V | £6.50</p>
                <p>Smoked chicken, thyme liver parfait, toasted brioche, pear and port chutney | GF | £8.50</p>
              </div>
              <div>
                <p>Mains</p>
                <p>Dover sole fillet, smoked crevettes, celeriac dauphinoise, roast cauliflower, cavolo nero, lemon béarnaise | GF | £28</p>
                <p>Pork fillet, maris peers, roast nips, haggis bonbons, parma ham crisp, roast onion broth | GF | £20</p>
                <p>Sous vide spiced duck, sweet potato fondant, red chicory, pickled brambles, madeira jus | GF | £22</p>
                <p>Pot roast stout and ox cheek, smoked parsnip mash, cavolo nero, roast shallots, Norfolk swimmer | £24</p>
                <p>Roast sweet potato gnocchi, baked allotment root vegetables, tomato harissa sauce | V | £18</p>
              </div>
              <div>
                <p>Desserts</p>
                <p>Smoked Norfolk dapple, sea salt and thyme crackers, pear and port chutney | GF V | £9.50</p>
                <p>Allotment blueberry and frangipane tart, blueberry ice cream | V | £7.50</p>
                <p>Chocolate and smoked salt fondant, beetroot ice cream, chocolate soil | V | £7.50</p>
                <p>Homemade ice cream selection | V GF | £3.50</p>
              </div>
            </div>
          </div>
        </section>

        <section className="aboutSectionContainer menuReview">
          <div className="aboutSection column">

            <div className="aboutLargeImage">
              <Img
                alt={data.pc.name}
                fluid={data.pc.childImageSharp.fluid}
                objectFit="cover"
              />
            </div>

          </div>
        </section>

        <section className="aboutSectionContainer greyBG">
          <div className="aboutSection column">
            <p className="lead">
              Our Traditional Sunday Lunches
            </p>
            <p>
              Norfolk Beef Sirloin / Norfolk Leg of Lamb / Fruit and Nut Roast V
            </p>
            <p className="roastText">
              All served with seasonal vegetables, fried hispi cabbage, roast garlic and rosemary potatoes, sage Yorkshire pudding, sausage and apricot stuffing, homemade jus. GF
            </p>
          </div>
        </section>

        <section className="aboutSectionContainer">
          <div className="aboutSection">
            <div className="aboutText">
              <h2>About.</h2>
              <p className="lead">
                Why choose to <span className="italic">dine</span> with us?
              </p>
              <p>
                We are a welcoming and relaxed, family run traditional village pub / restaurant,
                situated in the quaint village of Sporle, Norfolk. Offering both dine in and collection.
              </p>
              <p>
                Here at The Squirrels Drey, we understand it can sometimes be difficult to dine out when you have dietary requirements.
                That is why almost all of our dishes can be adapted according to your needs, just let us know.
              </p>

            </div>
          </div>
        </section>

        <section className="aboutSectionContainer greyBG">
          <div className="aboutSection">
            <div className="aboutText">
              <p className="lead">
                Want to <span className="italic">find out</span> more?
                Just get in touch.
              </p>
              <p>Feel free to contact us about any questions or queries you may have. We are always happy to help</p>
            </div>

            <div className="aboutImage raised">
              <Img
                alt={data.phone.name}
                fluid={data.phone.childImageSharp.fluid}
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout >
  )
}

export default Menu
