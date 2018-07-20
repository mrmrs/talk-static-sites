import React from 'react'


import { H1, Div } from '../elements/'

export default class extends React.Component {
  render () {
    return (
      <Div bg='red.1' py={5} px={4} fontSize={[1,2,5]}>
        <H1>Hello</H1>
      </Div>
    )
  }
}
