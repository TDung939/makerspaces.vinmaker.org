import {Box, SimpleGrid, Button, Heading, Img} from '@chakra-ui/react'
import * as React from 'react'
import AuthContext from '../../../../context/AuthContext'
import { useContext, useState } from 'react'
import { CardWithAvatar } from './CardWithAvatar'
import { BadgeInfo } from './BadgeInfo'
import { getStrapiMedia } from '../../../../lib/media'

const App = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
  <Box
    py="12"
    maxWidth="4xl"
    mx="auto"
  >
    <Heading size="lg" as="h1" paddingBottom="4">
          Completed Modules
    </Heading>
    <SimpleGrid
        columns={{
          base: 1,
          md: 3,
        }}
        spacing="6"
      >
        
      {user? user.modules_completed.map((module) => {
            const name = module.title
            const module_image = module.displayImage? getStrapiMedia(module.displayImage) : ''
            return (
              // <CardWithAvatar
              //     key={badge.title}
              //     avatarProps={{
              //       name,
              //       src
              //     }}
              //   >
              //     {/* <BadgeInfo name={name} bio={badge.descriptions} isVerified="true" /> */}
              //   </CardWithAvatar>
              <Img src={module_image} height='240px' objectFit='contain'/>
            );
          })
      : null  
      }

      </SimpleGrid>
  </Box>
)}
  
export default App;