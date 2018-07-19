import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderWidth,
  borderColor,
  borderRadius,
} from 'styled-system'

const Nav = styled('nav')(
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderWidth,
  borderColor,
  borderRadius,
  {
    boxSizing: 'border-box',
  },
)

Nav.defaultProps = {}

export default Nav
