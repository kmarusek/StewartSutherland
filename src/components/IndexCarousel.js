import React from 'react'
import Carousel from 'react-multi-carousel'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024, },
    items: 3,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464, },
    items: 2,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0, },
    items: 1,
    partialVisibilityGutter: 30,
  },
}

const names = [
  'Bob Stewart and Lou Sutherland',
  'First Bag Machine',
  'Bob and Barbara Stewart',
  'Receiving Department Building 1962',
  'John Stewart & Wayne Storms Trade Show 1980’s',
  'Original Stewart-Sutherland Truck',
]

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const IndexCarousel = ({ deviceType = 'desktop', }) => {
  const data = useStaticQuery(graphql`
    query {
      sub1: file(relativePath: { eq: "History-One.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub2: file(relativePath: { eq: "History-Two.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub3: file(relativePath: { eq: "History-Three.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub4: file(
        relativePath: { eq: "History-Four.jpg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub5: file(relativePath: { eq: "History-Five.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub6: file(relativePath: { eq: "History-Six.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Carousel
      ssr
      infinite
      partialVisible
      deviceType={deviceType}
      itemClass='image-item'
      responsive={responsive}
    >
      {Array(6)
        .fill(0)
        .map((image, idx) => {
          return (
            <div
              key={idx}
              className='px-4 lg:w-2/3 xl:w-auto flex flex-col justify-center'
            >
              <Img
                fluid={data[`sub${idx + 1}`].childImageSharp.fluid}
                alt={`history-img-${idx}`}
              />
              <p className='text-primary text-center mt-4 text-lg font-semibold'>
                {names[idx]}
              </p>
            </div>
          )
        })}
    </Carousel>
  )
}

export { IndexCarousel }
