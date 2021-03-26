import React, { useState, useCallback } from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Border } from '../components/IndexPage'
import { HeroContainer, Title } from '../components/SubIndex'
import { Footer } from '../components/Footer'
import team from '../content/pages/team.json'
import { CardCollapsible } from '../components/CardCollapsible'
import { Message } from '../components/MessageBar'
import { Modal } from '../components/Modal'
import heroVideo from '../assets/videos/Stewart_sutherland_Web Hero - Our Team.mp4'
import '../css/team.css'
import '../css/video.css'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "158-Our-Team Banner-Photo.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "158-Our-Team Banner-Photo.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      userImg: file(relativePath: { eq: "200-administrator-male.png" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      One: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Two: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Three: file(relativePath: { eq: "3.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Four: file(relativePath: { eq: "4.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Five: file(relativePath: { eq: "11.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Six: file(relativePath: { eq: "6.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Seven: file(relativePath: { eq: "7.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Eight: file(relativePath: { eq: "8.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Nine: file(relativePath: { eq: "12.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Ten: file(relativePath: { eq: "13.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [dialog, setOpenDialog,] = useState('')
  const onSetOpenDialog = useCallback((name) => {
    setOpenDialog(name)
  }, [])
  const onCloseDialog = useCallback(() => {
    setOpenDialog('')
  }, [])

  return (
    <Layout>
      <div className='relative z-0'>
        <div className='md:hidden'>
          <video className='-mt-12 md:-mt-6 md:mb-0 w-full herovideo' autoPlay playsInline loop muted>
            <source src={heroVideo} type='video/mp4'/>
          </video>
        </div>
        <div className='hidden md:block md:w-full'>
          <video className='-mt-12 md:-mt-6 md:mb-0 w-full herovideo' autoPlay playsInline loop muted>
            <source src={heroVideo} type='video/mp4'/>
          </video>
        </div>
        <HeroContainer>
          <Title className=''>{team.h1}
          <Border thick className='w-1/3 mt-2 bg-primary'/>
          </Title>
          <Message></Message>
        </HeroContainer>   
      </div>
      <div className='container py-4 lg:py-6 lg:py-10'>
        <h1 className='text-center text-2xl text-primary my-4'>Team</h1>
        <div className='px-6 md:px-0 flex flex-wrap justify-around md:justify-between'>
          <div className='photo-margin md:w-48 md:mx-6 lg:w-64 xl:mx-12 mb-32'>
              <Img fluid={data.One.childImageSharp.fluid} alt='team-image' className="shadow rounded-full max-w-full h-full align-middle border-none"/>
            <p className='text-center font-light'>Colleen Parran</p>
            <p className='text-center font-semibold'>President</p>
            <div className='mt-2 text-center'>
              <div
                className='font-semiboldcursor-pointer bg-gray-200 rounded text-center inline px-6 py-2'
                role='button'
                onClick={() => onSetOpenDialog('one')}
              >
                Bio
              </div>
              <Modal isOpen={dialog === 'one'} onRequestClose={onCloseDialog}>
                <Img fluid={data.One.childImageSharp.fluid} alt='team-image' className='rounded mb-4' />
                <p>
                  Colleen is the President and CEO of Stewart-Sutherland and a
                  member of the Stewart family. She is proud to be the third
                  generation of this family owned and operated business! Colleen
                  received her bachelor’s degree from Michigan State University
                  in 2007 and since has had several roles within the company,
                  including Chief Operations Officer before becoming President
                  and CEO.
                </p>
                <p>
                  With the help of her team, Colleen led the company to record
                  breaking profits in 2019. The company’s growing success is
                  built on Colleen and her family’s core values and integrity
                  through good business ethics, honesty, teamwork and
                  dependability.
                </p>
                <p>
                  Her professional philosophy is best stated by Jack Welch- “A
                  leader’s job is to look into the future and see the
                  organization, not as it is, but as it should be.”
                </p>
              </Modal>
            </div>
          </div>

          <div className='photo-margin md:w-48 md:mx-6 lg:w-64 xl:mx-12 mb-32'>
            <Img fluid={data.Two.childImageSharp.fluid} alt='team-image' className="shadow rounded-full max-w-full h-full align-middle border-none" />
            <p className='text-center font-light'>Daniel Doan</p>
            <p className='text-center font-semibold'>Vice President of Sales</p>
            <div className='mt-2 text-center'>
              <div
                className='font-semiboldcursor-pointer bg-gray-200 rounded text-center inline px-6 py-2'
                role='button'
                onClick={() => onSetOpenDialog('two')}
              >
                Bio
              </div>
              <Modal isOpen={dialog === 'two'} onRequestClose={onCloseDialog}>
                <Img fluid={data.Two.childImageSharp.fluid} alt='team-image' className='rounded mb-4' />
                <p>
                  Dan graduated from Michigan State University with a B.S. in
                  Hospitality Business Management in 2007. He has been a sales
                  manager to some extent his entire career, all of which as been
                  in the food and beverage industry or the food packaging
                  industry. As Vice President of Sales his vision is to continue
                  the company’s growth to the benefit of our customers and
                  employees.
                </p>
              </Modal>
            </div>
          </div>

          <div className='photo-margin md:w-48 md:mx-6 lg:w-64 xl:mx-12 mb-32'>
            <Img fluid={data.Three.childImageSharp.fluid} alt='team-image' className="shadow rounded-full max-w-full h-full align-right border-none right-align" />
            <p className='text-center font-light'>Jaima Green</p>
            <p className='text-center font-semibold'>Director of Sales</p>
            <div className='mt-2 text-center'>
              <div
                className='font-semiboldcursor-pointer bg-gray-200 rounded text-center inline px-6 py-2'
                role='button'
                onClick={() => onSetOpenDialog('three')}
              >
                Bio
              </div>
              <Modal isOpen={dialog === 'three'} onRequestClose={onCloseDialog}>
                <Img fluid={data.Three.childImageSharp.fluid} alt='team-image' className='rounded mb-4 ' />
                <p>
                  Jaima started as a graphics assistant in 2000. She
                  transitioned to Sales Manager 2011 and in 2019 was promoted to
                  Director of Sales. In this role she manages our Customer
                  Service team, provides costing and quotes, manages some of our
                  highest profile clients and provides full time support to our
                  outside sales reps.
                </p>
              </Modal>
            </div>
          </div>

          <div className='photo-margin md:w-48 md:mx-6 lg:w-64 xl:mx-12 mb-32'>
            <Img fluid={data.Four.childImageSharp.fluid} alt='team-image' className="shadow rounded-full max-w-full h-full align-middle border-none" />
            <p className='text-center font-light'>Karla Meeks</p>
            <p className='text-center font-semibold'>Head of HR</p>
            <div className='mt-2 text-center'>
              <div
                className='font-semiboldcursor-pointer bg-gray-200 rounded text-center inline px-6 py-2'
                role='button'
                onClick={() => onSetOpenDialog('four')}
              >
                Bio
              </div>
              <Modal isOpen={dialog === 'four'} onRequestClose={onCloseDialog}>
                <Img fluid={data.Four.childImageSharp.fluid} alt='team-image' />
                <p>
                  Karla has been involved with Human Resources management for
                  over 25 years. She spent 5 years as a dual branch manager for
                  Kelly Services and Workers Compensation SME for the Western
                  District of Michigan. She also spent 7 years as Operations
                  Manager for Anserteam, helping to earn them their WBENC
                  Certification, making them the first and only WBENC certified
                  North American diversity staffing alliance. Prior to joining
                  Stewart Sutherland was HR for a plastics manufacturing firm in
                  Spring Lake. Born and raised in Coopersville, proud mama of
                  Jack and Jaime, who both live in Minneapolis, MN.
                </p>
              </Modal>
            </div>
          </div>

          <div className='photo-margin md:w-48 md:mx-6 lg:w-64 xl:mx-12 mb-32'>
            <Img fluid={data.Five.childImageSharp.fluid} alt='team-image' className="shadow rounded-full max-w-full h-full align-middle border-none" />
            <p className='text-center font-light'>Richard Mackie</p>
            <p className='text-center font-semibold'>Controller</p>
            <div className='mt-2 text-center'>
              <div
                className='font-semiboldcursor-pointer bg-gray-200 rounded text-center inline px-6 py-2'
                role='button'
                onClick={() => onSetOpenDialog('five')}
              >
                Bio
              </div>
              <Modal isOpen={dialog === 'five'} onRequestClose={onCloseDialog}>
                <Img fluid={data.Five.childImageSharp.fluid} alt='team-image' className='rounded mb-4' />
                <p>
                  As the Controller for Stewart Sutherland, Richard is
                  responsible for the financial health of the company. He also
                  oversees IT and consults with other department heads to bring
                  about process improvements. Prior to joining us, Richard
                  served as the Vice President of Automatic Valve for 15 years,
                  spent 7 years in the retail food industry, 2 years as a SaaS
                  consultant and was most recently Chief Financial Officer for
                  Tyr Tactical in Peoria, AZ. He has a passion for utilizing
                  technology to improve operating effectiveness and efficiency.
                  Originally from New Zealand he has lived in Michigan for 29
                  years with his wife Janice and 3 children. In his spare time,
                  you will find him out enjoying one of the many beautiful local
                  bicycle trails.
                </p>
              </Modal>
            </div>
          </div>

          <div className='photo-margin md:w-48 md:mx-6 lg:w-64 xl:mx-12 mb-32'>
            <Img fluid={data.Six.childImageSharp.fluid} alt='team-image' className="shadow rounded-full max-w-full h-full align-middle border-none" />
            <p className='text-center font-light'>Carmen Bierenga</p>
            <p className='text-center font-semibold'>Warehouse & Logistics</p>
            <div className='mt-2 text-center'>
              <div
                className='font-semiboldcursor-pointer bg-gray-200 rounded text-center inline px-6 py-2'
                role='button'
                onClick={() => onSetOpenDialog('six')}
              >
                Bio
              </div>
              <Modal isOpen={dialog ==='six'} onRequestClose={onCloseDialog}>
                <Img fluid={data.Six.childImageSharp.fluid} alt='team-image' className='rounded mb-4' />
                <p>
                  Carmen started in Customer Service in 2010. In 2019 she was
                  promoted to become our Shipping and Warehouse manager. She
                  oversees 3 warehouse employees and works in lock step with
                  production and sales to ensure our customers’ needs are met.
                </p>
              </Modal>
            </div>
          </div>

          <div className='photo-margin md:w-48 md:mx-6 lg:w-64 xl:mx-12 mb-32'>
            <Img fluid={data.Seven.childImageSharp.fluid} alt='team-image' className="shadow rounded-full max-w-full h-full align-middle border-none"/>
            <p className='text-center font-light'>Kristina Jackson</p>
            <p className='text-center font-semibold'>Quality Control</p>
            <div className='mt-2 text-center'>
              <div
                className='font-semiboldcursor-pointer bg-gray-200 rounded text-center inline px-6 py-2'
                role='button'
                onClick={() => onSetOpenDialog('seven')}
              >
                Bio
              </div>
              <Modal isOpen={dialog === 'seven'} onRequestClose={onCloseDialog}>
                <Img fluid={data.Seven.childImageSharp.fluid} alt='team-image' className='rounded mb-4' />
                <p>
                  Kristi started as a packer in 1998 and quickly transitioned
                  into production support. She was then trained as a machine
                  operator for flat sheets. She moved fluidly between packing,
                  production support and machine operating, while also being
                  cross trained in the shipping/receiving warehouse. She worked
                  there until 2016. It was in 2016 that she was promoted to the
                  management team and became head of Quality Control.
                </p>
              </Modal>
            </div>
          </div>

          <div className='photo-margin md:w-48 md:mx-6 lg:w-64 xl:mx-12 mb-32'>
            <Img fluid={data.Nine.childImageSharp.fluid} alt='team-image' className="shadow rounded-full max-w-full h-full align-middle border-none"/>
            <p className='text-center font-light'>Julie Rhodes</p>
            <p className='text-center font-semibold'>Graphics Manager</p>
            <div className='mt-2 text-center'>
              <div
                className='font-semiboldcursor-pointer bg-gray-200 rounded text-center inline px-6 py-2'
                role='button'
                onClick={() => onSetOpenDialog('nine')}
              >
                Bio
              </div>
              <Modal isOpen={dialog === 'nine'} onRequestClose={onCloseDialog}>
                <Img fluid={data.Nine.childImageSharp.fluid} alt='team-image' className='rounded mb-4' />
                <p>
                  Graphic Designer • Print Specialist Education: Kalamazoo
                  Valley, SMC and Van Buren Tech 25 Years of Expertise in Design
                  and Print industry. Proficient in Adobe Suite Software, Print
                  processes &amp; Color Management. Provided solutions for DP
                  Flexo print processes which utilized time management and
                  overall print quality. Selected by Mattawan Consolidated
                  School for Graphic Design Senior Mentor- ship program. Hobbies
                  include photography, gardening and outdoor activities.
                </p>
              </Modal>
            </div>
          </div>

          <div className='photo-margin md:w-48 md:mx-6 lg:w-64 xl:mx-12 mb-32'>
            <Img fluid={data.Ten.childImageSharp.fluid} alt='team-image' className="shadow rounded-full max-w-full h-full align-middle border-none" />
            <p className='text-center font-light'>Gene Kramer</p>
            <p className='text-center font-semibold'>
              Scheduling & Procurement Manager
            </p>
            <div className='mt-2 text-center'>
              <div
                className='font-semiboldcursor-pointer bg-gray-200 rounded text-center inline px-6 py-2'
                role='button'
                onClick={() => onSetOpenDialog('ten')}
              >
                Bio
              </div>
              <Modal isOpen={dialog === 'ten'} onRequestClose={onCloseDialog}>
                <Img fluid={data.Ten.childImageSharp.fluid} alt='team-image' className='rounded mb-4' />
                <p>
                  Gene Kramer is a procurement and production planning
                  professional with over 15 years of experience working in
                  manufacturing. Gene works hard to surpass customer service
                  goals and develops strong business relationships. Gene
                  received his bachelor’s degree from Central Michigan
                  University in Supply Chain Management and his master’s degree
                  from Cornerstone University. Gene enjoys activities outside
                  including golf, hunting and fishing. Gene also enjoys spending
                  time with his family of six.
                </p>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default About
