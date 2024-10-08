import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
    color: ${({ theme }) => theme.COLORS.WHITE};
}

body, button, input, textarea {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    outline: none;
}

a {
    text-decoration: none;
}

button, a {
    cursor: pointer;
    transition: filter .2s;
}

button:hover, a:hover {
    filter: brightness(0.9);
}
`;