import { Box, chakra, Flex, Icon, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

const DesktopNavLink = (props) => {
  const { active, ...rest } = props
  return (
    <chakra.a
      href="#"
      aria-current={active ? 'page' : undefined}
      fontWeight="semibold"
      {...rest}
      _activeLink={{
        color: "mode('blue.600', 'blue.300')",
        fontWeight: 'bold',
      }}
    />
  )
}

const MobileNavLink = (props) => {
  const { icon, children, href } = props
  return (
    <Flex
      as="a"
      href={href}
      m="-3"
      p="3"
      align="center"
      rounded="md"
      cursor="pointer"
      _hover={{
        bg: mode('gray.50', 'gray.600'),
      }}
    >
      <Icon as={icon} color="#2A5FFF" fontSize="xl" />
      <Box marginStart="3" fontWeight="medium">
        {children}
      </Box>
    </Flex>
  )
}

export const NavLink = {
  Desktop: DesktopNavLink,
  Mobile: MobileNavLink,
}
