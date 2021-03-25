import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

export const HeroContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 7%;
  @media (min-width: 768px) {
    top: 30%;
    left: 15%
  }
`
export const Title = styled.h1`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 1.625rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 3rem;
  }
  ${tw`tracking-tight`}
`