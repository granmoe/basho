import Fader from './fader'

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

// Stealthily making next.js client-side routing work by stealing the onClick from <Link /> and
// reapplying it. It's stupid that we have to do this...should submit an issue or a PR to next.js
export default ({ children, visible, onClick }) => (
  <Anchor visible={visible} onClick={onClick}>
    {children}
  </Anchor>
)
