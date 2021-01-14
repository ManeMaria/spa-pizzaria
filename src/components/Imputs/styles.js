import styled from 'styled-components';

export const Label = styled.label`
    display: flex;
    width:  90%;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    margin: 2% auto;
  p{
      align-self: center;
      font-size: 1em;
      font-weight: bold;
  }
`;
export const ContainerImputs  = styled.input`
    width: 100%;
    height: 100%;
    padding: 3% 0;
    background: var(--c-header);
    color: var(--efeito--hover);
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    transition: all 0.2s;
    &:focus{
        outline: none;
        transform: scaleY(1.1);
    }
    @media (max-width: 900px){
        height: 30%;
    }
`;
