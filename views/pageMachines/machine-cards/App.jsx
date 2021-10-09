import {
  Avatar,
  Box,
  Button,
  Flex,
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
import { getStrapiMedia } from '../../../lib/media'
import Select from 'react-select'
import { useQuery, useQueryClient } from 'react-query'
import { fetchAPI } from '../../../lib/api'
import { useState } from 'react'

const getMachines = async(key) => {
  console.log(key);
  const processId = key.queryKey[1].process
  const materialId = key.queryKey[2].material
  if(processId && materialId) {
    const machinesData = await fetchAPI(`/machines?processes.id=${processId}&suitable_materials.id=${materialId}`)
    return machinesData
  }
  if(processId) {
    const machinesData = await fetchAPI(`/machines?processes.id=${processId}`)
    return machinesData
  }
  if(materialId) {
    const machinesData = await fetchAPI(`/machines?suitable_materials.id=${materialId}`)
    return machinesData
  }
  const machinesData = await fetchAPI("/machines")
  return machinesData
}

const App = ({machines, processes, badges, materials}) => {

  const queryClient = useQueryClient();

  const [processId, setProcessId] = useState(null)
  const [materialId, setMaterialId] = useState(null)
  const {data, status} = useQuery(['machines', {process: processId}, {material: materialId}], getMachines, {initialData: machines})

  return (
  <Box as="section" py="12" maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx='auto'
          >
    <Flex
    px={{base:'6', lg:'0'}}
    direction={{base:'column', lg:'row'}}
    >
    <Box>
    <Box pos='sticky' top='32'>
    <Stack w={{base:'xs', lg:'sm'}} mr={{base: 0, lg: 16}} mb='12'>
      <Select
      getOptionLabel={option => `${option.name}`}
      getOptionValue={option => option.id}
      options={processes}
      instanceId='processes'
      isClearable
      placeholder='Filter by Processes' 
      onChange={value => setProcessId(value? value.id : null)}
      />
      <Select
      getOptionLabel={option => `${option.name}`}
      getOptionValue={option => option.id}
      options={materials}
      instanceId='materials'
      isClearable
      placeholder='Filter by Materials' 
      onChange={value => setMaterialId(value? value.id : null)}
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
      {data.map((machine, i) => {
        return (
        <Link as={`/machines/${machine.slug}`} href="/machines/[slug]">
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
            cursor="pointer"
          >
            <Stack spacing="4">
              <Avatar
                borderColor='#2A5FFF'
                borderWidth='2px'
                bg='transparent'
                size="2xl"
                src={machine?.displayImage? getStrapiMedia(machine?.displayImage) : ''}
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
          <Text cursor='pointer' mt="5" textAlign="right" fontSize="sm">Read more</Text>
        </Card>
        </Link>
        );
      })}
    </SimpleGrid>
    </Flex>
  </Box>
)
}

export default App;