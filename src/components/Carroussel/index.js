import React,{useState, useEffect, useRef} from 'react';
import { nanoid } from 'nanoid'
import { Container, ContentCarroussel, Slide } from './styles';
import Arrows from '../Arrows';



function Carroussel({images, arrow, autoPlay, display = true }) {
   
    const getWidth = () => window.innerWidth; // diz o tamanho da tela do cliente;
    const imagesList = [...images];
    const key = ()=> nanoid();
    //desestruturei para preservar o arr original.

    const autoPlayRef = useRef();

    useEffect(
        ()=>{
            autoPlayRef.current = nextSlide
        }
    );
    
    useEffect(() => {
        const play = () => {
          autoPlayRef.current();
        }
    
        const interval = setInterval(play,( autoPlay * 1000))
        return () => clearInterval(interval)
      });

    const [ translateAndTransitions, setTranslateAndTransitions ] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0,
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
    <Container display = { display ? 'block' : 'none' }>
        <ContentCarroussel  
            width = {getWidth() * imagesList.length}
            translate = {translate}
            trasition = {transition}
        >
            {
                imagesList.map((img,index )=>( 
                    <Slide key={ `${index}_${key()}` } content={img} />
                ))
                   
            }
        </ContentCarroussel>
        <Arrows 
            direction={"right"}
             handleClick={prevSlide} 
             arrow ={ arrow }
        />
        <Arrows 
            direction={"left"}
             handleClick={nextSlide} 
             arrow ={ arrow }
         />
    </Container>
  )
}

export default Carroussel;