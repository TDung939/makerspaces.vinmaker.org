import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import * as React from 'react'
import Link from 'next/link'
import { HiShieldCheck } from 'react-icons/hi'
import { Card } from './Card'
import Select from 'react-select'
import { useQuery, useQueryClient } from 'react-query'
import { fetchAPI } from '../../../lib/api'
import { useState } from 'react'
import { getStrapiMedia } from '../../../lib/media'

const getBadges = async(key) => {

  const levelType = key.queryKey[1].level
  const machineId = key.queryKey[2].machine
  console.log(key);
  if(levelType && machineId) {
    const badgesData = await fetchAPI(`/badges?machines.id=${machineId}&level=${levelType}`)
    return badgesData
  }
  if(machineId) {
    const badgesData = await fetchAPI(`/badges?machines.id=${machineId}`)
    return badgesData
  }
  if(levelType) {
    const badgesData = await fetchAPI(`/badges?level=${levelType}`)
    return badgesData
  }

  const badgesData = await fetchAPI("/badges")
  return badgesData
} 

const App = ({badges, machines}) => {
  const queryClient = useQueryClient();

  const [levelType, setLevelType] = useState(null)
  const [machineId, setMachineId] = useState(null)
  const {data, status} = useQuery(['badges', {level: levelType}, {machine: machineId}], getBadges, {initialData: badges})

  return (
  <Box as="section" py="12" ml="50" maxW={{
    base: 'xl',
    md: '7xl',
  }}
  mx='auto'>
    <Flex>
    <Stack w='sm' mr={16}>
      <Select
      getOptionLabel={option => `${option.name}`}
      getOptionValue={option => option.id}
      options={machines}
      instanceId='machines'
      isClearable
      placeholder='Filter by Machines' 
      onChange={value => setMachineId(value? value.id : null)}
      />
      <Select 
        getOptionValue={option => option.value}
        options={[
          { value: 'entry', label: 'Entry' },
          { value: 'intermediate', label: 'Intermediate' },
          { value: 'advanced', label: 'Advanced' }
        ]}
        instanceId='level'
        isClearable
        placeholder='Filter by Level' 
        onChange={value => setLevelType(value? value.value : null)}
      />
    </Stack>
    <SimpleGrid 
      columns={{
        md: "2",
        base: "1"
      }} 
      spacing={10}
    >
      {data.map((badge, i) => {
        const badge_image = badge.displayImage? getStrapiMedia(badge.displayImage) : ''
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
                bg={badge_image!==''? 'transparent':'#2A5FFF'}
                size="2xl"
                src={badge_image}
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
              <Text mt="2" textTransform="capitalize">{badge.level} Level</Text>
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
    </Flex>
  </Box>
)}

export default App;