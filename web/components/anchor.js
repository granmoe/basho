import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import {fadeIn, fadeOut} from './fade-in-out'

const Anchor = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  flex: 0;
  padding-bottom: 0.5em;

  :active,
  :focus,
  :visited {
    text-decoration: none;
    color: inherit;
  }

  opacity: ${({isMouseActive}) => isMouseActive ? 1 : 0 };
  animation: 1s ${props => props.isMouseActive ? fadeIn : fadeOut } ease-in-out;
`

export default ({ children, href, isMouseActive }) =>
  <Anchor isMouseActive={isMouseActive} href={href}>{children}</Anchor>
