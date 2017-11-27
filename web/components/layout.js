import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Anchor from './anchor'

const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  font-size: 1.5em;
`

const Header = styled.header`
  padding: 1em 2em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4em;
`

const Content = styled.main`
  padding: 1em 2em;
`

const Title = styled.div`
  margin-left: 1vw;
  font-size: 10vw;
  font-family: 'tempura';
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
