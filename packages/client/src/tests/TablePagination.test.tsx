import {TablePagination} from '../components/TablePagination'
import { render } from '../test-utils'


describe('<TablePagination /> component', () => {
  it('TablePagination component snapshot', () => {
      const cities = [{
        id: 0,
        name: 'Moscow',
        country: 'Russia',
        visited: false,
        wishlist: false,
      }]
    const { container } = render(<TablePagination cities={cities}/>)
    expect(container).toMatchSnapshot()
  })
})
