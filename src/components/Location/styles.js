import styled from 'styled-components';

export const Container = styled.div`
    height: 85vh;
    width: 40vw;
    border-radius: 15px;
    background: var(--c-header);
    margin: 2%;
    
    @media (max-width: 900px){
      display: none;
    }
`;
