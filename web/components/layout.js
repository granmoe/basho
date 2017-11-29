import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Anchor from './anchor'

const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
`

const Header = styled.header`
  padding: 2em 1em;
  display: flex;
  font-size: 1.5;
  justify-content: space-around;
  align-items: center;
  height: 4em;
  @media screen and (max-width: 500px) {
    font-size: 0.8em;
    flex-direction: column;
  }
`

const Content = styled.main``

const Title = styled.div`
  font-size: 12vw;
  font-family: 'tempura';
  @media screen and (max-width: 500px) {
    font-size 25vw;
    padding-top: 1em;
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

export default ({ children }) => (
  <Wrapper>
    <Header>
      <Title>basho.ai</Title>
      {LINKS.map(({ href, name }) => (
        <Link href={href} key={name} passHref prefetch>
          <Anchor>{name}</Anchor>
        </Link>
      ))}
    </Header>
    <Content>{children}</Content>
  </Wrapper>
)
