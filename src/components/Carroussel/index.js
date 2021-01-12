import React,{useState, useEffect, useRef} from 'react';
import { Container, ContentCarroussel, Slide } from './styles';
import styled from 'styled-components';
import arrow from '../../assets/icons/white-arrow-48.png';

const Arrow = ({ direction, handleClick, arrows}) => {
   
   //component de estilo das setas
   const ContainerArrow = styled.div`
        display: ${arrows === true ? 'flex' : 'none'};
        position: absolute;
        top: 50%;
        ${ direction === 'right' ? 'right: 25px' : 'left: 25px'};
        height: 55px;
        width: 55px;
        justify-content: center;
        background: rgba( 0, 0, 0, 0.5 );
        border-radius: 50%;
        cursor: pointer;
        align-items: center;
        transition: transform ease-in 0.1s;
        transform: rotate(${ direction === 'right' ? '-90deg' : '90deg' });
        &:hover{
           transform: scale(1.1), rotate(${ direction === 'right' ? '-90deg' : '90deg' });;
            //transform: rotate(${ direction === 'right' ? '-90deg' : '90deg' });
        }
        img{
            transform: translateX(${ direction === 'left' ? '-2' : '2' }px);
            transition: transform ease-in 0.5s;
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

function Carroussel({images, arrows = true, autoPlay }) {
    const autoPLayPermission = autoPlay === true ? 2 : 'undefine';
    const getWidth = () => window.innerWidth; // diz o tamanho da tela do cliente;
    const imagesList = [...images];
    //desestruturei para preservar o arr original.

    const autoPlayRef = useRef();

    useEffect(
        ()=>{
            autoPlayRef.current = nextSlide
        }
    );
    
    useEffect(() => {
        const play = () => {
          autoPlayRef.current()
          console.log(autoPlayRef.current())
        }
    
        const interval = setInterval(play,( autoPLayPermission * 1000))
        return () => clearInterval(interval)
      }, []);

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
                translate: (imagesList.length - 1) * getWidth(),
               activeIndex: imagesList.length -1,     
            })
        };

        setTranslateAndTransitions({
            ...translateAndTransitions,
            translate: (activeIndex - 1) * getWidth(),
            activeIndex: activeIndex -1,     
        })
     };
    const nextSlide = () => { 
        if(activeIndex === imagesList.length - 1){
            return setTranslateAndTransitions({
                ...translateAndTransitions,
                translate: 0,
               activeIndex: 0,
            })
        };

        setTranslateAndTransitions({
            ...translateAndTransitions,
           activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth(),
        })
     };

  return(
    <Container>
        <ContentCarroussel  
            width = {getWidth() * imagesList.length}
            translate = {translate}
            trasition = {transition}
        >
            {
                imagesList.map((img,index )=>( 
                    <Slide key={ index } content={img} />
                ))
                   
            }
        </ContentCarroussel>
        <Arrow direction={"right"} handleClick={prevSlide} arrows={ arrows }/>
        <Arrow direction={"left"} handleClick={nextSlide} arrows={ arrows } />
    </Container>
  )
}

export default Carroussel;