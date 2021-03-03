import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import content from '../content/footer.json'

const Image = styled.img`
  height: 26px;
  @media (min-width: 768px) {
    height: 28px;
  }
  @media (min-width: 1280px) {
    height: 40px;
  }
`
const Title = styled.h5`
`
const FooterBottom = styled.footer`
  background-color: #e61d30;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "SS-Logo_2020.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo2: file(relativePath: { eq: "SQF_Logo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo3: file(relativePath: { eq: "Forestry_Initiative.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return(
    <>
      <div className='container'>
        <div className='lg:flex p-4 md:p-8 lg:p-12 justify-between'>
          <div className='mx-auto text-center lg:text-left lg:mx-0'>
            <div className='w-64 mx-auto lg:mx-0'>
              <Img className='' fluid={data.logo.childImageSharp.fluid} alt='logo' />
            </div>
            <hr className='border-primary mx-auto lg:mx-0 border-t-2 my-4 w-24 md:w-32 lg:w-40' />
            <p className='font-light tracking-wider'>{content['address-1']}</p>
            <p className='font-light tracking-wider'>{content['address-2']}</p>
            <p className='font-light tracking-wider'>{content['address-3']}</p>
            <p className='font-light tracking-wider'>{content['address-4']}</p>
          </div>
          <div className='flex justify-between items-center'>
            <div className='w-48 xl:w-64 mx-auto lg:mx-0'>
              <Img className='' fluid={data.logo2.childImageSharp.fluid} alt='logo' />
            </div>
            <div className='w-12 xl:w-24' />
            <div className='w-48 xl:w-64 mx-auto lg:mx-0'>
              <Img className='' fluid={data.logo3.childImageSharp.fluid} alt='logo' />
            </div>
          </div>
          <div className='flex flex-wrap justify-around lg:flex-col mt-4'>
            {/* eslint-disable camelcase */}
            {content.sections.map(({title, title_url, infos,}, idx) => {
              return(
                <div key={`${title}-${idx}`} className='mt-2 mx-4 lg:mx-0'>
                  <Title className='uppercase font-semibold text-black xl:text-lg'><Link to={title_url}>{title}</Link></Title>
                  {infos.map(( info, indx ) => <p key={indx} className='font-light text-sm my-4 md:pr-4'>{info}</p>)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <FooterBottom className='p-4 text-center text-sm mx-auto font-light bg-red-400 text-white'>
        {content.trademark}
      </FooterBottom>
    </>
  )
}

export { Footer }