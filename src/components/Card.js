import styled from 'styled-components'
import tw from 'twin.macro'

const Card = styled.div`
  ${tw`w-full h-full bg-gray-200 p-4 flex justify-center items-center cursor-pointer`}
  ${props => props.selected && tw`bg-gray-500`}
  -webkit-transition: background-color 250ms ease-out 100ms;
  -moz-transition: background-color 250ms ease-out 100ms;
  -o-transition: background-color 250ms ease-out 100ms;
  transition: background-color 250ms ease-out 100ms;
`

export { Card }
