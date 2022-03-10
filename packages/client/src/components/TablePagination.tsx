import * as React from 'react'
import { Table } from 'react-chakra-pagination'
import { Box, useColorMode } from '@chakra-ui/react'
import { FiDatabase } from 'react-icons/fi'
import type { ICity, TableProps } from '../dataStructure'
import { CONSTANTS } from '../dataStructure'
import { StarIconWithAction } from './StarIcon'

const tableColumns = [
  {
    Header: 'Name',
    accessor: 'name' as const,
  },
  {
    Header: 'Country',
    accessor: 'country' as const,
  },
  {
    Header: 'Wish List',
    accessor: 'wishAction' as const,
  },
  {
    Header: 'Visited',
    accessor: 'visitAction' as const,
  },
]

export const TablePagination: React.FC<TableProps> = ({
  pageNumber = CONSTANTS.DEFAULT_PAGE,
  cities,
  handleWishlist,
  handleVisited,
}: TableProps) => {
  const [page, setPage] = React.useState(pageNumber)
  const { colorMode } = useColorMode()

  const tableData = cities?.map((city: ICity) => ({
    name: city.name,
    country: city.country,
    wishAction: (
      <StarIconWithAction
        page={page}
        city={city}
        color={city.wishlist ? 'green' : 'gray'}
        handleFunc={handleWishlist}
      />
    ),
    visitAction: (
      <StarIconWithAction page={page} city={city} color={city.visited ? 'green' : 'gray'} handleFunc={handleVisited} />
    ),
  }))

  return (
    <Box>
      <Box>
        <Table
          key={'paginationTable'}
          colorScheme={colorMode === 'light' ? 'blue' : 'yellow'}
          emptyData={{
            icon: FiDatabase,
            text: 'No city found',
          }}
          totalRegisters={cities?.length}
          page={page}
          onPageChange={(page: number) => setPage(page)}
          columns={tableColumns}
          data={tableData}
        />
      </Box>
    </Box>
  )
}
