import 'isomorphic-unfetch'
import styled, { ThemeProvider } from 'styled-components'
import withRedux from 'next-redux-wrapper'
import initializeStore from '../store'
import Layout from '../components/layout'

const ABOUT = styled.div`
  text-align: center;
  font-size: 1.2em;
  margin: 20vh auto 0;
  padding: 0 1em;
  max-width: 600px;
  @media screen and (max-width: 600px) {
    margin: 10vh auto;
    width: 80vw;
  }
`

const AboutPage = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <ABOUT>
        basho.ai is Matt Granmoe, Tim Kirchhof, and the swarming Bayesian hive
        mind of a million adaptive neuro fuzzy inference AI bots. basho.ai
        implements a supervised deep learning system that generates hokku
        ("haiku") that follow the core principles of Ensō (円相) (Zen
        aesthetics).
      </ABOUT>
    </Layout>
  </ThemeProvider>
)

// get top 100 color combos from randoma11y and pseudo-randomly pick one
AboutPage.getInitialProps = async ({ store, req, isServer }) => {
  console.log('IS SERVER', isServer)
  const state = store.getState()
  if (Object.keys(state.theme).length) {
    return
  }

  const res = await fetch('https://randoma11y.com/combos/top')
  const json = await res.json()
  const randomTheme = json[Math.floor(Math.random() * json.length)]
  const theme = {
    primary: randomTheme.color_one,
    secondary: randomTheme.color_two,
  }

  store.dispatch({ type: 'SET_THEME', data: { theme } })
}

export default withRedux(initializeStore, state => ({
  theme: state.theme,
}))(AboutPage)
