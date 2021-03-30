import styled from 'styled-components'

export const HeroContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 12%;
  @media (min-width: 768px) {
    top: 10%;
  }
  @media (min-width: 1024px) {
    top: 15%;
  }
`

export const HeroImage = styled.img`
  height: 290px;
  @media (min-width: 768px) {
    height: 390px;
  }
  @media (min-width: 1024px) {
    height: auto;
  }
`

export const Title = styled.h1`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: ${props => !props.indexShrink ? '1.5rem' : '1.375rem'};
  -webkit-text-stroke-width: 0.25px;
  -webkit-text-stroke-color: black;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    -webkit-text-stroke-width: 0;
    -webkit-text-stroke-color: unset;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
  @media (min-width: 1280px) {
    font-size: 2.75rem;
  }
`

export const Border = styled.hr`
  height: 2.5px;
  width: 24rem;
  border-top-width: 0;
  @media (max-width: 740px){
    width: 12rem;
  }
  ${(props) => props.thick && 'height: 2.5px;'}
`

export const ImageSub = styled.img`
  max-height: 450px;
  @media (max-width: 768px) {
    max-height: 175px;
  }
  @media (max-width: 1024px) {
    max-height: 225px;
  }
`

export const ImageSub2 = styled.img`
  max-height: 450px;
  @media (max-width: 768px) {
    max-height: 175px;
  }
  @media (max-width: 1024px) {
    max-height: 225px;
  }
`