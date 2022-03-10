import {StarIconWithAction} from '../components/StarIcon'
import { render } from '../test-utils'


describe('<Loading /> component', () => {
  it('StarIcon comp', () => {
    const { container } = render(<StarIconWithAction />)
    expect(container).toMatchSnapshot()
  })
})
