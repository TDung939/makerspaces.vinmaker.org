import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'
import { HiCash, HiLocationMarker, HiShieldCheck } from 'react-icons/hi'
import { Card } from './Card'
import { CustomerReviews } from './CustomerReviews'

const App = ({badges}) => (
  <Box as="section" py="12" ml="50" maxWidth="70%">
    <SimpleGrid 
      columns={{
        md: "2",
        base: "1"
      }} 
      spacing={10}
    >
      {badges.map((badge, i) => {
        return (
        <Link as={`/badges/${badge.slug}`} href="/badges/[id]">
        <Card>
          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            spacing={{
              base: '3',
              md: '10',
            }}
            align="flex-start"
            cursor="default"
          >
            <Stack spacing="4">
              <Avatar
                size="2xl"
                src="https://res.cloudinary.com/dpec7wjtk/image/upload/v1623827515/VinMakerSpace%20Network/badges/4f5f2fc6-ed80-4377-a8a3-4f1bd05a375e_ynq9zw.png"
                name={badge.title}
              />
            </Stack>
            <Box>
              <Stack
                spacing={{
                  base: '1',
                  md: '2',
                }}
                direction={{
                  base: 'column',
                  md: 'row',
                }}
              >
                <Text as="h2" fontWeight="bold" fontSize="xl">
                  {badge.title}
                </Text>
                <HStack
                  fontSize={{
                    base: 'md',
                    md: 'lg',
                  }}
                >
                  <Icon as={HiShieldCheck} color="green.500" />
                </HStack>
              </Stack>
              <Text mt="2">{badge.level.name}</Text>
              <Box fontSize="sm" noOfLines={2}>
                  {badge.descriptions}
              </Box>
            </Box>
          </Stack>
          <Text mt="5" textAlign="right" fontSize="sm">Read more</Text>
        </Card>
        </Link>
        );
      })}
    </SimpleGrid>
  </Box>
)

export default App;