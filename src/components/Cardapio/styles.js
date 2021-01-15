import styled from 'styled-components';
export  const Container = styled.div `
  width: 100vw;
  height: 60vh;
  margin: 20vh auto;
  position: relative;
  @media (max-width: 900px){
    margin: 5vh auto;
    width: 100vw;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  @media (max-width: 900px){
    display: inline-block;
    grid-template-columns: 1fr;
    overflow-y: scroll;
    //margin: 2% auto;
  }
  
`; 
export const ContentItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 1%;
    border-radius: 25px;
    button{
      background: var(--c-header);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 2% auto;
        width: 60%;
        border-radius: 25px;
        border: none;
        transition: all 0.2s;
        
        p{
            font-size: 1em;
            color: var(--c-font-mini-menus-header)
        }
        &:hover{
          p{
            color: var(--efeito--hover);
          }
          transform: scale(1.1);
        }
    }
    @media (max-width: 900px){
      width: 100%;
      margin: 5vh 0;
    }
`;
export const Images = styled.img`
    background: var(--background-itens-menu);
    height: 100%;
    width:  100%;
    border-radius: 25px;
    @media (max-width: 900px){
      width: 80vw;
      
    }

`;