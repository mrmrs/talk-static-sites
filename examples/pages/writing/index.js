import React from 'react'
import sortBy from 'lodash.sortby'

import { H1, Div, A, P, Pre } from '../../elements/'

export default class extends React.Component {
  render () {
    const {routes = []} = this.props;

    const posts =
      sortBy([...routes]
        .filter(r => !!r.props)
        .filter(r => r.name !== 'index'),
        route => route.props.created
      )
      .map(route => ({ ...route, ...route.props }))
      .filter(route => !route.draft)
      .filter(route => !!route.title)
      .reverse()

    return (
      <Div>
        {posts.map(post => (
          <A
            key={post.name}
            mb={5}
            href={post.path}>
            <H1 fontSize={[ 5, null, 6 ]} mb={3}>{post.title}</H1>
            {post.excerpt && <P mb={3}>{post.excerpt}</P>}
            <Pre>{new Date(post.created).toDateString()}</Pre>
          </A>
        ))}
      </Div>
    )
  }
}
