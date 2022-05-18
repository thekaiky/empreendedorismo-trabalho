import React from 'react'
import { BtnWrap, Button, Column1, Column2, Heading, HeroContainer, HeroRow, HeroWrapper, Img, ImgWrap, Subtitle, TextWrapper, TopLine } from './HeroElements'
import heroImage from '../../../Assets/Images/heroImage.jpg';

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <HeroRow>
            <Column1>
              <TextWrapper>
                <Heading>Conectando você a novos caminhos.</Heading>
                {/* <Subtitle>Electron é uma marca de carros eletricos criada em 2022 para suprir a necessidade do mercado brasileiro de carros elétricos que antes não havia nenhuma marca nesse setor do mercado.</Subtitle> */}
              </TextWrapper>
              <BtnWrap>
                <Button to={'quemSomos'}>Descubra a Electron</Button>
              </BtnWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={heroImage}></Img>
              </ImgWrap>
            </Column2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  )
}

export default Hero