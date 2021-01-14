import React from 'react';

import { ContainerImputs , Label } from './styles';

function Imputs({type, name, register}) {

    console.log(register)
  return (
    
        <Label >
            <p>{name}</p>
            
            <ContainerImputs 
                type={type}
                name={name}
                ref={register}
                >
            </ContainerImputs >
        </Label>
      
  );
}

export default Imputs;