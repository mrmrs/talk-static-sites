import React from 'react'

import {
  P,
  H1,
  Div,
  Article,
  Footer
} from '../elements/'

import Skullcat from '../components/Skullcat'

export default class extends React.Component {
  render() {
    return (
      <Div>
        <Skullcat />
      </Div>
    )
  }
}
