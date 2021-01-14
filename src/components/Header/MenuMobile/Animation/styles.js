import styled from 'styled-components';

export const Container = styled.div`
    width: 50px;
    height: 50px;     
    position: relative;
    z-index: -1;
   
    input{
        display: none;

        &:checked ~ span {
            background-color: transparent;
        }
        &:checked ~ span:before {
           transform: translate(0px, -20px) rotate(-45deg);
        }
        &:checked ~ span:after {
           transform: translate(0px, 20px) rotate(45deg);
        }
    }
    
  
    label{
       //z-index: 1;
       background-color: transparent;
        width: 100%;
        height: 100%;
        transition: all 0.3s;
        position: absolute;
        left: 0px;
        
    }

    span{
       
        opacity: 1;
        position: absolute;
        top: 22px;
        width: 50px;
        height: 8px;
        transition: all 0.3s;
        background: #fff;
        left: 0px;
        
        &:before{
            content: ' ';
            position: absolute;
            bottom: -20px;
            width: 50px;
            height: 8px;
            transition: all 0.3s;
            background: #fff;
            left: 0px;
        }

        &:after{
            content: ' ';
            position: absolute;
            top: -20px;
            width: 50px;
            height: 8px;
            transition: all 0.3s;
            background: #fff;
            left: 0px;
        }
    }
`;
