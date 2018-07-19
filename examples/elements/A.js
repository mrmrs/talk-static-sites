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
  {},
)

A.defaultProps = {
  bg: 'transparent',
}

export default A
