import React, { Component } from 'react'
import styled from 'styled-components'

const fadeIn = keyframes`
@-webkit-keyframes fadeIn{
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes fadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes fadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes fadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
`

const Anchor = styled.a`
  text-decoration: none;

  :active,
  :hover {
    animation: ${fadeIn} 2s linear;
  }
  ,
  :focus,
  :visited {
    text-decoration: none;
    color: inherit;
  }
`

export default ({ children, href }) => <Anchor href={href}>{children}</Anchor>
