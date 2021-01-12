import React, {useState} from 'react';
import styled from 'styled-components';
import { Container, Content, Images } from './styles';
import arrow from '../../assets/icons/white-arrow-48.png';

const Arrow = ({ direction, handleClick, arrows = true }) => {
   
    //component de estilo das setas
    const ContainerArrow = styled.div`
         display: ${arrows === true ? 'flex' : 'none'};
         position: absolute;
         top: 45%;
         ${ direction === 'right' ? 'right: 25px' : 'left: 25px'};
         height: 45px;
         width: 45px;
         justify-content: center;
         background: rgba( 217, 82, 4, 0.5 );
         border-radius: 50%;
         cursor: pointer;
         align-items: center;
         transition: background transform ease-in 0.1s;
         transform: rotate(${ direction === 'right' ? '-90deg' : '90deg' });
         &:hover{
            transform: scale(1.1) rotate(${ direction === 'right' ? '-90deg' : '90deg' });
            background: rgba( 217, 82, 4, 0.9 );
             //transform: rotate(${ direction === 'right' ? '-90deg' : '90deg' });
         }
         img{
             transform: translateX(${ direction === 'left' ? '-2' : '2' }px);
             transition: transform ease-in 0.5s;
             height: 80%;
                width: 80%;
             &:focus{
                 outline: none;
             }
         }
     `;
     
     return (
        <ContainerArrow onClick={ handleClick } >
             {
                 direction === 'right' ? 
                 <img src={arrow} alt= 'mover para direita'/> :
                 <img src={arrow} alt= 'mover para esquerda'/>
             }
        </ContainerArrow>
     )
 };

function Cardapio({cardapio}) {
    const cardapioList = [...cardapio];
    const [ translateAndTransitions, setTranslateAndTransitions ] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 1,
    });
    
    const { activeIndex, translate, transition, } = translateAndTransitions;
    //guardei no state e separei para ficar mais legível;

    const prevSlide = () => { 
        if(activeIndex === 0 ){
            return setTranslateAndTransitions({
                ...translateAndTransitions,
                translate: (cardapioList.length - 1) * 180,
               activeIndex: cardapioList.length -1,     
            })
        };

        setTranslateAndTransitions({
            ...translateAndTransitions,
            translate: (activeIndex - 1) * 180,
            activeIndex: activeIndex -1,     
        })
        
     };
    const nextSlide = () => { 
       if(activeIndex === cardapioList.length - 1){
            return setTranslateAndTransitions({
                ...translateAndTransitions,
                translate: 0,
               activeIndex: 0,
            })
        };

        setTranslateAndTransitions({
            ...translateAndTransitions,
           activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * 180,
        })
     };
     
  return (
    <Container>
       
            {cardapioList.map( item =>(
                <Content key = {item.id}>
                   <Images src= {item.image} alt= 'cardapio do dia'/>
                    <button type = 'button'>
                        <p>{item.tipoDoPrato}</p>
                    </button>
                </Content>
            ))}
        <Arrow direction={"right"} handleClick={prevSlide}/>
        <Arrow direction={"left"} handleClick={nextSlide} />
    </Container>
  )
}

export default Cardapio;