import styled from 'styled-components';

export const ContainerMenuMobile = styled.div `
   display: none;
  @media (max-width: 900px){
    display: block;
    position: relative;
    width: 0vw;
   
  }
   
`;
export const ContentMenu = styled.div`

  @media (max-width: 900px){
   
      position: fixed;
      width: 80%;
      height: 100vh;
      left: 0;
      top: 0;
      z-index: 1;
      transition: all 0.3s;
      background: var(--background-itens-menu);
      transform: translateX(-100%);
    
    &.open {
        display: block;
        position: fixed;
        width: 80%;
        height: 100vh;
        background: var(--background-itens-menu);
        left: 0;
        top: 0;
        z-index: 1;
        transform: translateX(0%);
      }
    
    > button{
        height: 50px;
        width: 50px;
        left: 100%;
        top: 2%;
        z-index: 1;
        position: absolute;
        background: var(--c-header);
        border: none;
        &:focus{
            outline: none;
        }
      } 
  }

`;

export const  AnchorSections = styled.a`
   // position: sticky;
    //z-index: 1;
    
    width: 100%;
    height: 100%;
    font-size: 1.5em;
    color: var(--c-header);
    font-weight: bold;
    margin: 5% auto;
    
    transition: color 0.2s;
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: black;
    
   p{
     margin: 5%;
   }
    
`;