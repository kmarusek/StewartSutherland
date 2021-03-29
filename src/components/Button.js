import styled from 'styled-components'
import tw from 'twin.macro'

const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  ${props => props.size === 'large' ? tw`text-xs py-2 px-8` : tw`text-xs px-6 py-1 leading-loose hover:bg-dark` }
  ${tw`bg-white text-black uppercase`}
  ${props => props.variant === 'primary' && tw`bg-primary text-white hover:bg-dark`}
`

export { Button }
