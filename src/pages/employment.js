import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Layout from '../components/layout'
import content from '../content/pages/projects.json'
import { Border } from '../components/IndexPage'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { HeroContainer, Title } from '../components/SubIndex'
import { Message } from '../components/MessageBar'
import Img from 'gatsby-image'
import JobApplication from '../assets/pdf/Standard-Application.pdf'
import '../css/employment.css'
import employVideo from '../assets/videos/stewart-sutherland-recruitment-video.mp4'

const ImageWrapper = styled.div`
  @media (min-width: 768px) {
    height: 250px;
  }
  @media (min-width: 1024px) {
    height: 335px;
  }
  @media (min-width: 1280px) {
    height: 420px;
  }
`

const SecondPage = () => {
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
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub2: file(relativePath: { eq: "Production-Packer.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub3: file(relativePath: { eq: "Pro-Operator.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub4: file(relativePath: { eq: "Job-Listing.jpg" }) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const gotoEmploymentApp = useCallback(() => {
    navigate('/employmentapp')
  }, [navigate,])
  
  const sharetoFacebook = function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https://ssbags.com/employment');
  };
  return (
    <Layout>
      <div className='relative z-0'>
        <div className='md:hidden'>
          <Img
            fluid={data.mobileImage.childImageSharp.fluid}
            className='-mt-12 md:-mt-6 md:mb-0 w-full'
            alt='hero-image'
            style={{ height: 275, }}
          />
        </div>
        <div className='hidden md:block md:w-full'>
          <Img
            fluid={data.desktopImage.childImageSharp.fluid}
            className='-mt-12 md:-mt-6 md:mb-0 w-full'
            alt='hero-image'
            style={{height: 420,}}
          />
        </div>
        <HeroContainer>
          <Title className=''>{content.h1}</Title>
          <Border thick className='w-2/3 mt-2 bg-primary' />
          <Message></Message>
          <div className="buttonwrap">
            <Button
              variant='primary'
              className='mt-4 ml-10'
              onClick={gotoEmploymentApp}
            >
              {content['apply-btn']}
            </Button>
            <Button
              variant='primary'
              className='mt-4 ml-4'
              onClick={sharetoFacebook}            >
              {content['share-btn']}
            </Button>
            </div>
        </HeroContainer>
      </div>
      <div className='mt-8 container py-2 px-6 lg:px-10'>
        <h3 className='text-primary py-2 text-sm'>{content.company}</h3>
        <div className='text-3xl text-dark py-2 tracking-tight'>
          {content['title-heading']}
        </div>
        <hr className='border-primary w-32 border-t-2' />

        <div className='video-section mt-4'>
          <div className='md:flex my-10'>
            <div className='w-full md:w-1/2 md:px-6 md:py-8 md:mr-8 video-content'>
              <h4 className='uppercase text-dark text-2xl tracking-tight'>
                Lorem Ipsum
              </h4>
              <p className='text-sm mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices tempus velit. Ut nunc nulla, imperdiet sit amet quam in, ornare gravida nibh. In quis ultricies mi. Pellentesque euismod lacus a mattis egestas. Nam commodo viverra porttitor. Proin dui augue, lacinia ut erat ac, congue malesuada diam.</p>
              <div className="video-button">
                <Button
                  variant='primary'
                  className='my-4'
                  onClick={gotoEmploymentApp}
                >
                {content['apply-btn']}
                </Button>
              </div>
            </div>
            <video className='video employment-video' autoPlay playsInline loop muted controls>
              <source src={employVideo} type='video/mp4'/>
            </video>
          </div>
        </div>
        <div className='md:flex my-10'>
          <ImageWrapper className='w-full md:w-1/2 md:self-center lg:self-start'>
            <Img
              fluid={data.sub4.childImageSharp.fluid}
              alt='product'
              className='h-48 lg:h-64 xl:h-full'
            />
          </ImageWrapper>
          <div className='w-full md:w-1/2 md:px-6 md:py-8 md:ml-8'>
            <div className='pb-2 flex items-center pt-4 md:pt-'>
              {/* <hr className='border-primary w-12 border-t-2' />
              <p className='ml-8 text-primary uppercase text-sm'>
                {content['day-sub-1']}
              </p> */}
            </div>
            <h4 className='uppercase text-dark text-2xl tracking-tight'>
              {content['title-sub-1']}
            </h4>
            <p className='text-sm mt-4'>{content['info-sub-1']}</p>
          </div>
        </div>
        <div className='md:flex md:flex-row-reverse my-10'>
          <ImageWrapper className='w-full md:w-1/2 md:self-center lg:self-start'>
            <Img
              fluid={data.sub3.childImageSharp.fluid}
              alt='product'
              className='h-48 lg:h-64 xl:h-full'
            />
          </ImageWrapper>
          <div className='w-full md:w-1/2 md:px-6 md:py-8 md:mr-8'>
            <div className='pb-2 flex items-center pt-4 md:pt-'>
              {/* <hr className='border-primary w-12 border-t-2' />
              <p className='ml-8 text-primary uppercase text-sm'>
                {content['day-sub-1']}
              </p> */}
            </div>
            <h4 className='uppercase text-dark text-2xl tracking-tight'>
              {content['title-sub-2']}
            </h4>
            <p className='text-sm mt-4'>{content['info-sub-2']}</p>
          </div>
        </div>
        <div className='md:flex my-10'>
          <ImageWrapper className='w-full md:w-1/2 md:self-center lg:self-start'>
            <Img
              fluid={data.sub2.childImageSharp.fluid}
              alt='product'
              className='h-48 lg:h-64 xl:h-full'
            />
          </ImageWrapper>
          <div className='w-full md:w-1/2 md:px-6 md:py-8 md:ml-8'>
            <div className='pb-2 flex items-center pt-4 md:pt-'>
              {/* <hr className='border-primary w-12 border-t-2' />
              <p className='ml-8 text-primary uppercase text-sm'>
                {content['day-sub-3']}
              </p> */}
            </div>
            <h4 className='text-dark text-2xl tracking-tight'>
              {content['title-sub-3']}
            </h4>
            <p className='text-sm mt-4'>{content['info-sub-3']}</p>
          </div>
        </div>

        <div className='bottom-section'>
          <div className="itembox">
            <Button
              variant='primary'
              className='mt-4 bottom-btn'
              onClick={gotoEmploymentApp}
            >
              {content['apply-btn']}
            </Button>
          </div>
          <div className="itembox">
            <a href={JobApplication} download className='text-right mb-2 bg-gray-200 p-2 rounded'>Download Application</a>
          </div>
        </div>


      </div>
      <Footer />
    </Layout>
  )
}

export default SecondPage
