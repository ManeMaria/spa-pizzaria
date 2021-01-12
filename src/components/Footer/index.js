import React from 'react';
import logoPrimary from './../../assets/icons/logoPR.png';
import { Container, Contente } from './styles';

function Footer() {
  return (
      <Container>
          <img src={logoPrimary} alt="final do nosso site."/>
          <Contente/>
      </Container>
  );
}

export default Footer;