import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { SEO } from '../components'

import { Layout } from '../layouts'

import './about.sass'

const getAbout = graphql`
  {
    notes: file(name: { eq: "notes" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pc: file(name: { eq: "aboutpc" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    phone: file(name: { eq: "phone" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(getAbout)
  return (
    <Layout>
      <SEO title="About" />
      <main className="aboutContainer">
        <section className="aboutSectionContainer greyBG">
          <div className="aboutSection">
            <div className="aboutText">
              <h2>About.</h2>
              <p className="lead">
                Helping <span className="italic">entrepreneurs</span> of all
                businesses achieve their dreams online{' '}
                <span className="coloredOrange punch">.</span>
              </p>
              <p>
                Beginning a new venture online is never easy. Worrying about
                building and running a website is part of that concern.
              </p>
              <p>
                Let me help you achieve your dreams online, so you can focus on
                growing your business and balancing your workload efficiently.
              </p>
            </div>
            <div className="aboutImage dropped">
              <Img
                alt={data.notes.name}
                fluid={data.notes.childImageSharp.fluid}
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        <section className="aboutSectionContainer">
          <div className="aboutSection column">
            <div className="aboutText alignStart">
              <p className="lead">
                Growing <span className="italic">businesses</span> and
                communities <span className="coloredOrange punch">.</span>
              </p>
              <p>
                Understanding one another helps build a lasting relationship
                whilst achieving great results.
              </p>
            </div>

            <div className="aboutListing">
              <div>
                <p>Visual Design, UX / UI</p>

                <p>
                  Designs that look good are never enough. I focus on customer
                  interaction, ease of navigation, efficient code structure, and
                  brand identity.
                </p>
              </div>
              <div>
                <p>Search Engine Optimisation (SEO)</p>
                <p>
                  I help websites rank well on Google searches by optimizing
                  every pixel for performance, speed, and mobile-friendliness.
                </p>
              </div>
              <div>
                <p>Training & Development</p>
                <p>
                  Completing the website is only part of the solution. I help
                  you every step of the way to get going online, with continual
                  training and development.
                </p>
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
              Efficient, <span className="italic">responsive</span> designs are
              the key to returning customers{' '}
              <span className="coloredOrange punch">.</span>
            </p>
            <p>
              Most web designers use online templates to create your website.
              Although these tools are quick and easy to set up, they come with
              many flaws.
            </p>
            <p>
              Bloated code, long load times, only partially customizable, are a
              few of the reasons why these types of sites may not be right for
              you.
            </p>
            <p>
              I hand-craft all of my code, molding the site to your needs. All
              code is fully optimized for loading speed and search engine
              optimization.
            </p>
          </div>
        </section>

        <section className="aboutSectionContainer">
          <div className="aboutSection">
            <div className="aboutText">
              <p className="lead">
                Want to have the <span className="italic">freedom</span> to
                change information at your convenience{' '}
                <span className="coloredOrange punch">?</span>
              </p>
              <p>
                Using content management systems (CMS), I can help you easily
                alter anything on the site you would like to.
              </p>
              <p>
                With an easily accessible interface, changing titles, wording,
                or products has never been easier.
              </p>
              <p>
                Full training will be provided to show you how to{' '}
                <span className="italic">update information</span> whenever you
                desire.
              </p>
            </div>
          </div>
        </section>

        <section className="aboutSectionContainer greyBG">
          <div className="aboutSection">
            <div className="aboutText">
              <h2>Why Me ?</h2>
              <p className="lead">
                A good <span className="italic">website,</span> is an important
                component of a successful business{' '}
                <span className="coloredOrange punch">.</span>
              </p>
              <p>
                I can help you achieve a great-looking, fully optimized website
                suited to your business needs.
              </p>
              <p>
                You don’t have to choose between countless hours of learning how
                to code or settling for a sub-par ‘template’ website.
              </p>
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

export default About
