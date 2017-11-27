import 'isomorphic-unfetch'
import styled, { ThemeProvider, keyframes } from 'styled-components'
import config from '../config'
import Layout from '../components/layout'

const Haiku = [
  'Blowing from the west',
  'the fallen leaves gather',
  'in the east',
]

const HaikuWidth = Haiku.reduce((acc, current) => acc + current)

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${HaikuWidth.length / 2 * 16}px;
  ::first-letter {
    font-size: 3em;
    font-family: 'tempura';
    float: left;
    line-height: 1;
  }
  ::first-line {
    float: left;
    font-variant: small-caps;
  }
  @media screen and (max-width: 500px) {
    ::first-letter {
      padding-left: 5vw;
    }
    ::first-line {
      padding-left: -5vw;
    }
    max-width: ${Haiku[0].length * 11}px;
    font-size: 0.7em;
    transition: font-size 1s;
  }
`
const Line = styled.p`
  margin: 0.5em 0;
  text-align: ${props => props.align};
  @media screen and (max-width: 500px) {
    text-align: center;
  }
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

const HomePage = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <ContentWrapper>
        <Line align="left">{Haiku[0]}</Line>
        <Line align="center">{Haiku[1]}</Line>
        <Line align="right">{Haiku[2]}</Line>
        {config.enableButtons && ( // TODO: return array? Why no worky?
          <div>
            <Button>Vote Down</Button>
            <Button>Vote Up</Button>
          </div>
        )}
      </ContentWrapper>
    </Layout>
  </ThemeProvider>
)

// TODO: Move this to _document.js...maybe ThemeProvider can wrap everything in there?
// get top 100 color combos from randoma11y and pseudo-randomly pick one
HomePage.getInitialProps = async ({ req }) => {
  const res = await fetch('https://randoma11y.com/combos/top')
  const json = await res.json()
  const randomTheme = json[Math.floor(Math.random() * json.length)]
  return {
    theme: { primary: randomTheme.color_one, secondary: randomTheme.color_two },
  }
}

export default HomePage
