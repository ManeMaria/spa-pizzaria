import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import { Container, Content, ContentItens, Images } from './styles';
import Arrows from '../Arrows';


function Cardapio({cardapio}) {
    const cardapioList = [...cardapio];
    const key = ()=> nanoid();
    const [ translateAndTransitions, setTranslateAndTransitions ] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.5,
    });
    
    const { activeIndex, translate, transition} = translateAndTransitions;
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
        <Content
        translate = {translate}
        transition = {transition}
    >
       
            {cardapioList.map( item =>(
                <ContentItens 
                    key = {`${item.id}_${key()}`}
                    
                >
                   <Images src= {item.image} alt= 'cardapio do dia'/>
                    <button type = 'button'>
                        <p>{item.tipoDoPrato}</p>
                    </button>
                </ContentItens>
            ))}
        
    </Content>
    <Arrows 
            direction={"right"}
             handleClick={prevSlide}
             top = {35}
         />
        <Arrows 
            direction={"left"} 
            handleClick={nextSlide} 
            top = {35}
         />
   </Container>
  )
}

export default Cardapio;