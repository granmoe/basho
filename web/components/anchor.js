import styled from 'styled-components'
import { withRouter } from 'next/router'

const StyledAnchor = styled.a`
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

const Anchor = ({ children, router, href }) => {
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return <StyledAnchor onClick={handleClick}>{children}</StyledAnchor>
}

export default withRouter(Anchor)
