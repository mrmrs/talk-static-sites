import React from 'react'

import {
  P,
  H1,
  Div,
  Article,
  Nav,
  A,
  Footer
} from '../elements/'

import Skullcat from '../components/Skullcat'
import NavLink from '../components/NavLink'

export default class extends React.Component {
  render() {
    return (
      <Div>
        <Nav display='flex' flexWrap='wrap' alignItems='center' px={4}>
          <A href='/' w={48}>
            <Skullcat />
          </A>
          <A color='black' ml='auto' children='Work' />
          <A color='black' children='Writing' />
          <A color='black' children='Reading' />
          <A color='black' children='GitHub' />
        </Nav>
      </Div>
    )
  }
}
