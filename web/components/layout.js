import React from 'react'
import Link from 'next/link'
import Head from './head'
import styled from 'styled-components'

const Content = styled.div`
  margin-left: 100px;
  margin-top: 15px;
  margin-right: 15px;
`

const LINKS = [
	{
		name: 'Home',
		icon: 'home',
		href: '/',
	}
]

export default ({children, pageName}) => (
	<div>
		<Head title="Basho" />
    {LINKS.map(({href, name}) => (
      <Link href={href} key={name}>
        <a>{name}</a>
      </Link>
    ))}
		{children}
	</div>
)