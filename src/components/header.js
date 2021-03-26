import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import { Navs, menuConfig } from './navs'
import MenuSvg from '../assets/svg/menu.svg'
import MailSvg from '../assets/svg/envelope-solid.svg'
import PhoneSvg from '../assets/svg/phone.svg'
import Img from 'gatsby-image'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  width: 200px;
  @media (min-width: 768px) {
    width: 280px;
  }
  @media (min-width: 1280px) {
    width: 480px;
  }
`

const Header = ({ siteTitle, }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "SS-Logo_2020.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return (
    <>
      <div className='md:hidden'>
        <Menu
          styles={menuConfig}
          customBurgerIcon={
            <div className='bg-primary p-2'>
              <MenuSvg />
            </div>
          }
        >
          {Navs.map((nav) => (
            <NavSmallItem key={nav.text} text={nav.text} to={nav.to} />
          ))}
        </Menu>
      </div>
      <div className='container mx-auto pt-4 px-8 md:px-16 md:static'>
        <div className='hidden md:flex md:justify-between '>
          <div className='self-center'>
            <Link className='no-underline text-inherit mb-0' to='/'>
              <LogoWrapper className='w-64 mb-0'>
                <Img fluid={data.file.childImageSharp.fluid} alt='logo' />
              </LogoWrapper>
            </Link>
          </div>
          <div className='flex justify-end mr-4 w-full'>
            <div className='flex items-center'>
              <PhoneSvg className='w-4 mr-2' />
              <a className='font-sans font-light break-all cursor-pointer hover:text-primary' href='tel:18002531034'>1-800-253-1034</a>
            </div>
            <div className='ml-8 flex items-center'>
              <MailSvg className='w-4 mr-2' />
              <a className='font-sans font-light break-all cursor-pointer hover:text-primary' href='mailto:info@ssbags.com'>info@ssbags.com</a>
            </div>
          </div>
        </div>
        <div className='hidden -mx-10 xl:mx-0 md:flex md:justify-end md:relative lg:mr-4 z-10'>
          {Navs.map((nav) => (
            <NavItem key={nav.text} text={nav.text} to={nav.to} />
          ))}
        </div>
      </div>
    </>
  ) 
}

const NavItem = ({ text = 'Nav', to = '#', }) => (
  <Link to={to}>
    <div
      className='
        bg-primary text-white font-sans py-2 md:py-3 text-xs font-medium 
        uppercase px-4 xl:px-8 tracking-wider hover:text-gray-400 transition-colors duration-300 ease-in-out'
    >
      {text}
    </div>
  </Link>
)

const NavSmallItem = ({ text = 'Nav', to = '#', }) => (
  <Link className='menu-item block py-2' to={to === '#' ? '/#' : to}>
    {text}
  </Link>
)

export default Header
