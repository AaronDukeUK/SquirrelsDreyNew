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
    pc: file(name: { eq: "chicken" }) {
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
                <p>Toasted handmade seasalt and rosemary focaccia, herbed pitted olives, dipping oil</p>
                <p>Popcorn cockles, sweet chilli and red wine vinegar GF</p>
                <p>Two-way rabbit, thyme hash, kale crisps, spiced pear and port relish GF</p>
                <p>Ham hock bonbons, smoked cheddar tart, caramelised onion puree, cider and sage jelly</p>
              </div>
              <div>
                <p>Mains</p>
                <p>Norfolk-reared sirloin steak, thyme polenta chips, roasted vine tomatoes, smoked aubergine puree, watercress pesto GF</p>
                <p>Slow roast pork belly, sauteed summer beans, smoked lardons, fondant potato, baked bramley puree GF</p>
                <p>Slow braised brisket, porcini mushroom and stilton wellington, grandpa’s cabbage, smoked celeriac croquettes, port jus</p>
                <p>Pan seared sea bass, crab ravioli, courgette noodles, roast jerseys, sweet and sour broth GF</p>
                <p>Sustainably-sourced beer battered hake, beef dripping chips, crushed mint peas, lemon and chervil aioli GF</p>
                <p>Norfolk reared steak burger, smoked cheddar, beef dripping chips, sweet chilli and bacon jam GF</p>
                <p>Roast butternut, sweet potato and red pepper burger, smoked mozzarella, chunky chips, harissa mayo V GF</p>
              </div>
              <div>
                <p>Desserts</p>
                <p>Apple and summer berry oat crumble, star anise crème anglaise</p>
                <p>Treacle and walnut tart, toasted barley ice cream, salted caramel sauce</p>
                <p>White chocolate and raspberry crème brûlée, orange blossom shortbread</p>
                <p>Homemade ice cream selection</p>
              </div>
            </div>
          </div>
        </section>

        <section className="aboutSectionContainer">
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
            <p>
              All served with seasonal vegetables, braised red cabbage, roast garlic and rosemary potatoes, sausage and apricot stuffing, homemade jus. GF
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
    </Layout>
  )
}

export default Menu
