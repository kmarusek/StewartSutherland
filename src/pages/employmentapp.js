import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Notifications from 'react-notify-toast'
import { MediumForm } from '../components/EmploymentAppForm'
import { SmallForm } from '../components/EmploymentAppFormSmall'
import Layout from '../components/layout'
import { Border } from '../components/IndexPage'
import { HeroContainer, Title } from '../components/SubIndex'
import { Footer } from '../components/Footer'

const EmploymentApp = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(
    <Layout>
      <div className='relative z-0'>
        <div className='md:hidden'>
          <Img
            fluid={data.mobileImage.childImageSharp.fluid}
            className='-mt-12 md:-mt-6 md:mb-0 w-full'
            alt='hero-image'
            style={{ height: 300, }}
          />
        </div>
        <div className='hidden md:block md:w-full'>
          <Img
            fluid={data.desktopImage.childImageSharp.fluid}
            className='-mt-12 md:-mt-6 md:mb-0 w-full'
            alt='hero-image'
          />
        </div>
        <HeroContainer>
          <Title className=''>Career</Title>
          <Border thick className='w-2/3 mt-2 bg-primary' />
        </HeroContainer>
      </div>
      <Notifications />
      <div className='lg:hidden container mx-auto p-6 lg:block'>
        <SmallForm />
      </div>
      <div className='hidden container mx-auto p-6 lg:block'>
        <MediumForm />
      </div>
      <Footer />
    </Layout>
  )
}

export default EmploymentApp