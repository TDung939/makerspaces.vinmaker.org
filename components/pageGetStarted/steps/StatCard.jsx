import { Box, Flex, Text, useColorModeValue, Center } from '@chakra-ui/react'
import { BiDownArrow, BiDownArrowAlt } from 'react-icons/bi'
import * as React from 'react'

export const StatCard = (props) => {
  const { value, title} = props
  return (
    <Box bg="white" boxShadow="lg" bg="white" rounded="2xl" {...props}>
        <Flex flex="1" p="6" mr="4" color="white" bg="#ae262b" w="100%" borderTopRadius="2xl">
            <Text fontSize="lg" fontWeight="bold" mb="4" lineHeight="1">
                {value}
            </Text>
        </Flex>
        <Text  p="6"  color={useColorModeValue('gray.900', 'white')}>{title}</Text>
    </Box>
  )
}
