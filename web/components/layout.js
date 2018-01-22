import Link from 'next/link'
import styled, { css } from 'styled-components'
import Anchor from './anchor'
import FadableAnchor from './fadable-anchor'
import Fader from './fader'

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  @media screen and (orientation: landscape) and (max-height: 415px) {
    display: flex;
    flex-direction: row;
  }
`

const Header = styled.header`
  display: flex;
  margin: auto;
  font-size: 1em;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 600px) {
    margin: auto;
    font-size: 0.8em;
    flex-direction: column;
  }
  @media screen and (orientation: landscape) and (max-height: 415px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60px;
    font-size: 0.8em;
    margin: 48px 32px;
  }
`

const titleCSS = css`
  font-size: 12vw;
  font-family: 'tempura';
  @media screen and (max-width: 600px) {
    font-size: 20vw;
  }
  @media screen and (orientation: landscape) and (max-height: 415px) and (max-height: 415px) {
    font-size: 16vh;
    margin: 0 0 48px 0;
  }
`

const Title = styled.div`
  ${titleCSS};
`

const FadableTitle = Fader.extend`
  ${titleCSS};
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15vh auto;
  @media screen and (max-width: 600px) {
    margin: auto;
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

export default ({ children, isMouseActive, page }) => {
  const TitleComponent = page === 'home' ? FadableTitle : Title
  const AnchorComponent = page === 'home' ? FadableAnchor : Anchor

  return (
    <Wrapper>
      <Header>
        <TitleComponent visible={isMouseActive}>場所</TitleComponent>
        {LINKS.map(({ href, name }) => (
          <Link href={href} key={name} prefetch passHref>
            <AnchorComponent visible={isMouseActive}>{name}</AnchorComponent>
          </Link>
        ))}
      </Header>
      <Main>{children}</Main>
    </Wrapper>
  )
}
