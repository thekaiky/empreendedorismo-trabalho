import React from 'react'
import { Column1, Column2, Heading, Img, ImgWrap, Subtitle, TopLine, VisaoContainer, VisaoRow, VisaoWrapper } from './VisaoElements'
import visaoImage from '../../../Assets/Images/visaoImage.jpg';

const Visao = () => {
  return (
    <>
        <VisaoContainer id='visao'>
            <VisaoWrapper>
                <VisaoRow>
                  <Column1>
                    <ImgWrap>
                        <Img src={visaoImage}></Img>
                    </ImgWrap>
                  </Column1>
                  <Column2>
                      <TopLine>Visão</TopLine>
                      <Heading>Nossa Visão</Heading>
                      <Subtitle>A Electron quer chegar a ser o maior IPO de uma montadora elétrica mas antes disso ser empresa de referência, reconhecida como a melhor opção por clientes, colaboradores e fornecedores devido à qualidade de nossos produtos.</Subtitle>
                  </Column2>
                </VisaoRow>
            </VisaoWrapper>
        </VisaoContainer>
    </>
  )
}

export default Visao