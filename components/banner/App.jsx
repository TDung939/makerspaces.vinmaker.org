import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { CallToActionLink } from './CallToActionLink'
import { CloseButton } from './CloseButton'
import {useState} from 'react'
import Link from 'next/link'

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false); 
  return (
  <Box as="section" hidden={isOpen}>
    <Box
      bgGradient="linear(to-r, #E94560, #3952F5)"
      color="white"
      py="3"
      px={{
        base: '3',
        md: '6',
        lg: '8',
      }}
    >
      <HStack spacing="3">
        <Stack
          direction={{
            base: 'column',
            sm: 'row',
          }}
          justifyContent="center"
          alignItems="center"
          spacing={{
            base: '3',
            md: '6',
          }}
          width="full"
        >
          {/*<Text>
            <b>Did you buy a license yet? </b>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
          </Text>*/}
          <Text>
            <b>Login with Admin account to try </b> <br/>
            Email: admin@vinuni.edu.vn <br/>
            Pass: makerspace
          </Text>
          <Link href="/login">
            <CallToActionLink
              textAlign="center"
              width={{
                base: 'full',
                sm: 'auto',
              }}
            >
              Login
            </CallToActionLink>
          </Link>
        </Stack>
        <CloseButton
          alignSelf={{
            base: 'self-start',
            sm: 'initial',
          }}
          aria-label="Close banner"
          onClick={() => setIsOpen(true)}
        />
      </HStack>
    </Box>
  </Box>
  )
}

export default Banner