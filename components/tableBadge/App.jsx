import { Box, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { TableContent } from './TableContent'

const App = ({props}) => {
  return (
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
      >
        <Box overflowX="auto">
          <TableContent props={props}/>
        </Box>
      </Box>
  )
}
export default App