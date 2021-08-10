import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { columns, data } from './_data'
import moment from 'moment';
import {useContext} from 'react'
import AuthContext from '../../context/AuthContext'

export const TableContent = ({props}) => {
  const { user } = useContext(AuthContext);
  const toast = useToast();
  const id = props.id
 
  const handleSubmit = () => {
    let online_completed = false
    for( var i in user.online_module_badges) {
      if (id === user?.online_module_badges[i].id) {
        online_completed = true
        break;
      } 
    }
    online_completed? toast({title: "Successfully booked", status: "success"}) : toast({title: "Complete the online components first", status: "info"});
    if(user.online_module_badges.length==0) toast({title: "Complete the online components first", status: "info"})
  }
  const sessions = props.session
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
              <Button variant="link" colorScheme="blue" onClick={handleSubmit}>
                Book
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
