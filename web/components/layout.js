import React, { Component } from 'react'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import Anchor from './anchor'
import Fader from './fader'

const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
`

const Header = styled.header`
  padding: 3vw 0 0 0;
  display: flex;
  font-size: 1.5;
  justify-content: space-around;
  align-items: center;
  height: 10em;
  @media screen and (max-width: 600px) {
    padding: 15vw 1em;
    font-size: 0.8em;
    flex-direction: column;
  }
`

const Title = Fader.extend`
  font-size: 12vw;
  font-family: 'tempura';
  @media screen and (max-width: 600px) {
    font-size 25vw;
  }
  @media screen and (min-width: 1200px) {
    font-size: 9em;
  }
`

const LINKS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
]

export default ({ children, isMouseActive }) => (
  <Wrapper>
    <Header>
      <Title visible={ isMouseActive }>場所</Title>
      {LINKS.map(({ href, name }) => (
        <Link href={href} key={name} passHref prefetch>
          <Anchor visible={ isMouseActive }>{name}</Anchor>
        </Link>
      ))}
    </Header>
    <main>{children}</main>
  </Wrapper>
)
