import React from 'react'
import { Heading, HeadingCard, QuemSomosCard, QuemSomosContainer, QuemSomosWrapper, Subtitle, SubtitleCard } from './QuemSomosElements'
import {BsTreeFill} from 'react-icons/bs';
import {GiArtificialIntelligence} from 'react-icons/gi';
import {MdDesignServices} from 'react-icons/md';

const QuemSomos = () => {
  return (
    <>
        <QuemSomosContainer id='quemSomos'>
            <Heading>Quem somos?</Heading>
            <Subtitle>Electron é uma marca de carros eletricos criada em 2022 para suprir a necessidade do mercado brasileiro de carros elétricos que antes não havia nenhuma marca nesse setor do mercado.</Subtitle>
            <QuemSomosWrapper>
                <QuemSomosCard>
                  <BsTreeFill size={52}/>
                  <HeadingCard>Sustentabilidade</HeadingCard>
                  <SubtitleCard>Nossa responsabilidade ambiental inicial é fazer com que os carros sejam 100% sustentáveis e ter 0 emissão de carbono.</SubtitleCard>
                </QuemSomosCard>
                <QuemSomosCard>
                  <GiArtificialIntelligence size={52}/>
                  <HeadingCard>Tecnologia</HeadingCard>
                  <SubtitleCard>A partir de algoritmos feito em open source nossos carros tem a função de direção autônoma do carro que pode levar a qualquer lugar.</SubtitleCard>
                </QuemSomosCard>
                <QuemSomosCard>
                  <MdDesignServices size={52}/>
                  <HeadingCard>Design</HeadingCard>
                  <SubtitleCard>Nossos carros tem um design que pretendem ser ergonomicos para que você possa fazer uma direção silenciosa.</SubtitleCard>
                </QuemSomosCard>
            </QuemSomosWrapper>
        </QuemSomosContainer>
    </>
  )
}

export default QuemSomos