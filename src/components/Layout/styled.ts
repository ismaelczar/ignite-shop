import { styled } from "@stitches/react"


export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  minHeight: '100vh',

  position: 'relative'

})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

})

export const BagContainer = styled('button', {
  border: 'none',
  background: '$gray800',
  borderRadius: 8,
  padding: 12,

  position: 'relative',

  cursor: 'pointer',

  svg: {
    color: '$gray400'
  },

  '&:hover': {
    background: '$gray800',

    svg: {
      color: '$white',
    }
  }


})

export const BagLength = styled('span', {
  position: 'absolute',
  bottom: "75%",
  right: 0,

  padding: '0.2rem 0.5rem',
  borderRadius: "100%",
  background: '$green500',
  color: '$white'
})