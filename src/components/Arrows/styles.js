import styled from 'styled-components';
  //component de estilo das setas
  
const ContainerArrow = styled.div`
  display: ${ props => props.arrow === true ? 'flex' : 'none'};
  position: absolute;
  top: ${props => props.top}%;
  ${ props => props.direction === 'right' ? 'right: 25px' : 'left: 25px'};
  height: 55px;
  width: 55px;
  justify-content: center;
  background: rgba( 217, 82, 4, 0.5 );
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  transform: rotate(${ props => props.direction === 'right' ? '-90deg' : '90deg' });
  &:hover{
        transform: scale(1.1) rotate(${ props => props.direction === 'right' ?
        '-90deg' : '90deg' 
        });
        background: rgba( 217, 82, 4, 0.9 );
    }
    img{
        transform: translateX(${ props => props.direction === 'left' ? 
        '-2' : '2' }px);
        transition: transform ease-in 0.5s;
        height: 80%;
        width: 80%;
        &:focus{
            outline: none;
        }
    }
`;

export default ContainerArrow;