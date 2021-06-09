import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const StatCard = (props) => {
  const { value, title, icon } = props
  return (
    <Flex bg="#f7e9ea" p="6" rounded="2xl" {...props}>
      <Box flex="1" mr="4" color="#ae262b">
        <Text fontSize="5xl" fontWeight="extrabold" mb="4" lineHeight="1">
          {value}
        </Text>
        <Text color={useColorModeValue('gray.900', 'white')}>{title}</Text>
      </Box>
      <Box fontSize="3rem" color="#ae262b">
        {icon}
      </Box>
    </Flex>
  )
}
