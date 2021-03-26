import React, { useCallback } from 'react'
import { useStaticQuery, graphql, navigate, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import JSONData from '../content/pages/index.json'
import { HeroContainer, Title, Border } from '../components/IndexPage'
import { Button } from '../components/Button'
import { Heading3 } from '../components/Text'
import { IndexCarousel } from '../components/IndexCarousel'
import { FooterFlag } from '../components/FooterFlag'
import { Footer } from '../components/Footer'
import { Message } from '../components/MessageBar'
import '../css/menu.css'
import '../css/home.css'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      leftSub1: file(relativePath: { eq: "Paper-Bag-Products-3.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 425) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rightSub1: file(
        relativePath: { eq: "20200203-05_US_Stewart_Sutherland-142.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub2: file(relativePath: { eq: "Rollers.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub2Md: file(relativePath: { eq: "Rollers.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 150, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub3: file(relativePath: { eq: "Pine-Forest.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const sourceSub2 = [
    data.sub2.childImageSharp.fluid,
    {
      ...data.sub2Md.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <Layout>
      <div className='relative z-0'>
        <div className='md:hidden bg-black'>
          <Img
            fluid={data.mobileImage.childImageSharp.fluid}
            className='-mt-12 md:-mt-6 md:mb-0 w-full'
            alt='hero-image'
            style={{ height: 324, opacity: .7,}}
          />
        </div>
        <div className='hidden md:block md:w-full bg-black'>
          <Img
            fluid={data.desktopImage.childImageSharp.fluid}
            className='-mt-12 md:-mt-6 md:mb-0 w-full'
            alt='hero-image'
            style={{height: 420, opacity: .7,}}
          />
        </div>
        <HeroContainer>
          <Title indexShrink className=''>
            {JSONData.h1} <br /> {JSONData['h2-line2']}
          <Border thick className='w-32 md:w-64 w-2 mt-2 bg-primary' />
          </Title>
          <div className='max-w-md xl:max-w-2xl'>
            <p className='xl:block mt-4 open-sans text-gray-100 font-thin text-xs md:text-sm'>
            We offer distribution throughout North America and work with companies large and small to
            create and manufacture the perfect product for your needs. Our customer service, exceptional
            turnaround time and commitment to environmental sustainability make Stewart Sutherland the
            ideal partner for your food packaging needs.
            </p>
            <div className='mt-4 xl:mt-8 button-container'>
              <Link to='/team'>
                <Button 
                  className='uppercase hover:bg-dark hover:text-white' 
                  size='large'
                  >
                Our Team
                </Button>
              </Link>
              <Link to='/employment'>
                <Button
                  className='uppercase ml-4 md:ml-8'
                  size='large'
                  variant='primary'
                >
                Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </HeroContainer>
      </div>
      <div className='block px-4 mt-4 lg:px-0 lg:mt-0 lg:flex mb-8'>
        <div className='w-full xl:w-1/2 md:flex mb-4 md:mb-0'>
          <div className='h-full md:w-1/2'>
            <Img
              fluid={data.leftSub1.childImageSharp.fluid}
              alt='manufacturing'
              className='h-full lg:h-64 xl:h-full'
            />
          </div>
          <div className='md:w-1/2 py-4 md:py-0 md:px-6'>
            <Heading3 className='lg:mt-6 mb-1 inline-block'>
              {JSONData['title-left-sub1']}
              <Border className='w-2/3 mt-1 bg-primary' />
            </Heading3>
            <p className='mt-2'>
              {JSONData['content-left-sub1']}
            </p>
          </div>
        </div>
        <div className='w-full xl:w-1/2 md:flex'>
          <div className='md:w-1/2'>
            <Img
              fluid={data.rightSub1.childImageSharp.fluid}
              alt='manufacturing'
              className='h-48 lg:h-64 xl:h-full'
            />
          </div>
          <div className='md:w-1/2 py-4 md:py-0 md:px-6'>
            <Heading3 className='lg:mt-6 mb-1 inline-block'>
              {JSONData['title-right-sub1']}
              <Border className='w-2/3 mt-1 bg-primary' />
            </Heading3>
            <p className='mt-2'>
              {JSONData['content-right-sub1']}
            </p>
          </div>
        </div>
      </div>
      <div className='mx-auto container p-4 pb-0 md:px-12 lg:px-16 xl:px-24 md:flex'>
        <div className='md:w-1/2'>
          <Img fluid={sourceSub2} alt='product' className='xl:h-full' />
        </div>
        <div className='md:w-1/2 py-4 md:p-4 lg:pt-4 text-sm md:text-base'>
          <Heading3 className='inline-block'>
            {JSONData['title-sub2']}
            <Border className='w-2/3 mt-1 bg-primary' />
          </Heading3>
          <p className='my-2'>{JSONData['content-sub2']}</p>
        </div>
      </div>
      <div className='mx-auto container p-4 pt-0 md:px-12 lg:px-16 xl:px-24 md:flex md:flex-row-reverse'>
        <div className='md:w-1/2'>
          <Img
            fluid={data.sub3.childImageSharp.fluid}
            alt='product'
            className='xl:h-full'
          />
        </div>
        <div className='md:w-1/2 py-4 md:p-4 lg:pt-4 text-sm md:text-base'>
          <Heading3 className='inline-block'>
            {JSONData['title-sub3']}
            <Border className='w-2/3 mt-1 bg-primary bottom-border' />
          </Heading3>
          <p className='my-2'>{JSONData['content-sub3']}</p>
        </div>
      </div>
      <div className='container mx-auto px-6 mt-6 lg:mt-12'>
        <div className='flex justify-center'>
          <div className='mb-4 inline-block -px-4 border-b-2 border-primary'>
            <Heading3 className='text-xl text-center -mx-4'>
              Our history
            </Heading3>
          </div>
        </div>
        <IndexCarousel />
      </div>
      <Footer />
    </Layout>
  )
}

export default IndexPage
