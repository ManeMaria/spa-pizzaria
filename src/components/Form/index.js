import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Imputs from './../Imputs';
import { ContainerForm } from './styles';

function Form() {
  const { register, handleSubmit } = useForm();
  const notify = {
    success: (message) => toast.success(message,{position: 'top-center'}),
    error: (message) => toast.error(message,{position: 'top-center'})
  };

  const resetInputs = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(( inp )=>{
      inp.value = " "
    })
  };
  const onSubmite = (data) => {
    try{
      console.log(data); //aqui ficará a requisição de POST 
      resetInputs();
      notify.success('dados enviados!');
    }catch(err){
      notify.error(`Opa, deu este errinho ${err}`);
    }
  };
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