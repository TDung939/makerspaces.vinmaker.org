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

const getModules = async(key) => {

  const levelType = key.queryKey[1].level
  const machineId = key.queryKey[2].machine
  console.log(key);
  if(levelType && machineId) {
    const modulesData = await fetchAPI(`/modules?machines.id=${machineId}&level=${levelType}`)
    return modulesData
  }
  if(machineId) {
    const modulesData = await fetchAPI(`/modules?machines.id=${machineId}`)
    return modulesData
  }
  if(levelType) {
    const modulesData = await fetchAPI(`/modules?level=${levelType}`)
    return modulesData
  }

  const modulesData = await fetchAPI("/modules")
  return modulesData
} 

const App = ({modules, machines}) => {
  const queryClient = useQueryClient();

  const [levelType, setLevelType] = useState(null)
  const [machineId, setMachineId] = useState(null)
  const {data, status} = useQuery(['modules', {level: levelType}, {machine: machineId}], getModules, {initialData: modules})

  return (
  <Box as="section" py="12" ml="50" maxW={{
    base: 'xl',
    md: '7xl',
  }}
  pos='relative'
  mx='auto'>
    <Flex
    pos='relative'
     px={{base:'6', lg:'0'}}
     direction={{base:'column', lg:'row'}}
    >
    <Box>
    <Box pos='sticky' top='32'>
      <Stack 
      w={{base:'xs', lg:'sm'}} 
      mr={{base: 0, lg: 16}} 
      mb='12'
      >
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
    </Box>
    </Box>

    <SimpleGrid 
      columns={{
        md: "2",
        base: "1"
      }} 
      spacing={10}
    >
      {data?.map((module, i) => {
        const module_image = module.displayImage? getStrapiMedia(module.displayImage) : ''
        return (
        <Link as={`/modules/${module.slug}`} href="/modules/[slug]">
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
                bg={module_image!==''? 'transparent':'#2A5FFF'}
                size="2xl"
                src={module_image}
                name={module.title}
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
                  {module.title}
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
              <Text mt="2" textTransform="capitalize">{module.level} Level</Text>
              <Box fontSize="sm" noOfLines={2}>
                  {module.descriptions}
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