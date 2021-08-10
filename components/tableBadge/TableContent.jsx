import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { columns, data } from './_data'
import moment from 'moment';
export const TableContent = ({props}) => {
  const sessions = props
  return (
    <Table my="8" borderWidth="1px" fontSize="sm">
      <Thead bg={mode('gray.50', 'gray.800')}>
        <Tr>
          {columns.map((column, index) => (
            <Th whiteSpace="nowrap" scope="col" key={index}>
              {column.Header}
            </Th>
          ))}
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {sessions.map((row, index) => (
          <Tr key={index}>
            {columns.map((column, index) => {
              let cell
              if (column.accessor=="date") {
                cell = moment(row[column.accessor]).format("dddd, MMMM Do YYYY, h:mm a")
              } else {
                cell = row[column.accessor]
              }
              const element = column.Cell?.(cell) ?? cell
              return (
                <Td whiteSpace="nowrap" key={index}>
                  {element}
                </Td>
              )
            })}
            <Td textAlign="right">
              <Button variant="link" colorScheme="blue">
                Book
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
