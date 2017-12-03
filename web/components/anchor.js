import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import Fader from './fader'

const Anchor = Fader.withComponent('a').extend`
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
`

export default ({ children, href, visible }) =>
  <Anchor visible={visible} href={href}>{children}</Anchor>
