import styled from 'react-emotion'
import {
  space,
  width,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
} from 'styled-system'

const H5 = styled('h5')(
  space,
  width,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderWidth,
  {
    boxSizing: 'border-box',
  },
)

H5.defaultProps = {
  mt: 0
}

export default H5
