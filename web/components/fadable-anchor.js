import Fader from './fader'
import { withRouter } from 'next/router'

const Anchor = Fader.withComponent('a').extend`
  text-decoration: none;
  font-size: 1.5em;
  flex: 0;
  padding-bottom: 0.5em;
  cursor: pointer;

  :active,
  :focus,
  :visited {
    text-decoration: none;
    color: inherit;
  }
`

const FadableAnchor = ({ children, visible, router, href }) => {
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Anchor visible={visible} onClick={handleClick}>
      {children}
    </Anchor>
  )
}

export default withRouter(FadableAnchor)
