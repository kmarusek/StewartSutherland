import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import JSONCategories from '../content/pages/products.json'
import { Border } from '../components/IndexPage'
import { HeroContainer, Title } from '../components/SubIndex'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { Footer } from '../components/Footer'
import { Card } from '../components/Card'
import { ProductTable } from '../components/Table'
import qs from 'query-string'
import { CardCollapsible } from '../components/CardCollapsible'
import fileSSCatalogue from '../assets/pdf/SSCatalogue.pdf'
import { Message } from '../components/MessageBar'
import '../css/products.css'

const ProductItems = styled.div`
  min-height: 315px;
  ${tw`mb-6`}
`
const CardWrapper = styled.div`
  ${tw``}
  flex-wrap: wrap;
`

const Products = ({ location, }) => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "222-Products-Banner-original.jpg" }) {
        childImageSharp {
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "222-Products-Banner-original.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid (quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      category_1: file(relativePath: { eq: "240-Baker-Deli-Grocery-Image.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      category_2: file(relativePath: { eq: "Fast-Food-Concessions.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      category_3: file(relativePath: { eq: "Pizza-Subs-Takeout.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      category_4: file(relativePath: { eq: "Silverware.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const onSetCategoryId = (_categoryId) => {
    navigate(`/products?category=${_categoryId}`)
  }
  const queries = qs.parse(location.search)
  let categoryId = 0
  try {
    categoryId = parseInt(queries.category, 0)
  } catch (error) {
    console.log('error: ',error)
  }
  const productItemsData = JSONCategories.product_items.find(itm => itm.pid === categoryId)

  return(
    <Layout>
      <div className='relative z-0'>
        <div className='md:hidden'>
          <Img
            fluid={data.mobileImage.childImageSharp.fluid} 
            className='-mt-12 md:-mt-6 md:mb-0 w-full' alt='hero-image' 
            style={{height: 300,}}
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
          <Title className='inline-block'>
            Products 
            <Border thick className='w-2/3 mt-2 bg-primary' />
          </Title>
          <div className='max-w-md xl:max-w-2xl'>
            <p className='xl:block mt-4 open-sans text-gray-100 tracking-wide text-base md:text-base'>
            We offer a wide range of stock and custom designed products.  Our graphics department and production team can help design products specifically suited to your needs
            </p>
          </div>
        </HeroContainer>
        
        
      </div>
      <div className='container p-0 xl:p-6 lg:p-6 md:py-24  '>
        {/* <div className='flex justify-center lg:justify-end lg:mr-6 py-2'>
          <a href={fileSSCatalogue} download className='text-right mb-2 bg-gray-200 p-2 rounded'>Download Catalogue</a>
        </div> */}
        <div>
          {JSONCategories.categories.map((category, idx) => {
            // console.log('categoryId: ',categoryId)
            // console.log('product_ids: ',category.products.map(p => p.id))
            // console.log('render detail: ',category.products.map(p => p.id).includes(categoryId))

            return (
              <div className='' key={category.id}>
                <div className='md:mx-auto lg:mx-0 lg:w-full mt-20 product-wrapper'>
                <h3 className='text-center lg:text-left text-3xl text-white product-title'>{category.name}
                <Border thick className='w-1/3 mt-2 bg-primary' />
                </h3>
                  <Img fluid={data[`category_${idx+1}`].childImageSharp.fluid}
                    alt='hero-image'
                    className=' sm:rounded-none md:rounded xl:rounded lg:rounded  product-hero opacity-80'
                  />
                </div>
                <CardWrapper className='py-4 flex justify-center lg:justify-between'>
                  {category.products.map(p => (
                    <div key={p.id} className='mt-4 mx-auto xl:mt-0 lg:mx-0 w-48 h-24 lg:mr-0'>
                      <Card role='button' onClick={() => onSetCategoryId(p.id)} selected={categoryId === p.id}>
                        <p className='text-center font-semibold'>{p.name}</p>
                      </Card>
                    </div>
                  ))}
                </CardWrapper>
                {category.products.map(p => p.id).includes(categoryId) && ( 
                  <ProductItems className='w-full mx-auto'>
                    <h3 className='text-center my-4 text-xl'>{productItemsData.description}</h3>
                    <ProductTable data={productItemsData.items} />
                    <div className='mt-6 max-w-4xl mx-auto'>
                      <CardCollapsible sectionTitle='Glossary of Terms'>
                        <div className='p-2 px-4 bg-gray-200'>
                          <ul>
                            {JSONCategories.glossary_of_terms.map(({title, content,}) => (
                              <li className='mb-4' key={title}>
                                <span className='font-semibold'>{title}</span>: <span className='italic'>{content}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardCollapsible>
                    </div>
                  </ProductItems> 
                )}
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Products
