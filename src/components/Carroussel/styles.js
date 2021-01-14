import styled from 'styled-components';

export const Container = styled.div`
    display: ${props => props.display};
    height: 70vh;
    width: 98.5vw;
    margin: 1vh auto;
    overflow: hidden; //o mais importante
    position: relative;

    @media (max-width: 900px){
        height: 30vh;
        width: 100vw;
    }

`;

export const ContentCarroussel = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${(props)=> props.width - 15}px;
    display: flex;

`;
export const Slide = styled.div`
   height: 100%;
   width: 100%;
   
   background-image: url(${props => props.content});
   background-size: 100%;
   background-repeat: no-repeat;
   background-position: center; 
   

`;