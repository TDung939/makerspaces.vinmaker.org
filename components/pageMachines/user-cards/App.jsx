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

const App = ({machines}) => (
  <Box as="section" py="12" ml="50" maxWidth="70%">
    <SimpleGrid 
      columns={{
        md: "2",
        base: "1"
      }} 
      spacing={10}
    >
      {machines.map((machine, i) => {
        return (
        <Link as={`/machines/${machine.slug}`} href="/machines/[id]">
        <Card width="100%">
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
                src="https://res.cloudinary.com/dpec7wjtk/image/upload/v1623827197/VinMakerSpace%20Network/badges/badge-makerspace-safety-induction_vzdccd.png"
                name={machine.name}
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
                  {machine.name}
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
              <Box fontSize="sm" noOfLines={2}>
                  {machine.descriptions}
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