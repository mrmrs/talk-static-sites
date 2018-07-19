import styled from 'react-emotion'
import {color} from 'styled-system'

const Svg = styled('Svg')(color, {
  boxSizing: 'border-box',
})

Svg.defaultProps = {
  fill: 'currentColor',
}

export default Svg
