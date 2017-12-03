import styled, { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

export default styled.div`
  opacity: ${({visible}) => visible ? 1 : 0 };
  animation: 1s ${({visible}) => visible ? fadeIn : fadeOut } ease-in-out;
`
