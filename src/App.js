import React from 'react';
import GlobalStyle from "./Styles/Global";
import Header from './components/Header';
import Footer from './components/Footer';
import Carroussel from './components/Carroussel'; 
import Cardapio from './components/Cardapio'; 
import Location from './components/Location'; 
import Form from './components/Form'; 

function App({images, cardapio}) {
     //console.log(images)

  return (
     <>
          <GlobalStyle />
          <Header />
          <Carroussel images = {images} arrow = {false}  autoPlay = {3.5}/>
          <Cardapio cardapio = { cardapio }/>
          <Carroussel images = {images} arrow = {false}  autoPlay = {3.5}/>
          {/**procurar outra solução */}
          <div
               style={{
                    width: '100vw',
                    height:'60vw',
                    display: 'flex',
                    alignAtens: 'center',
                    justifyContent: 'space-around',
                    margin: '2% auto'
          
               }}
          >
               <Form /> 
               <Location />
          </div>
          <Footer />
     </>
    );
}

export default App;