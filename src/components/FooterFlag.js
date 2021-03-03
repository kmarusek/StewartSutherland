import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FlagImage = styled.div`
  width: 100%;
  ${props => props.src && `background: url(${props.src});`}
  background-repeat: no-repeat;
  background-size: cover;
`
const Container = styled.div`
  position: absolute;
  top: 0;
  text-align: center;
  height: 225px;
  width: 100%;
  @media (min-width: 768px) {
    height: 300px
  }
  @media (min-width: 1024px) {
    height: 375px;
  }
  @media (min-width: 1280px) {
    height: 450px;
  }
`
const LargeText = styled.h4`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
  @media (min-width: 1280px) {
    font-size: 2.75rem;
  }
`
const Text = styled.div`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 2.25rem;
  }
`

export const FooterFlag = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "American-Flag.jpg" }) {
        childImageSharp {
          fluid (maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "American-Flag.jpg" }) {
        childImageSharp {
          fluid (maxHeight: 350, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const source = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    // {
    //   ...data.desktopImage.childImageSharp.fluid,
    //   media: `(min-width: 1024px)`,
    // },
  ]


  return (
    <div className='mt-12 relative' >
      <div className=''>
        <Img fluid={source} alt='product' className='' style={{maxHeight: 450,}} />
      </div>
      <Container className='flex flex-col justify-center'>
        <LargeText className='self-center'>
          Proudly manufactured in <br /> Vicksburg, Michigan.
        </LargeText>
        <Text className='flex inline-block justify-center'>
          <div className='border-t-2 border-white'>
            EST. 1959
          </div>
        </Text>
      </Container>
    </div>
  ) 
}



export const FooterFlagBackup = () => (
  <div className='mt-12'>
    <FlagImage src='https://res.cloudinary.com/ddfez1a0x/image/upload/c_scale,w_2000/v1588864349/stewart-suntherland/American-Flag.jpg'>
      <Container className='flex flex-col justify-center'>
        <LargeText className='self-center'>
          Proudly manufactured in <br /> Vicksburg, Michigan.
        </LargeText>
        <Text className='flex inline-block justify-center'>
          <div className='border-t-2 border-white'>
            EST. 1959
          </div>
        </Text>
      </Container>
    </FlagImage>
  </div>
)
