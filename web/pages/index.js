import Layout from '../components/layout'
import 'isomorphic-unfetch'
import { ThemeProvider } from 'styled-components'

const HomePage = ({ theme }) => (
  <ThemeProvider theme={theme}>
    <Layout>Home Page</Layout>
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
