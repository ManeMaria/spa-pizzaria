import styled from 'styled-components';

export const Container = styled.header`
    z-index: 1;
    height: 20vh;
    min-width: 400px;
    background: var(--c-header);
    display: flex;
    align-items: center;
    justify-content: space-between;

    //para fixar na tela
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;

    .LogoPrimary{
        width: 100px;
        height: 100px;
    }

`;
export const NavMenu = styled.div`
   display: flex;
   min-width: 32%;
   align-items: center;
   
   
   img {
       height: 20px; 
       width: 27px;
       margin: 0.5vw;
       transition: all 0.2s;
       &:hover{
        background: #ae4203;
        transform: scale(1.1)
    }
   
    }
    .styleOfDiv {
        &::after {
        content: "|";
        background: var(--c-font-mini-menus-header);
        color: var(--c-font-mini-menus-header);
        height: 13px;
        width: 2px;  
        }
        
    }
   
`;
export const AnchorSections = styled.a`
    font-size: 1em;
    color: var(--c-font-mini-menus-header);
    margin: 0.5vw;
    transition: color 0.2s;
    &:hover{
        color: var(--efeito--hover);
    }
   
`
