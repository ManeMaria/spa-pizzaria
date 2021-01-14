import React from 'react';
import { Container } from './styles';

function Animation({checked}) {
  return (
    <Container >
        <input 
            type='checkbox' 
            id = 'animation'
            checked={checked}
            onChange= {()=>checked}
        /> 
        {/*o react estava reclamando sobre a utilização da propriedade checked sem o 
            onChange, criei um modelo de estado, porém não consegui setar o estado, apesar de todos os valores estarem "chegando".
        */}
        <label className='labell' htmlFor= 'animation'></label>
        <span></span>
    </Container>

  );
}

export default Animation;