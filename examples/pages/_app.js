import React from 'react'
import {ThemeProvider} from 'emotion-theming'

import theme from '../theme'

export default class extends React.Component {
  render() {
    const {render, routes, location} = this.props
    const route = routes.find(route => route.path === location.pathname)

    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <div>{render()}</div>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
