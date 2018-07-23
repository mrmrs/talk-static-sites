import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
} from 'styled-system'

const A = styled('a')(
  space,
  width,
  maxWidth,
  fontSize,
  fontWeight,
  textAlign,
  color,
  display,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderWidth,
  borderRadius,
  {
    textDecoration: 'none'
  },
)

A.defaultProps = {
  bg: 'transparent',
  color: 'blue'
}

export default A
