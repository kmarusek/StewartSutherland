import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'

const Layout = ({ children, title, }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={title || data.site.siteMetadata.title}
        >
          {/* eslint-disable-next-line */}
          <script async src='https://www.googletagmanager.com/gtag/js?id=UA-175978479-1'></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-175978479-1');
            `}
          </script>
          <meta name='description' content='Food Service Bags and Wraps - Quick Serve, Grocery, Bakery, Deli, Pharmacy, Fast Food, Concession' />
          <meta property='og:site_name' content='Stewart Sutherland, Inc' />
          <meta
            name='og:image'
            content='https://res.cloudinary.com/ddfez1a0x/image/upload/c_scale,q_100,w_400/v1588734014/stewart-suntherland/SS-Logo_2020.jpg'
          />
          <html lang='en' />
        </Helmet>
        <Header siteTitle={title || data.site.siteMetadata.title} />
        <div className=''>{children}</div>
      </>
    )}
  />
)

export default Layout
