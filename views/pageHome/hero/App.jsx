import { Box, Button, Flex, Heading, HStack, Img, Stack, Text,Kbd, Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import Link from 'next/link'
import AuthContext from '../../../context/AuthContext'
import { useContext, useState, useEffect } from 'react'
import { BsArrowReturnLeft, BsSearch } from 'react-icons/bs'
import { SearchIcon } from '@chakra-ui/icons'
import Fuse from 'fuse.js';
import { BiBadge } from 'react-icons/bi'
import { FaCog, FaGraduationCap, FaUserShield } from 'react-icons/fa'

const App = ({badges, machines, makerspaces}) => {
  const {user} = useContext(AuthContext)
  useEffect(() => {
      document.addEventListener('keydown', (e) => {  
          // e.preventDefault();
          if (e.shiftKey && e.code === 'Enter') {
              onOpen();
          }  
      })
  })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const fuse_badges = new Fuse( badges, {
    keys: [
      'title',
      'descriptions'
    ]
  });

  const fuse_machines = new Fuse( machines, {
    keys: [
      'name',
      'descriptions'
    ]
  });

  const [searchText, setSearchText] = useState('')
  const results_badges = fuse_badges.search(searchText)
  const results_machines = fuse_machines.search(searchText)
  return (
    <Box mt={{base:'0', lg:'8'}} borderRadius={{base:'0', lg:'3xl'}} bg="transparent" as="section" minH="140px" position="relative" maxW='7xl' mx='auto'
    >
      <Modal isOpen={isOpen} onClose={onClose} size='2xl' scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton /> */}
          <ModalBody>
          <InputGroup w="full" pos='sticky' top='0'>
              <InputLeftElement color="#2A5FFF" fontSize='xl' pointerEvents="none">
                <SearchIcon />
              </InputLeftElement>
              <Input 
               onChange={(e) => setSearchText(e.target.value)}
               id="search"
               value={searchText}
              focusBorderColor='#00000010' borderRadius='lg' fontSize='xl' bg='white' placeholder="What are you looking for?"
              autoComplete='off'
              />
          </InputGroup>
          <Box>
            {results_badges?.map((badge, index)=>(
              <Link as={`/badges/${badge.item.slug}`} href="/badges/[slug]">
                <Box w='full' my='2' p='4' bg='white' boxShadow='md' borderRadius='lg'
                color='gray'
                _hover={{
                  bg:'#2A5FFF',
                  color:'white'
                }}
                key={index}
                cursor='pointer'
                >
                  <Flex align='center' justify='space-between'>
                  <Flex align='center'>
                      <Icon mr='4' as={FaUserShield} fontSize='3xl'/>
                      <Box>
                        <Text fontSize='sm'>badge</Text>
                        <Heading fontSize='md'>{badge.item.title}</Heading>
                      </Box>
                  </Flex>
                  <Icon as={BsArrowReturnLeft} fontSize='3xl'/>
                  </Flex>
                </Box>
                </Link>
            ))}
           
           {results_machines?.map((machine, index)=>(
              <Link as={`/machines/${machine.item.slug}`} href="/machines/[slug]">
                <Box w='full' my='2' p='4' bg='white' boxShadow='md' borderRadius='lg'
                color='gray'
                _hover={{
                  bg:'#2A5FFF',
                  color:'white'
                }}
                key={index}
                cursor='pointer'
                >
                  <Flex align='center' justify='space-between'>
                  <Flex align='center'>
                      <Icon mr='4' as={FaCog} fontSize='3xl'/>
                      <Box>
                        <Text fontSize='sm'>machine</Text>
                        <Heading fontSize='md'>{machine.item.name}</Heading>
                      </Box>
                  </Flex>
                  <Icon as={BsArrowReturnLeft} fontSize='3xl'/>
                  </Flex>
                </Box>
                </Link>
            ))}
          </Box>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
      <Box py="24" position="relative" zIndex={1}>
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
          color="white"
        >
          <Box maxW="2xl">
            <Heading fontFamily='Space mono' as="h1" size="2xl">
              VinUniversity Makerspace Network
            </Heading>
            <Text
              fontSize={{
                md: '2xl',
              }}
              mt="4"
              maxW="lg"
            >
              A Project by VinMaker Society
            </Text>
            <Button
            onClick={onOpen}
            bg='white'
            mt='4'
            borderColor='gray.100'
            boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)'
            outline='2px solid transparent'
            borderRadius='md'
            _hover={{}}
            color='gray.400'
            >
              <BsSearch/>
              <Flex px='4' justify='space-between'>
                <Text overflow='hidden' mr='8' fontWeight='thin'>Search for machines, makerspaces, resources,...</Text>
                <span>
                  <Kbd>shift</Kbd> + <Kbd>Enter</Kbd>
                </span>
              </Flex>
            </Button>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              mt="10"
              spacing="4"
            >
              <Link href="#">
                <Button
                  href="#"
                  color="white"
                  bg="#161616"
                  _hover={{
                    bg: '#161616',
                  }}
                  borderRadius='25px 0 0 0'
                  px="8"
                  size="lg"
                  fontSize="md"
                  fontWeight="bold"
                >
                  EXPLORE
                </Button>
              </Link>
              <Link href={user? "/user/dashboard": "/login"}>
                <HStack
                  bg="#2A5FFF"
                  cursor="pointer"
                  as="a"
                  transition="background 0.2s"
                  justify={{
                    base: 'center',
                    md: 'flex-start',
                  }}
                  color="white"
                  borderRadius='0 25px 0 0'
                  fontWeight="bold"
                  px="6"
                  py="3"
                >
                  <span>{user? "GO TO MAKER PORTAL": "LOGIN TO MAKER PORTAL"}</span>
                  <HiChevronRight />
                </HStack>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
        borderRadius={{base:'0', lg:'3xl'}}
      >
        <Box position="relative" w="full" h="full" borderRadius={{base:'0', lg:'3xl'}}>
          <Img
            src="/hero.png"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box borderRadius={{base:'0', lg:'3xl'}} position="absolute" w="full" h="full" bg="#2A5FFF90" />
        </Box>
      </Flex>
    </Box>
  )
}

export default App;