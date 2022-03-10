
import { Visited } from '../Pages/Visited'
import { render } from '../test-utils'

describe('Visited Page component', () => {
  it('Visited page', () => {
    const { container } = render(<Visited />)
    expect(container).toMatchSnapshot()
  })
})
