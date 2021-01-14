import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
//images do carroussel
import imgCar1 from './assets/images/car-img1.png';
import imgCar2 from './assets/images/car-img2.png';
import imgCar3 from './assets/images/car-img3.png';
//imagens dos tipos de pratos no menu
import imgMenu1 from './assets/images/menu-img1.png';
import imgMenu2 from './assets/images/menu-img2.png';
import imgMenu3 from './assets/images/menu-img3.png';
import imgMenu4 from './assets/images/menu-img4.png';
import imgMenu5 from './assets/images/menu-img5.png';

const IMAGES_OF_CARROUSSEL = [
     imgCar1,
     imgCar2,
     imgCar3,
];
const CARDAPIO = [
    {
        id: 1,
        tipoDoPrato: 'tradicionais',
        image: `${imgMenu1}`,
        pratos: [
          {
            id: '1_1' ,
            nomeDoPato: 'calabresa',
            preço: 15
          }
        ]
    },
    {
        id: 2,
        tipoDoPrato: 'doces',
        image: `${imgMenu2}`,
        pratos: [
            {
              id: '1_2' ,
              nomeDoPato: 'feijoada',
              preço: 15
            }
          ]
    },
    {
        id: 3,
        tipoDoPrato: 'mini-pizzas',
        image: `${imgMenu3}`,
        pratos: [
            {
              id: '2_1' ,
              nomeDoPato: 'marguerita',
              preço: 15
            }
          ]
    },
    {
        id: 4,
        tipoDoPrato: 'sobremesas',
        image: `${imgMenu4}`,
        pratos: [
            {
              id: '3_1' ,
              nomeDoPato: 'feijoada',
              preço: 15
            }
          ]
    },
    {
        id: 5,
        tipoDoPrato: 'bebidas',
        image: `${imgMenu5}`,
        pratos: [
            {
              id: '4_1' ,
              nomeDoPato: 'coca-cola',
              preço: 15
            }
          ]

    },
];

ReactDOM.render( <App images={IMAGES_OF_CARROUSSEL} cardapio = { CARDAPIO } />, document.querySelector("#root")
)