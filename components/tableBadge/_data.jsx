import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { User } from './User'

const badgeEnum = {
  available: 'green',
  canceled: 'orange',
  full: 'red',
}
export const columns = [
  {
    Header: 'Instructor',
    accessor: 'instructor',
    Cell: function MemberCell(data) {
      return <User data={data} />
    },
  },
  {
    Header: 'Date',
    accessor: 'date',
  },
  {
    Header: 'Location',
    accessor: 'location',
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
  {
    Header: 'Max Seats',
    accessor: 'maxseats',
  },
]
