import styled from 'styled-components';

export const Container = styled.footer`
    height: 18vh;
    width: 100vw;
    background: var(--c-header);
    display: flex;
    align-items: center;
    
    img{
        width: 100px;
        height: 100px;
    }
    @media ( max-width: 900px ){
      display: none;
    }

    
`;
export const Contente = styled.div`
    margin: auto 0;
`;