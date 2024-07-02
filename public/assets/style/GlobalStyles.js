import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

:root{
    --Orange: hsl(26, 100%, 55%);
    --PaleOrange: hsl(25, 100%, 94%);
    --VeryDarkBlue: hsl(220, 13%, 13%);
    --DarkGrayishBlue: hsl(219, 9%, 45%);
    --GrayishBlue: hsl(220, 14%, 75%);
    --LightGrayishBlue: hsl(223, 64%, 98%);
    --White: hsl(0, 0%, 100%);
    --Black: hsla(0, 0%, 0%,75%);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

body{
    background: var(--Black);
    font-family: 'Kumbh Sans', sans-serif;
   
}
button{
    border: none;
}
`;
