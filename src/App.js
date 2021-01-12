import React from 'react';
import GlobalStyle from "./Styles/Global";
import Header from './components/Header';
import Footer from './components/Footer';
import Carroussel from './components/Carroussel'; 
import Cardapio from './components/Cardapio'; 

function App({images, cardapio}) {
     //console.log(images)
  return (
     <>
          <GlobalStyle />
          <Header />
          <Carroussel images = {images} arrows = {false}  autoPlay = {true}/>
          <Cardapio cardapio = { cardapio }/>
          <Footer />
     </>
    );
}

export default App;