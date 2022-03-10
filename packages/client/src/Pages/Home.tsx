import { useReducer, useRef, useState } from 'react'
import type { Reducer } from 'react'
import type { FC } from 'react'
import { Container, InputRightElement, Input, Heading, InputGroup, IconButton, VStack } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { TablePagination } from '../components/TablePagination'
import type { IAction, ICity, PutPayload, IState } from '../dataStructure'
import { CONSTANTS } from '../dataStructure'
import { sendApiCall } from '../httputil/Api'
import { Loading } from '../components/Loading'
import { Error } from '../components/Error'
import { initialState, reducer, setError } from '../store'

export const Home: FC = () => {
  const [pageNumber, setPage] = useState<number>(CONSTANTS.DEFAULT_PAGE)
  const [serachName, setSearchName] = useState<string>('')

  // eslint-disable-next-line
  const serachInput = useRef<any>()

  const [state, dispatch] = useReducer<Reducer<IState, IAction>>(reducer, initialState)
  const { cities, isLoading, error } = state

  const fetchData = () => {
    const name: string = serachInput?.current?.value.trim()
    setSearchName(name)
    if (name) {
      sendApiCall({ dispatch, urlData: `?name=${name}` })
      setPage(CONSTANTS.DEFAULT_PAGE)
    } else {
      setError(dispatch, 'Please enter some char values')
    }
  }
  const updateData = async (city: ICity, page: number, payload: PutPayload) => {
    sendApiCall({ method: 'PUT', dispatch, urlData: `/${city.id}`, payload })
    setPage(page)
  }

  const handleVisited = (city: ICity, page: number) => {
    updateData(city, page, { visited: !city.visited })
  }

  const handleWishlist = (city: ICity, page: number) => {
    updateData(city, page, { wishlist: !city.wishlist })
  }

  // useEffect(() => {
  //   // fetchData()
  //   return () => {
  //     // Clean up the subscription if any
  //   }
  // }, [])

  return (
    <VStack>
      <Heading as="h1">Smart traveller</Heading>
      <Container maxW="container.md">
        <InputGroup>
          <Input
            placeholder={'Find city by name'}
            ref={serachInput}
            onKeyPress={e => (e.key === 'Enter' ? fetchData() : '')}
          />
          <InputRightElement children={<IconButton aria-label="" icon={<Search2Icon />} />} onClick={fetchData} />
        </InputGroup>
        <Error error={error} />

        {isLoading ? (
          <Loading />
        ) : serachName ? (
          <TablePagination
            pageNumber={pageNumber}
            cities={cities || []}
            handleVisited={handleVisited}
            handleWishlist={handleWishlist}
          />
        ) : (
          ''
        )}
      </Container>
    </VStack>
  )
}
