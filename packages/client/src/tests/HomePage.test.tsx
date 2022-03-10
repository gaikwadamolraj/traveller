import { Home } from '../Pages/Home'
import { render } from '../test-utils'

describe('Home Page component', () => {
  it('Home page', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
