import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 556,

})


export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp1': {
    width: 'auto',
  },

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    right: '0.25rem',
    left: '0.25rem',
    padding: '2rem',

    cursor: "initial",

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    background: 'rgba(0,0,0,0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },

    button: {
      padding: 12,
      background: '$green500',
      borderRadius: 8,
      border: 'none',
      cursor: 'pointer',

      svg: {
        color: '$gray300',
      },

      '&:hover': {
        background: '$green300',
        svg: {
          color: '$white',
        }
      },
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})

export const Separator = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})