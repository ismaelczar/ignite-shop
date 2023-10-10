import { globalCss } from ".";

export const GlobalStyled = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    'body': {
      background: '$gray900',
      color: '$gray100',
      '--webkit-font-smoothing': 'antialiased',
      'font-weight': 400,
      'font-size': '1rem',
      'fontFamily': 'Roboto',
    }
  }
})