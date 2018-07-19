import styled from 'react-emotion'
import {
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderRadius,
} from 'styled-system'

const Legend = styled('legend')(
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderRadius,
  display,
  {
    boxSizing: 'border-box',
    maxWidth: '100%',
    whiteSpace: 'normal',
  },
)

Legend.defaultProps = {
  color: 'inherit',
  display: 'table',
  p: 0,
}

export default Legend
