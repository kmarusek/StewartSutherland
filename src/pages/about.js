import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Border } from '../components/IndexPage'
import { HeroContainer, Title } from '../components/SubIndex'
import about from '../content/pages/about.json'
import { Footer } from '../components/Footer'
import { Message } from '../components/MessageBar'
import '../css/about.css'
import '../css/video.css'
import heroVideo from '../assets/videos/Web Hero - Employment - 1920x420.mp4'
import heroVideoMobal from '../assets/videos/Stewart_Sutherland_Web Hero - Employment.mp4'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "Gear-Photo.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "Gear-Photo.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub1: file(relativePath: { eq: "Old-Logo.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub2: file(relativePath: { eq: "SS-Building.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub3: file(relativePath: { eq: "bob_barbara.png" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub4: file(relativePath: { eq: "patty_john.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub5: file(relativePath: { eq: "colleen.screenshot.png" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub6: file(relativePath: { eq: "machine.screenshot.png" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub7: file(relativePath: { eq: "colleen.png" }) {
        childImageSharp {
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
          <video loading='lazy' className='-mt-12 md:-mt-6 md:mb-0 w-full herovideo' autoPlay playsInline loop muted>
            <source src={heroVideoMobal} type='video/mp4'/>
          </video>
        </div>
        <div className='hidden md:block md:w-full'>
          <video loading='lazy' className='-mt-12 md:-mt-6 md:mb-0 w-full herovideo' autoPlay playsInline loop muted>
            <source src={heroVideo} type='video/mp4'/>
          </video>
        </div>
        <HeroContainer>
          <Title className=''>
            {about['h1-s1']} 
          <Border thick className='mt-2 bg-primary' />
          </Title>
          <Message></Message>
        </HeroContainer>
        
      </div>
      <div className='container p-8 lg:p-12 p lg:p-16'>
        <div className='md:flex items-center'>
          <div className='w-64 mx-auto md:mx-0 md:w-1/3'>
            <Img fluid={data.sub5.childImageSharp.fluid} alt='about-press' />
          </div>
          <div className='w-full md:w-2/3 md:pl-24 px-8 py-4'>
            <h2 className='text-2xl uppercase text-primary mb-8'>{about['h1-s1']}</h2>
            {/* <h2 className='py-4 tracking-tighter uppercase text-gray-800 text-3xl'>{about['h2-s1']}</h2> */}
            <h1 className='pb-2 uppercase text-primary max-w-md'>{about['h3-s1']}</h1>
            <p className='text-sm py-2'>{about['content1-s1']}</p>
          </div>
        </div>
        <div className='mt-6 md:mt-10 md:flex items-center'>
          <div className='w-64 mx-auto md:mx-0 md:w-1/3'>
            <Img fluid={data.sub6.childImageSharp.fluid} alt='' />
          </div>
          <div className='w-full md:w-2/3 md:pl-24 px-8 py-4'>
            {/* <h2 className='tracking-tighter uppercase text-gray-800 text-3xl'>{about['h2-s1']}</h2> */}
            <p className='text-sm py-2'>{about['content2-s1']}</p>
          </div>
        </div>
      </div>
        <div className='container p-16 lg:flex lg:items-center'>
          <div className='max-w-sm mt-4 lg:mt-0 mx-auto lg:mx-0 lg:w-1/3'>
            <Img fluid={data.sub1.childImageSharp.fluid} alt='classic logo' />
            {/* <h4 className='text-xl text-center text-primary mt-2'>Bob and Barbara Stewart</h4> */}
            <Img fluid={data.sub2.childImageSharp.fluid} alt='classic facility photo' className='mt-10' />
            {/* <h4 className='text-xl text-center text-primary mt-2'>John and Patty Stewart</h4> */}
          </div>
          <div className='w-full lg:w-2/3 lg:pl-16'>
            <h2 className='text-4xl text-dark-light'>{about['h1-s3']}</h2>
            {about['content1-s3'].map(( cnt, idx ) =>  <p key={idx} className='text-dark-light text-sm py-1'>{cnt}</p> )}
          </div>
 
        </div>
        <div className='container p-16 lg:flex lg:items-center'>
          <div className="inner">
            <div className="image">
              <Img fluid={data.sub7.childImageSharp.fluid} alt='Colleen Parran'/>
              <h4 className='text-xl text-center text-primary mt-2'>Colleen Parran</h4>
              <h4 className='text-xl text-center text-primary mt-2'>President & Ceo</h4>
              <h4 className='text-xl text-center text-primary mt-2'>2020 - Present</h4> 
            </div>
            <div className="image">
              <Img fluid={data.sub4.childImageSharp.fluid} alt='Patty and John' />
              <h4 className='text-xl text-center text-primary mt-2'>Patty & John Stewart</h4>
              <h4 className='text-xl text-center text-primary mt-2'>Owners</h4>
              <h4 className='text-xl text-center text-primary mt-2'>1994 - Present</h4> 
            </div>
            <div className="image">
              <Img fluid={data.sub3.childImageSharp.fluid} alt='Bob and Lou'/>
              <h4 className='text-xl text-center text-primary mt-2'>Bob & Barbara Stewart</h4>
              <h4 className='text-xl text-center text-primary mt-2'>Owners</h4>
              <h4 className='text-xl text-center text-primary mt-2'>1959 - 1994</h4> 
            </div>
          </div>
        </div>
      <Footer />
    </Layout>
  )
}

export default About