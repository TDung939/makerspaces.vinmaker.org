import { Badge } from '@chakra-ui/react'
import * as React from 'react'


const badgeEnum = {
  available: 'green',
  maintaining: 'orange',
  unavailable: 'red',
}
export const columns = [
  {
    Header: 'Makerspace',
    accessor: 'makerspace',
  },
  {
    Header: 'Location',
    accessor: 'location',
  },
  {
    Header: 'Number of machines',
    accessor: 'num',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: function StatusCell(data) {
      return (
        <Badge fontSize="xs" colorScheme={badgeEnum[data]}>
          {data}
        </Badge>
      )
    },
  },
]
