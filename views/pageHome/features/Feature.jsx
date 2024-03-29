import { Box, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const Feature = (props) => {
  const { title, children, icon } = props
  return (
    <Box>
      <Box color="#2A5FFF" fontSize="5xl">
        {icon}
      </Box>
      <Stack mt="6">
        <Text as="h3" color="black" fontSize="xl" fontWeight="extrabold">
          {title}
        </Text>
        <Text pr="6" lineHeight="tall">
          {children}
        </Text>
      </Stack>
    </Box>
  )
}
export default Feature
