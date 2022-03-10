import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '../test-utils'
import {Loading} from '../components/Loading'

describe('<Loading /> component', () => {
  it('Loading component', () => {
    const { container } = render(<Loading />)
    expect(container).toMatchSnapshot()
  })
})
