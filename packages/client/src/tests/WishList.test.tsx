import { WishList } from '../Pages/WishList'
import { render } from '../test-utils'


describe('Wishlist Page component', () => {
  it('Wishlist page', () => {
    const { container } = render(<WishList />)
    expect(container).toMatchSnapshot()
  })
})
