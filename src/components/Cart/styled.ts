import { styled } from "@stitches/react";

export const CartContainer = styled('section', {
  height: '100vh',
  width: '100%',
  maxWidth: '480px',

  display: 'flex',
  flexDirection: 'column',

  background: '$gray800',
  right: '0px',
  top: '0px',

  position: 'absolute',

  animation: '0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running'
})

export const ProductSessionSelected = styled('div', {
  padding: '48px',
})

export const Details = styled('div', {

})

export const Products = styled('div', {

})