import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${(props: any) => (props.darkMode ? 'white' : 'black')};
    font-family: 'Montserrat', sans-serif;
  }
`
