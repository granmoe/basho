import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  padding: 1em 2em;
  font-size: 1em;
  display: flex;
  justify-content: space-around;
`

const Content = styled.main`
  padding: 1em 2em;
  font-size: 1em;
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

export default ({ children }) => [
  <Header key="header">
    {LINKS.map(({ href, name }) => (
      <Link href={href} key={name}>
        <a>{name}</a>
      </Link>
    ))}
  </Header>,
  <Content key="content">{children}</Content>,
]
