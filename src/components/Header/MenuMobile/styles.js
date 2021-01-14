import styled from 'styled-components';

export const ContainerMenuMobile = styled.div `
   display: none;
  @media (max-width: 900px){
    display: block;
    position: relative;
   /** */
  }
   
`;
export const ContentMenu = styled.div`

  @media (max-width: 900px){
   
    position: fixed;
    width: 0vw;
    height: 100vh;
    right: 0;
    top: 0;
    z-index: 1;
    transition: width 0.3s;
    background: var(--background-itens-menu);
    
    &.open {
        display: block;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: var(--background-itens-menu);
        right: 0;
        top: 0;
        z-index: 1;
       
    }
    > button{
        height: 60px;
        width: 60px;
        right: 0;
        //left: 2%;
        top: 0;
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

export const AnchorSections = styled.a`
    width: 80%;
    font-size: 1em;
    color: var(--c-header);
    font-weight: bold;
    margin: 5% 0;
    
    transition: color 0.2s;
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: black;
    &:hover &:focus{
      color: var(--efeito--hover);
      background: var(--c-header);
    }
    P{
      margin-left: 2%;
    }
`;