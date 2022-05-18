import styled from "styled-components";

export const QuemSomosContainer = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const QuemSomosWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    // padding: 0 50px;
    
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
    }
`;

export const Heading = styled.h1`
    text-transform: uppercase;
`;

export const Subtitle = styled.p`
    opacity: 80%;
    font-size: 20px;
    max-width: 550px;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 15px;
`;

export const QuemSomosCard = styled.div`
    background: #fff;
    padding: 15px 30px;
    border-radius: 5px;
    color: #009343;
    text-align: center;
    transition: 0.5s all ease;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`;

export const HeadingCard = styled.h2`

`;

export const SubtitleCard = styled.p`
    opacity: 85%;
    max-width: 250px;
`;