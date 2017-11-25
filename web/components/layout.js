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
const ContentWrapper = styled.div`
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

const Button = styled.button`
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondary};
  border: 2px solid ${({ theme }) => theme.primary};
  margin: 1em;
  height: 5em;
  width: 7em;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
`

export default ({ children }) => (
  <Wrapper>
    <Title>basho.ai</Title>
    <Header>
      {LINKS.map(({ href, name }) => (
        <Link href={href} key={name} passHref>
          <Anchor>{name}</Anchor>
        </Link>
      ))}
    </Header>
    <ContentWrapper>
      {Haiku.map((line, index) => <p key={index}>{line}</p>)}
      <Button /*props={DECREMENT}*/>Down vote</Button>
      <Button /*props={INCREMENT}*/>Up vote</Button>
    </ContentWrapper>
    <Content>
      <Link>
        <a>{children}</a>
      </Link>
    </Content>
  </Wrapper>
)
