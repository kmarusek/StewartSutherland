import React, { useCallback } from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Border } from '../components/IndexPage'
import { HeroContainer, Title } from '../components/SubIndex'
import contact from '../content/pages/contact.json'
import { Button } from '../components/Button'
import { Input, TextArea } from '../components/EmploymentAppFormSmall'
import PhoneOutlineSvg from '../assets/svg/phone-outline.svg'
import BuildingSvg from '../assets/svg/building.svg'
import { Footer } from '../components/Footer'

const Contact = () => {
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
    }
  `)

  const onSubmit = useCallback((ev) => {
    ev.preventDefault()
    const form = new FormData(ev.target)
    // const data = {}
    // form.forEach((value, key, parent) => {
    //   data[key] = value
    // })
    // TODO: replace your FormSpree submission endpoint here
    fetch('https://formspree.io/xjvanblq', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: form,
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log('res: ', res)
        alert('Submitted successfully!')
      })
      .catch((err) => {
        console.log('err: ', err)
      })

    console.log('submit')
  }, [])

  return (
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
            style={{height: 420,}}

          />
        </div>
        <HeroContainer>
          <Title className=''>{contact.h1}</Title>
          <Border thick className='w-2/3 mt-2 bg-primary' />
        </HeroContainer>
      </div>
      <div className='container p-8 lg:p-12 p lg:p-16'>
        <form onSubmit={onSubmit}>
          <div className='lg:flex'>
            <div className='mb-4 lg:mb-0 lg:w-1/3 flex justify-around lg:flex-col lg:justify-end'>
              <div className='flex items-center'>
                <BuildingSvg className='h-8 w-8 mr-4' />
                <div>
                  <p className='font-semibold text-gray-800'>
                    {contact['company-name']}
                  </p>
                  <p className='lg:w-40 text-sm text-gray-600'>
                    {contact['company-address']}
                  </p>
                </div>
              </div>
              <div className='flex items-center lg:mt-4'>
                <PhoneOutlineSvg className='h-6 w-6 mr-6' />
                <div>
                  <p className='font-semibold text-gray-800'>
                    {contact['company-phone']}
                  </p>
                  <p className='text-sm text-gray-600'>
                    {contact['company-worktime']}
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:w-2/3 lg:flex'>
              <div className='lg:w-2/5'>
                <div className='mb-2'>
                  <Input placeholder='Enter your name' name='name' />
                </div>
                <div className='mb-2'>
                  <Input placeholder='Enter email address' name='address' />
                </div>
                <div className='mb-2 lg:mb-0 '>
                  <Input placeholder='Enter Subject' name='subject' />
                </div>
              </div>
              <div className='lg:ml-4 lg:w-3/5 '>
                <TextArea
                  className='h-full'
                  placeholder='Enter Message'
                  name='message'
                />
              </div>
            </div>
          </div>
          <div className='flex mt-8 justify-end'>
            <Button
              variant='primary'
              type='submit'
              className='focus:outline-none'
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </Layout>
  )
}

export default Contact
