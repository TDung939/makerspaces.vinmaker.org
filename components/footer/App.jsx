import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import * as React from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { SocialButton } from './SocialButton'
import { footerLinks, links, socialLinks } from './_data'

const App = () => {
const {colorMode, toggleColorMode} = useColorMode()
const {colorTheme} = useColorModeValue('Light theme', 'Dark theme')
return (
  <Box as="footer"  color="black" py="64px" bg='white'>
    <Box maxW="7xl" px="8" mx="auto">
      <Flex
        direction={{
          base: 'column',
          lg: 'row',
        }}
        justify="space-between"
        pb="8"
        align="flex-start"
        id="top"
      >
        <Box
          paddingEnd="12"
          mb={{
            base: '10',
            lg: 0,
          }}
        >
          <Img src='/Logo.svg' height='100' />
          <HStack spacing="4" mt="8" as="ul">
            {socialLinks.map((link, idx) => (
              <SocialButton key={idx} href={link.href}>
                <Box srOnly>{link.label}</Box>
                {link.icon}
              </SocialButton>
            ))}
          </HStack>
        </Box>
        <SimpleGrid
          w="full"
          maxW={{
            base: 'unset',
            lg: '2xl',
          }}
          columns={{
            base: 2,
            lg: 4,
          }}
          spacing={{
            base: '8',
            md: '4',
          }}
          fontSize="sm"
        >
          {links.map((group, idx) => (
            <Box key={idx}>
              <Text fontWeight="bold" mb="4" fontFamily='Space Mono'>
                {group.title}
              </Text>
              <Stack as="ul" listStyleType="none">
                {group.links.map((link, idx) => (
                  <Box as="li" key={idx} fontFamily='Space Mono'>
                    <Box
                      as="a"
                      href={link.href}
                      _hover={{
                        textDecor: 'underline',
                      }}
                    >
                      {link.label}
                      {link.badge && (
                        <Box as="span" marginStart="2">
                          {link.badge}
                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
      <Divider my="10" borderColor="gray.300" />
      <Flex
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
        <Wrap
          id="bottom"
          spacing={{
            base: '4',
            lg: '8',
          }}
          mt={{
            base: '4',
            lg: '0',
          }}
        >
          <WrapItem>
            <Box>&copy; {new Date().getFullYear()} VinMaker Society</Box>
          </WrapItem>
          {footerLinks.map((link, idx) => (
            <WrapItem key={idx}>
              <Box as="a" href={link.href}>
                {link.label}
              </Box>
            </WrapItem>
          ))}
        </Wrap>
        {/* <LanguageSwitcher />
         */}
          {/* <Button size="sm" onClick={toggleColorMode}>
            {colorMode} mode
          </Button> */}
      </Flex>
    </Box>
  </Box>
)}
export default App;