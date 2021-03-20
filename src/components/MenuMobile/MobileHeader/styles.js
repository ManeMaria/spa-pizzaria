import styled from 'styled-components'
import menuArt from './../../../assets/images/art-superior-menu-mobile.svg'
import userImage from './../../../assets/images/user-menu-mobile.svg'; 
import superiorArtBackgroundMenuMobile from './../../../assets/images/art-superior-complemento.svg';
import artComplemento1 from './../../../assets/images/complemento-1.svg';
import artComplemento2 from './../../../assets/images/complemento-2.svg';
import artComplemento3 from './../../../assets/images/complemento-3.svg';


export const Container = styled.div`
    width: 100vw;
    height: 20vh;
`;
export const Content = styled.div`
    width: 400px;
    height: 175px;
    background-image: url(${menuArt});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center top;
    position: relative;
    

`;
export const UserImage = styled.div`
    width: 68px;
    height: 68px;
    background-color: var(--menu-color);
    background-image: url(${userImage});
    background-repeat: no-repeat;
    background-size: 55% 110%;
    background-position: center;
    border-radius: 50%;
    position: absolute;
    top: 12%;
    left: 6%; 
    

`;
export const ArtSuperior = styled.div`
    
    background-image: url(${superiorArtBackgroundMenuMobile});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;
    width: 130px;
    height: 130px;
    

`;

export const ArtsBotton = styled.div`
    
    background-image: url(${artComplemento1});
    background-repeat: no-repeat;
    background-position:  center left;
    background-size: contain;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 200px;

    &::before{
        content: "";
        background-image: url(${artComplemento3});
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: contain;
        position: absolute;
        bottom: 0;
        left: 25%;
        width: 130px;
        height: 130px;
    }

    &::after{
        content: "";
        background-image: url(${artComplemento2});
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: contain;
        position: absolute;
        bottom: 0%;
        left: 35%;
        width: 190px;
        height: 190px;
        align-self: end;
    }
    

`;