import { Box, Stack, Avatar } from '@chakra-ui/react'
import * as React from 'react'
import { getStrapiMedia } from '../../lib/media'

export const User = (props) => {
  const { profile_picture, name, email } = props.data
  const profilePicture = profile_picture? getStrapiMedia(profile_picture) : ''
  return (
    <Stack direction="row" spacing="4" align="center">
      <Box flexShrink={0} h="10" w="10">
        <Avatar
          name={name}
          objectFit="cover"
          w="10"
          h="10"
          src={profilePicture}
        />
      </Box>
      <Box>
        <Box fontSize="sm" fontWeight="medium">
          {name}
        </Box>
        <Box fontSize="sm" color="gray.500">
          {email}
        </Box>
      </Box>
    </Stack>
  )
}
