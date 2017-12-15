import styled from 'styled-components'

const Anchor = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  flex: 0;
  padding-bottom: 0.5em;

  :active,
  :focus,
  :visited {
    text-decoration: none;
    color: inherit;
  }
`

export default ({ children, href }) => <Anchor href={href}>{children}</Anchor>
