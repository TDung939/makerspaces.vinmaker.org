import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { User } from './User'

export const data = [
  {
    date: 'Every Friday 12:00pm - 13:00pm',
    status: 'available',
    seats: '5/12',
    location: 'Open Project Lab',
    instructor: {
      image:
        'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fGd1eSUyMGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      name: 'Marion Watson',
      email: 'codyfisher@example.com',
    },
  },
  {
    date: 'Every Monday 12:00pm - 13:00pm',
    status: 'canceled',
    seats: '-',
    location: 'Open Project Lab',
    instructor: {
      image:
        'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fGd1eSUyMGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      name: 'Marion Watson',
      email: 'codyfisher@example.com',
    },
  },
]
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
