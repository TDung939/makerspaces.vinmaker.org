
import { Flex, IconButton, HStack, Avatar, Text, Box } from '@chakra-ui/react'

import * as React from 'react'

export const UserProfile = (props) => {
  const { name, email, avatarUrl } = props
  return (
    <Box>
      <Flex
        order={{
          base: 2,
          md: 1,
        }}
      >
      </Flex>
      <HStack
        spacing={3}
        order={{
          base: 1,
          md: 2,
        }}
        flex="1"
      >
        <Avatar name={name} src={avatarUrl} size="md" />
        {/* <Flex
          direction="column"
          display={{
            base: 'flex',
            md: '1',
          }}
        >
          <Text fontWeight="bold" lineHeight="shorter">
            {name}
          </Text>
          <Text fontSize="sm" lineHeight="shorter" opacity={0.7}>
            {email}
          </Text>
        </Flex> */}
      </HStack>
    </Box>
  )
}