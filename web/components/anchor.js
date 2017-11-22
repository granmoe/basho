import React, { Component } from 'react'
import styled from 'styled-components'

const FadeIn = keyframes`
@-webkit-keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
`

const Anchor = styled.a`
  text-decoration: none;

  :active,
  :hover,
  :focus,
  :visited {
    text-decoration: none;
    color: inherit;
  }
  animation: ${fadeIn} 2s linear;
`

export default ({ children, href }) => <Anchor href={href}>{children}</Anchor>
