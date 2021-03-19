import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
const GlobalStyle = createGlobalStyle`
      :root{
        --c-header: #D95204;
        --c-font-mini-menus-header: #FADAA5;
        --background-global: #FBB040;
        --efeito--hover: #fff;
        --background-itens-menu: #FADAA5;
        --menu-color: #FED496;

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

    body{
        position: relative;
    }

    input, button {
        font-family: 'Roboto', sans-serif;
    }

    button, a {
        cursor: pointer;
    }
`
export default GlobalStyle;