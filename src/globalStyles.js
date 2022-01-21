import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    /* colors */
    --darkGrey: #1C1C1C;
    --lightGrey: #424242;
    --milkBlue: #DFE7EF;
    --red: #C03630;
    --white: #fff;
    
    --maxWidth: 1280px;

    ::-webkit-scrollbar {
    width: 6px;
    }

    /* Track */ ::-webkit-scrollbar-track {
        background: var(--darkGrey);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: var(--red); 
    }
    ::-webkit-scrollbar-thumb:window-inactive {
        background: rgba(255,0,0,0.4); 
    }
}

*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Rajdhani', sans-serif;
}

html{
    scroll-behavior:smooth;
    min-width: 362px;
}

body,
html{
    font-family: 'Rajdhani', sans-serif;
}

a{
    font-family: 'Roboto', sans-serif;
}

body {
    margin:0;
    padding:0;
    border: 0;
    outline: 0;
    overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin:0;
    padding:0;
}

a {
    text-decoration: none;
    outline: none;
}

button{
    border:none;
    outline:none;
    &:focus{
        outline:none;
    }
}

*:focus {
    outline: none;
}

img,svg{
    width:100%;
    height:auto;
}

`;
