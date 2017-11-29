import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`

const Anchor = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  flex: 0;
  padding-bottom: 0.5em;

  :active,
  :hover {
    animation: ${fadeIn} 4s linear;
  }
  ,
  :focus,
  :visited {
    text-decoration: none;
    color: inherit;
  }
`

export default ({ children, href }) => <Anchor href={href}>{children}</Anchor>
