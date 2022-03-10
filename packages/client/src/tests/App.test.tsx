import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { screen } from '@testing-library/react'

import { App } from '../App'
import { render } from '../test-utils'

describe('<App /> component', () => {
  it('renders the Header content', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const HeadingComponent = screen.getByText(/^Smart traveller$/i)
    expect(HeadingComponent).toBeInTheDocument()
  })
})
