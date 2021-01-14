import React from 'react';
import { useForm } from 'react-hook-form';
import Imputs from './../Imputs';
import { ContainerForm } from './styles';

function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmite = (data) => {console.log(data)};
  return (
    <ContainerForm>
      <h1>CADASTRO</h1>
      <form onSubmit={handleSubmit(onSubmite)}> 
          <Imputs name={'NOME'} type={'text'} register={register} />
          <Imputs name={'TELEFONE'} type={'text'} register={register} />
          <Imputs name={'ENDEREÇO'} type={'tel'} register={register} />
          <button type='submit'>
            <p>ENVIAR</p>
          </button>
      </form>
    </ContainerForm>
  );
}

export default Form;