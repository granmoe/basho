import 'isomorphic-unfetch'
import styled, { ThemeProvider } from 'styled-components'
import config from '../config'
import Layout from '../components/layout'

const ContentWrapper = styled.div`
  text-align: center;
  ::first-letter {
    font-size: 3em;
    font-family: 'tempura';
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
        {Haiku.map((line, index) => <p key={index}>{line}</p>)}
        { config.enableButtons && ( // TODO: return array? Why no worky?
          <div>
            <Button>Vote Down</Button>
            <Button>Vote Up</Button>
          </div>
        ) }
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
