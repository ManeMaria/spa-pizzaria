import React, {useState} from 'react';
import Animation from './Animation';
import { ContainerMenuMobile, ContentMenu, AnchorSections} from './styles'; //, AnchorSections
function MenuMobile() {

    const [ animation, setAnimation ] = useState(false)
    const openAndCloseMenu = (ev) =>{
        //o classList.toggle já identifica se é para fechar, se estiver aberto
        const openMenuAndClose = document.querySelector("#menu");
        const animationOnOff = openMenuAndClose.classList.toggle('open');
        ev.stopPropagation();
        setAnimation(animationOnOff)
    }   

   /**
    * 
    * 
    *  <AnchorSections>
            <p>PROMOÇÕES</p>
        </AnchorSections>
        <AnchorSections>
            <p>LOCALIZAÇÃO</p>
        </AnchorSections>
        <AnchorSections>
            <p>CADASTRAR</p>
        </AnchorSections>
       
    */
  return (
   <ContainerMenuMobile>
      
    <ContentMenu id = 'menu' > 
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