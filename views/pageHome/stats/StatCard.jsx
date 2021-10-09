import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const StatCard = (props) => {
  const { value, title, icon } = props
  return (
    <Flex bg="#2A5FFF10" p="6" rounded="2xl" {...props}>
      <Box flex="1" mr="4" color="#2A5FFF">
        <Text fontSize="5xl" fontWeight="extrabold" mb="4" lineHeight="1">
          {value}
        </Text>
        <Text color={useColorModeValue('gray.900', 'white')}>{title}</Text>
      </Box>
      <Box fontSize="3rem" color="#2A5FFF">
        {icon}
      </Box>
    </Flex>
  )
}
