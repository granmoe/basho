import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const LINKS = [
  {
    name: 'Home',
    icon: 'home',
    href: '/',
  },
]

export default ({ children, pageName }) => (
  <div>
    {pageName}
    {LINKS.map(({ href, name }) => (
      <Link href={href} key={name}>
        <a>{name}</a>
      </Link>
    ))}
    {children}
  </div>
)
