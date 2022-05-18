import React from 'react'
import { Column1, Column2, Heading, Img, ImgWrap, MissaoContainer, MissaoRow, MissaoWrapper, Subtitle, TextWrapper, TopLine } from './MissaoElements'
import missaoImage from '../../../Assets/Images/missaoImage.jpg';

const Missao = () => {
  return (
    <>
      <MissaoContainer id='missoes'>
        <MissaoWrapper>
          <MissaoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Missões</TopLine>
                <Heading>Nossas Missões</Heading>
                <Subtitle>Nossas missões consistem em ajudar o mercado a reduzir a emissão de CO2 (Dióxido de Carbono) na atmosfera e também fazer com que deficientes possam se locomover sem ter preocupações.</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={missaoImage}></Img>
              </ImgWrap>
            </Column2>
          </MissaoRow>
        </MissaoWrapper>
      </MissaoContainer>
    </>
  )
}

export default Missao