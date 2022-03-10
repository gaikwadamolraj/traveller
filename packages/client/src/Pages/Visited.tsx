import { useEffect, useReducer } from 'react'
import type { Reducer } from 'react'
import { Container, Heading } from '@chakra-ui/react'
import type { IAction, IEmptyProps, IState } from '../dataStructure'
import { TablePagination } from '../components/TablePagination'
import { Loading } from '../components/Loading'
import { sendApiCall } from '../httputil/Api'
import { Error } from '../components/Error'
import { initialState, reducer } from '../store'

export const Visited: React.FC<IEmptyProps> = () => {
  const [state, dispatch] = useReducer<Reducer<IState, IAction>>(reducer, initialState)
  const { cities, isLoading, error } = state

  useEffect(() => {
    sendApiCall({ dispatch, urlData: `/?visited=true` })
  }, [])

  return (
    <>
      <Heading as="h1">Visited</Heading>
      <Container maxW="container.md">
        <Error error={error} />
        {!isLoading ? <TablePagination cities={cities || []} isLoading /> : <Loading />}
      </Container>
    </>
  )
}
