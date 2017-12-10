import Layout from '../components/layout'
import styled from 'styled-components'

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

export default () => (
  <Layout>
    <ABOUT>
      basho.ai is Matt Granmoe, Tim Kirchhof, and the swarming Bayesian hive
      mind of a million adaptive neuro fuzzy inference AI bots. basho.ai
      implements a supervised deep learning system that generates hokku
      ("haiku") that follow the core principles of Ensō (円相) (Zen aesthetics).
    </ABOUT>
  </Layout>
)
