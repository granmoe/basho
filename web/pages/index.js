import 'isomorphic-unfetch'
import withRedux from 'next-redux-wrapper'
import styled, { ThemeProvider } from 'styled-components'

import initializeStore, { changeTheme } from '../store'
import config from '../config.json'
import Mouse from '../components/mouse'
import Fader from '../components/fader'
import Layout from '../components/layout'

const HAIKU_REPO = [
  ['Blowing from the West', 'the fallen leaves gather', 'in the East'],
  ['The old pond', 'A frog leaps in', 'Splash!'],
  ['Jumping over the brook', 'for water', 'not needed'],
]

const haiku = HAIKU_REPO[Math.floor(Math.random() * HAIKU_REPO.length)]

const longestLine = haiku.slice().sort((a, b) => b.length - a.length)[0].length

const HaikuWrapper = styled.div`
  margin: 0 auto;
  font-size: 1.5em;
  margin-top: 20vh;
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

const ButtonsWrapper = Fader.extend`
  text-align: center;
  margin-top: 5em;
`

const Line = styled.p`
  margin: 0.5em 0;
  text-align: ${props => props.align};
`

const Button = styled.button`
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondary};
  margin: 1em;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 1em;
  font-family: 'fondamento-regular';
  font-size: 1.25em;
  cursor: pointer;
  outline: none;
`

const HomePage = ({ theme, changeTheme }) => (
  <ThemeProvider theme={theme}>
    <Mouse>
      {isMouseActive => (
        <Layout isMouseActive={isMouseActive} page="home">
          <HaikuWrapper>
            <Line align="left">{haiku[0]}</Line>
            <Line align="center">{haiku[1]}</Line>
            <Line align="right">{haiku[2]}</Line>
          </HaikuWrapper>
          <ButtonsWrapper visible={isMouseActive}>
            <Button onClick={changeTheme}>Change Theme</Button>
            {config.enableVotingButtons && [
              <Button>Vote Down</Button>,
              <Button>Vote Up</Button>,
            ]}
          </ButtonsWrapper>
        </Layout>
      )}
    </Mouse>
  </ThemeProvider>
)

// get top 100 color combos from randoma11y and pseudo-randomly pick one
HomePage.getInitialProps = async ({ store, req }) => {
  const state = store.getState()
  if (Object.keys(state.theme).length) {
    return
  }

  const res = await fetch('https://randoma11y.com/combos/top')
  const json = await res.json()
  store.dispatch({ type: 'LOAD_THEMES', data: json })
  store.dispatch(changeTheme())
}

export default withRedux(
  initializeStore,
  state => ({
    theme: state.theme,
  }),
  {
    changeTheme,
  },
)(HomePage)
