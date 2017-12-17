import styled from 'styled-components'

const Anchor = styled.a`
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

export default ({ children, onClick }) => (
  <Anchor onClick={onClick}>{children}</Anchor>
)
