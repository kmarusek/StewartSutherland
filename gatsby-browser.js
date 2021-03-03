/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/css/font.css'
import './src/css/styles.css'

export const shouldUpdateScroll = ({
  routerProps: { location, },
  getSavedScrollPosition,
}) => {
  const currentPosition = getSavedScrollPosition(location)

  // Don't update scroll position on certain pages
  if (location.pathname.startsWith('/products')) {
    return false
  }

  window.scrollTo(...(currentPosition || [0, 0,]))
}
