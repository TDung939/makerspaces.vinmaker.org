import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { User } from './User'

export const data = [
  {
    status: 'available',
    num: 5,
    location: 'Building G',
    makerspace: "Rapid Prototype Lab"
  },
  {
    status: 'unavailable',
    num: 2,
    location: 'Building G',
    makerspace: "Open Project Lab"
  },
]


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
