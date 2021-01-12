import React from 'react';

import { Container, NavMenu, AnchorSections } from './styles';
import logoCar from '../../assets/icons/rcarIcon.png';
import logoPrimary from '../../assets/icons/logoPR.png';

function Header() {
  return (
    <Container>
      <img src={logoPrimary} className="LogoPrimary" alt='quero Pizza. Faça seu pedido!'/>
      <NavMenu>
        <AnchorSections >
            <p>PROMOÇÕES</p>
        </AnchorSections>
        <AnchorSections >
          <p>LOCALIZAÇÃO</p>
        </AnchorSections>
        <AnchorSections >
          <p>CADASTRAR</p>
        </AnchorSections>
        <div className="styleOfDiv"/>
        <img src={logoCar} alt='finalizar pedido'/>
      </NavMenu>
    </Container>
  );
}

export default Header;