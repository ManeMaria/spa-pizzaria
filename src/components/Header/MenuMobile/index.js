import React, {useState, useRef, useEffect} from 'react';
import Animation from './Animation';
import { ContainerMenuMobile, ContentMenu, AnchorSections} from './styles'; //, AnchorSections
function MenuMobile() {

    const [ animation, setAnimation ] = useState(false)
    const openAndCloseMenu = (ev) =>{
        //o classList.toggle já identifica se é para fechar, se estiver aberto
        ev.stopPropagation();
        const openMenuAndClose = document.querySelector("#menu");
        const animationOnOff = openMenuAndClose.classList.toggle('open');
        setAnimation(animationOnOff)
    }   

    const ref = useRef();
    const OutSideClickTheBox = (r, callback) => {
        /*através do useEffect se cria um evento de click e seu desmonte. Por meio do evento, chama
        *   o handleClick que averigua se o click foi num component  filho, se não,     * *chama a função de retorno.
        */
        const handleClick = (e) =>{
            if(r.current && !ref.current.contains(e.target)){
                callback();
            }
        }

        useEffect(()=>{
            document.addEventListener('click', handleClick );
            
            return ()=> {
                document.removeEventListener('click', handleClick );
            };
        });
    };

    OutSideClickTheBox(ref, ()=>{
        //imita a mesma função do openAndCloseMenu, só que apenas fecha.
        const openMenuAndClose = document.querySelector("#menu");
        const animationOnOff = openMenuAndClose.classList.remove('open');
        setAnimation(animationOnOff);
    })
  return (
   <ContainerMenuMobile>
      s
    <ContentMenu id = 'menu' ref={ref}> 
        <button type='button' onClick={(e)  => openAndCloseMenu(e)}>
                <Animation checked={animation} />
            </button>
        {/*apesar de saber que os estilos de componentes não precisa de ids, inclui neste, pois achei mais fácil para terceiros lerem. */}
       
        <AnchorSections>
            <p>PROMOÇÕES</p>
        </AnchorSections>
        <AnchorSections>
            <p>LOCALIZAÇÃO</p>
        </AnchorSections>
        <AnchorSections>
            <p>CADASTRAR</p>
        </AnchorSections>
      
    </ContentMenu> 
       
   </ContainerMenuMobile>
  );
}

export default MenuMobile;