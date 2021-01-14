import React from 'react';
import arrowpng from './../../assets/icons/white-arrow-48.png';
import ContainerArrow from './styles';

const Arrows = ({ direction, handleClick, arrow = true, top = 50}) => {
   

    return (
        <ContainerArrow 
            onClick={ handleClick } 
            arrow = { arrow } 
            direction = { direction }
            top = { top }  
        >
             {
                 direction === 'right' ? 
                 <img src={ arrowpng } alt= 'mover para direita'/> :
                 <img src={ arrowpng } alt= 'mover para esquerda'/>
             }
        </ContainerArrow>
    )
 };

 export default Arrows;