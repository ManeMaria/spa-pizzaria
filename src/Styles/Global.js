import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
      :root{
        --c-header: #D95204;
        --c-font-mini-menus-header: #FADAA5;
        --background-global: #E5E5E5;
        --efeito--hover: #fff;
        --background-itens-menu: #FADAA5
      }
    
    html, body, #root{
        
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        background: var(--background-global);
        //cores da page.
        
    }

    input, button {
        font-family: 'Roboto', sans-serif;
    }

    button, a {
        cursor: pointer;
    }
`
export default GlobalStyle;