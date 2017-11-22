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
`

const Content = styled.main`
  padding: 1em 2em;
`
const Title = styled.div`
  margin-left: 1vw;
  font-size: 10vw;
  font-family: 'FirstCharFont';
`
const HeadWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
const HaikuWrapper = styled.div`
  text-align: center;
  ::first-letter {
    font-size: 3em;
    font-family: 'FirstCharFont';
  }
`
const Haiku = [
  'Blowing from the west',
  'the fallen leaves gather',
  'in the east',
]

export default ({ children }) => (
  <Wrapper>
    <Title>h.AI.ku</Title>
    <Header>
      {LINKS.map(({ href, name }) => (
        <Link href={href} key={name} passHref>
          <Anchor>{name}</Anchor>
        </Link>
      ))}
    </Header>
    <HaikuWrapper>
      {Haiku.map((line, index) => <p key={index}>{line}</p>)}
    </HaikuWrapper>
    <Content>{children}</Content>
  </Wrapper>
)
