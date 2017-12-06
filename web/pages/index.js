import 'isomorphic-unfetch'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import config from '../config'
import Layout from '../components/layout'
import withMouseActive from '../components/with-mouse-active'

const HAIKUREPO = [
  ['Blowing from the West', 'the fallen leaves gather', 'in the East'],
  ['The old pond', 'A frog leaps in', 'Splash!'],
  ['Jumping over the brook', 'for water', 'not needed'],
]

let haiku = HAIKUREPO[Math.floor(Math.random() * HAIKUREPO.length)]

const haikuCharCount = haiku.join('').length

const longestLine =
  haiku[0].length > haiku[1].length && haiku[0].length > haiku[2].length
    ? haiku[0].length
    : haiku[1].length > haiku[2].length ? haiku[1].length : haiku[2].length
/* this looks ugly; is there a better way to write this comparison? It merely sorts which of the three lines is longest to give us a max-width for each poem.  The previous method was not scaleable for other poems; this is. */

const ContentWrapper = styled.div`
  margin: 0 auto;
  font-size: 1.5em;
  margin-top: 20vh;
  width: ${haikuCharCount}vw;
  max-width: ${longestLine}em;

  ::first-letter {
    font-size: 3em;
    font-family: 'tempura';
    float: left;
    line-height: 1;
  }

  ::first-line {
    font-variant: small-caps;
  }

  @media screen and (max-width: 600px) {
    margin: 10vh auto;
    width: 80vw;
  }
`

const Line = styled.p`
  margin: 0.5em 0;
  text-align: ${props => props.align};
`

const Button = styled.button`
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondary};
  margin: 1em;
  border-radius: 0px;
  border: 1px solid ${({ theme }) => theme.primary};
  height: 5em;
  width: 7em;
`

const HomePage = ({ theme, isMouseActive }) => (
  <ThemeProvider theme={theme}>
    <Layout isMouseActive={isMouseActive} page="home">
      <ContentWrapper>
        <Line align="left">{haiku[0]}</Line>
        <Line align="center">{haiku[1]}</Line>
        <Line align="right">{haiku[2]}</Line>
        {config.enableButtons && (
          <div>
            <Button>Vote Down</Button>
            <Button>Vote Up</Button>
          </div>
        )}
      </ContentWrapper>
    </Layout>
  </ThemeProvider>
)

// get top 100 color combos from randoma11y and pseudo-randomly pick one
HomePage.getInitialProps = async ({ req }) => {
  const res = await fetch('https://randoma11y.com/combos/top')
  const json = await res.json()
  const randomTheme = json[Math.floor(Math.random() * json.length)]
  return {
    theme: { primary: randomTheme.color_one, secondary: randomTheme.color_two },
  }
}

export default withMouseActive(HomePage)
