import styled from 'styled-components';

export const ContainerForm = styled.div`
        height: 85vh;
        width: 40vw;
        border: 2px solid #3333;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 1% 0;
    h1{
        align-self: center;
    }
    form{
        height: 80%;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;

    }
    button{
        background: var(--c-header);
        display: flex;
        //flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 2% auto;
        height: 10%;
        width: 60%;
        border-radius: 25px;
        border: none;
        transition: all 0.2s;
        
        p{
            font-size: 1.5em;
            color: var(--c-font-mini-menus-header)
        }
        &:hover, :focus{
          p{
            color: var(--efeito--hover);
            transform: scale(1.1);
          }
          transform: scale(1.1);
          outline: none;
        }
       
    }
    @media (max-width: 900px){
        width: 100vw;
        
        
    }
`;
