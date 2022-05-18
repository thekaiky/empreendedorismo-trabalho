import React from 'react'
import { Heading, HeadingCard, ResponsabilidadesCard, ResponsabilidadesContainer, ResponsabilidadesWrapper, Subtitle, SubtitleCard } from './ResponsabilidadesElements'
import {BsTreeFill} from 'react-icons/bs';
import {GiArtificialIntelligence} from 'react-icons/gi';
import {MdOutlineAttachMoney} from 'react-icons/md';
import {BsPeopleFill} from 'react-icons/bs';

const Responsabilidades = () => {
  return (
    <>
        <ResponsabilidadesContainer id='responsabilidades'>
            <Heading>Nossas Responsabilidades</Heading>
            {/* <Subtitle>Electron é uma marca de carros eletricos criada em 2022 para suprir a necessidade do mercado brasileiro de carros elétricos que antes não havia nenhuma marca nesse setor do mercado.</Subtitle> */}
            <ResponsabilidadesWrapper>
                <ResponsabilidadesCard>
                  <BsTreeFill size={52}/>
                  <HeadingCard>Ambiental</HeadingCard>
                  <SubtitleCard>Nossa responsabilidade ambiental inicial é fazer com que os carros sejam 100% sustentáveis e ter 0 emissão de carbono.</SubtitleCard>
                </ResponsabilidadesCard>
                <ResponsabilidadesCard>
                  <BsPeopleFill size={52}/>
                  <HeadingCard>Social</HeadingCard>
                  <SubtitleCard>A Electron se responsabiliza ao criar produtos sustentáveis, de fácil uso aos seus cliente e acessível a todos.</SubtitleCard>
                </ResponsabilidadesCard>
                <ResponsabilidadesCard>
                  <MdOutlineAttachMoney size={52}/>
                  <HeadingCard>Econômica</HeadingCard>
                  <SubtitleCard>Buscamos se desenvolver sustentávelmente buscando ao mesmo tempo tornando isso uma geração de empregos e renda.</SubtitleCard>
                </ResponsabilidadesCard>
            </ResponsabilidadesWrapper>
        </ResponsabilidadesContainer>
    </>
  )
}

export default Responsabilidades