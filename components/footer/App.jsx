import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaHeart } from 'react-icons/fa'

import { SocialLink } from './SocialLink'
import { links, socialLinks } from './_data'
import { LinkGroup } from './LinkGroup'
import { SubscribeForm } from './SubscribeForm'

const App = () => (
  <Box as="footer" bg="#313131">
    <Box
      maxW={{
        base: 'xl',
        md: '7xl',
      }}
      mx="auto"
      px={{
        base: '6',
        md: '8',
      }}
      py={{
        base: '12',
        md: '20',
      }}
    >
      <Flex
        direction={{
          base: 'column',
          lg: 'row',
        }}
        justify="space-between"
        mb={{
          base: '10',
          lg: '16',
        }}
        align="flex-start"
        id="top"
      >
        <SimpleGrid
          flex="1"
          w={{
            base: 'full',
            lg: 'auto',
          }}
          maxW={{
            lg: '2xl',
          }}
          columns={{
            base: 1,
            md: 2,
            lg: 4,
          }}
          spacing={{
            base: '12',
            md: '10',
          }}
          fontSize="sm"
          marginEnd={{
            md: '4',
            lg: '16',
          }}
        >
          {links.map((group, idx) => (
            <LinkGroup key={idx} data={group} />
          ))}
        </SimpleGrid>
       {/* <Box
          flex="2"
          maxW={{
            lg: '420px',
          }}
          ml={{
            lg: 'auto',
          }}
          fontSize="sm"
          mt={{
            base: '12',
            lg: 0,
          }}
        >
          <Text
            casing="uppercase"
            mb={{
              base: 6,
              lg: 10,
            }}
            fontWeight="bold"
            letterSpacing="wide"
          >
            Subscribe to our newsletter!
          </Text>
          <Text lineHeight="tall">
            Get Overflow resources, curated content, and design inspiration delivered straight into
            your inbox. Be the first to learn the news about new features and product updates.
          </Text>
          <SubscribeForm />
        </Box>*/}
      </Flex>

      <Flex
        color="white"
        direction={{
          base: 'column-reverse',
          lg: 'row',
        }}
        align={{
          base: 'flex-start',
          lg: 'center',
        }}
        justify="space-between"
        fontSize="sm"
      >
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={{
            base: '4',
            md: '12',
          }}
          mt={{
            base: '8',
            lg: 0,
          }}
          w={{
            base: 'full',
            lg: 'auto',
          }}
          justify={{
            base: 'space-between',
            lg: 'flex-start',
          }}
          align={{
            base: 'flex-start',
            md: 'center',
          }}
        >
          {/*Logo*/}
          <HStack
            spacing="2"
            mt={{
              lg: '8',
            }}
            as="ul"
            listStyleType="none"
          >
            {socialLinks.map((link, idx) => (
              <Box as="li" key={idx}>
                <SocialLink href={link.href}>
                  <Box srOnly>{link.label}</Box>
                  {link.icon}
                </SocialLink>
              </Box>
            ))}
          </HStack>
        </Stack>
        <Box color="white">
          <Text mt="2">
            Made with <Heart /> by VinMaker Society.
          </Text>
        </Box>
      </Flex>
    </Box>
    {/*Create the Red line */}
    <Box
        pos="absolute"
        bg="#ae262b"
        w="100%"
        h="50px"
    >
    </Box>
    {/*Create the Blue line */}
    <Box
        pos="absolute"
        right="0"
        bg="#2d4d73"
        w="20%"
        h="83px"
        bottom="-50"
        transformOrigin="top left"
    >
    </Box>
    <Box
        pos="absolute"
        right="0"
        bg="#2d4d73"
        w="45%"
        h="83px"
        bottom="-50"
        transformOrigin="top left"
        transform="skew(-17deg, 0deg)"
    >
    </Box>
  </Box>
)

const Heart = () => (
  <Box
    display="inline-block"
    mx="1"
    color="#ae262b"
    fontSize="xs"
    role="img"
    aria-label="Love"
    as={FaHeart}
  />
)

export default App;