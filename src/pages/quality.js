import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Border } from '../components/IndexPage'
import { HeroContainer, Title } from '../components/SubIndex'
import about from '../content/pages/about.json'
import { Message } from '../components/MessageBar'
import { Footer } from '../components/Footer'

const Quality = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "9-quality-banner.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "9-quality-banner.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub1: file(relativePath: { eq: "Falls.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(
    <Layout title='Safe Quality Food'>
      <div className='relative z-0'>
        <div className='md:hidden'>
          <Img
            fluid={data.mobileImage.childImageSharp.fluid} 
            className='-mt-12 md:-mt-6 md:mb-0 w-full' alt='hero-image' 
            style={{height: 275,}}
          />
        </div>
        <div className='hidden md:block md:w-full'>
          <Img fluid={data.desktopImage.childImageSharp.fluid}
            className='-mt-12 md:-mt-6 md:mb-0 w-full'
            alt='hero-image'
            style={{height: 420,}}
          />
        </div>
        <HeroContainer>
          <Title className=''>
            {about['h1-s2']} 
          <Border thick className='w-1/3 mt-2 bg-primary' />
          </Title>
          <Message></Message>
        </HeroContainer>
        
      </div>
      <div className='container p-8 lg:p-12 p lg:p-16'>
        <div className='mt-6 md:mt-10 md:flex items-center'>
          <div className='w-64 mx-auto md:mx-0 md:w-1/3'>
            <Img fluid={data.sub1.childImageSharp.fluid} alt='about-press' />
          </div>
          <div className='w-full md:w-2/3 md:pl-24 px-8 py-4'>
            <h2 className='mt-4 md:mt-8 tracking-tighter uppercase text-gray-800 text-3xl'>{about['h2-s2']}</h2>
            {/* {about['content2-s2'].map(( cnt, idx ) =>  <p key={idx} className='text-sm py-1'>{cnt}</p> )} */}
            <p>Stewart Sutherland understands that we have an obligation to protect our planet. Our focus is to manufacture products using processes to minimize negative environmental impacts, conserve energy and natural resources, are safe for employees, communities and consumers. Some examples of our environmentally friendly practices: </p>
            <ul className='list-disc p-4'>
              <li className='my-2'>Recycling as many materials as feasible</li>
              <li className='my-2'>Maximizing usage and minimizing waste of materials</li>
              <li className='my-2'>Eliminating contaminants from entering the eco-system </li>
              <li className='my-2'>Use of recyclable and biodegradable products </li>
              <li className='my-2'>Working with suppliers that hold themselves to the same values as Stewart Sutherland</li>
              <li className='my-2'>Optimizing transportation needs</li>
              <li className='my-2'>Constant pursuit of better ways and new technology to minimize our footprint</li>
            </ul>


          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Quality