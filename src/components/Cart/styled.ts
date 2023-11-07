import { styled } from "@stitches/react";
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {})

export const Content = styled(Dialog.Content, {
  height: '100vh',
  width: '100%',
  maxWidth: '480px',
  padding: '24px 48px 48px ',
  position: 'absolute',
  right: '0px',
  top: '0px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  background: '$gray800',
  // animation: '0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running',
})

export const Close = styled(Dialog.Close, {
  alignSelf: 'end',
  border: 'none',
  background: 'transparent',
  marginTop: '24px',

  color: '$gray400',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray100',
  }
})

export const Title = styled(Dialog.Title, {
  color: '$gray100',
  fontSize: '1.25rem',
})

export const ProductsSelected = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const ProductsContainer = styled('div', {
  marginTop: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const Product = styled('div', {
  display: 'flex',
  gap: 20,

  small: {
    color: '$gray300',
    fontSize: '1.125rem',
  },

  strong: {
    fontSize: '1.125rem',
    color: '$gray100',
  }
})

export const ImageContainer = styled('div', {
  width: '94.79px',
  height: '94.79px',

  borderRadius: '8px',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  display: 'flex',
  alignItems: 'center',
  objectFit: 'cover',
})

export const Details = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    paddingTop: '8px'
  },

  button: {
    border: 'none',
    background: 'transparent',

    color: '$green500',
    fontWeight: 'bold',
    textAlign: 'initial',

    paddingTop: '8px',

    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    }
  }
})

export const Summary = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.438rem',

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    width: '100%',

    '&:hover': {
      backgroundColor: '$green300',
    }
  }
})

export const Separator = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '7px 0px',

  strong: {
    fontSize: '24px'
  }
})

export const Empty = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  margin: 'auto 0px',

  small: {
    color: '$green300'
  }
})

