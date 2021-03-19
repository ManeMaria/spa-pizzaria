import React from 'react';
import GlobalStyle from "./Styles/Global";
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';
import Carroussel from './components/Carroussel'; 
import Cardapio from './components/Cardapio';  
import Form from './components/Form';
import Location from './components/Location';
import MobileHeader from './components/MenuMobile/MobileHeader';

const Div = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     align-items: center;
     justify-content: center;

     @media (max-width: 900px){

          display: flex;
          height: 100%;
          width: 100vw;
          flex-direction: column;
          justify-content: center; 
     }

`;

function App({images, cardapio}) {
     
     const getWidth = () => window.innerWidth;
     //pergunto o tamanho da tela e defino se o segundo carrossel irá aparecer.
  return (
     <>
          {/*
               tanto o component globalstyle, como o toastContainer são de estilos
          */}
          <GlobalStyle />
          <ToastContainer />

          <Header />
          {getWidth() < 550? <MobileHeader />: false}
          <Carroussel images = {images} arrow = {false}  autoPlay = {3.5}/>
          <Cardapio cardapio = {cardapio}/>
          {/**procurar outra solução */}
          <Div>
               <Form />
               <Location />
          </Div>
          
          <Footer />
     </>
    );
}

export default App;