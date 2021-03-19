import React from 'react';

import { Container, Content, UserImage, ArtSuperior, ArtsBotton } from './styles';

function MobileHeader() {
  return (
      <Container>
          <ArtSuperior />
          <Content>
              <UserImage />
          </Content>
          <ArtsBotton />
      </Container>
  );
}

export default MobileHeader;