import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 60vh;
    margin: 20vh auto;
    display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`; 
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 1%;
    button{
      background: var(--c-header);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 2% auto;
        width: 60%;
        border-radius: 25px;
        border: none;
        
        p{
            font-size: 1em;
            color: var(--c-font-mini-menus-header)
        }
    }
`;
export const Images = styled.img`
    height: 85%;
    width:  100%;
    border-radius: 25px;
`;