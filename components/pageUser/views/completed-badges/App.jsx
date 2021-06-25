import {Box, SimpleGrid, Button, Heading} from '@chakra-ui/react'
import * as React from 'react'
import AuthContext from '../../../../context/AuthContext'
import { useContext, useState } from 'react'
import { CardWithAvatar } from './CardWithAvatar'
import { BadgeInfo } from './BadgeInfo'

const App = () => {
  const {user} = useContext(AuthContext)
  return (
  <Box
    px={{
      base: '4',
      md: '10',
    }}
    py="16"
    maxWidth="3xl"
    mx="auto"
  >
    <Heading size="lg" as="h1" paddingBottom="4">
          Completed Badges
    </Heading>
    <SimpleGrid
        columns={{
          base: 1,
          md: 3,
        }}
        spacing="6"
      >
        
      {user? user.badges.map((badge) => {
            const name = badge.title
            return (
              <CardWithAvatar
                  key={badge.title}
                  avatarProps={{
                    name,
                  }}
                >
                  <BadgeInfo name={name} bio={badge.descriptions} isVerified="true" />
                </CardWithAvatar>
            );
          })
      : null  
      }

      </SimpleGrid>
  </Box>
)}
  
export default App;