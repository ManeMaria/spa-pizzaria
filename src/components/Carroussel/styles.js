import styled from 'styled-components';

export const Container = styled.div`
    height: 70vh;
    width: 98.8vw;
    margin: 5vh auto;
    overflow: hidden; //o mais importante
    position: relative;

`;

export const ContentCarroussel = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${(props)=> props.width - 2}px;
    display: flex;

`;
export const Slide = styled.div`
   height: 100%;
   width: 100%;
   
   background-image: url(${props => props.content});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center; 
   

`;