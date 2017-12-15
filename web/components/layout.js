import Link from 'next/link'
import styled, { css } from 'styled-components'
import Anchor from './anchor'
import FadableAnchor from './fadable-anchor'
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

const titleCSS = css`
  font-size: 12vw;
  font-family: 'tempura';
  @media screen and (max-width: 600px) {
    font-size 25vw;
  }
  @media screen and (min-width: 1200px) {
    font-size: 9em;
  }
`

const Title = styled.div`
  ${titleCSS};
`

const FadableTitle = Fader.extend`
  ${titleCSS};
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

export default ({ children, isMouseActive, page }) => {
  const TitleComponent = page === 'home' ? FadableTitle : Title
  const AnchorComponent = page === 'home' ? FadableAnchor : Anchor

  return (
    <Wrapper>
      <Header>
        <TitleComponent visible={isMouseActive}>場所</TitleComponent>
        {LINKS.map(({ href, name }) => (
          <Link href={href} key={name} passHref prefetch>
            <AnchorComponent visible={isMouseActive}>{name}</AnchorComponent>
          </Link>
        ))}
      </Header>
      <main>{children}</main>
    </Wrapper>
  )
}
