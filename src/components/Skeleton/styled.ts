import { keyframes, styled } from "@stitches/react";

const Spin = keyframes({
  to: { transform: 'rotate(360deg)' },
});

export const SkeletonContainer = styled('main', {
  background: '$gray900',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',

  padding: '298px 0',
})

export const Div = styled('div', {
  border: '8px solid rgba(0, 0, 0, 1)',
  borderLeftColor: '$green300',
  height: 60,
  width: 60,
  borderRadius: '50%',
  animation: `${Spin} 1s linear infinite`,
})
