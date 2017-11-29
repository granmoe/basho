import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
  0% { opacity: 1; }
  100%   { opacity: 0; }
`

const Anchor = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  flex: 0;
  padding-bottom: 0.5em;

  :active,
  :hover {
    animation: ${fadeOut} 6s linear;
  }
  ,
  :focus,
  :visited {
    text-decoration: none;
    color: inherit;
  }
`

export default ({ children, href }) => <Anchor href={href}>{children}</Anchor>
