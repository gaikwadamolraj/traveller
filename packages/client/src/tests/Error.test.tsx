import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '../test-utils'
import {Error} from '../components/Error'

describe('<Error /> component', () => {
  it('With message', () => {
    render(<Error error="amol" />)
    const HeadingComponent = screen.getByText(/^amol$/i)
    expect(HeadingComponent).toBeInTheDocument()
  })
  it('Blank render for error', () => {
    const { container } = render(<Error error="" />)
    expect(container).toMatchSnapshot()
  })
})
