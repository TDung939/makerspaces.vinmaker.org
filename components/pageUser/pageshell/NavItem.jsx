import { Box, HStack, } from '@chakra-ui/react'
import * as React from 'react'
import { BsCaretRightFill } from 'react-icons/bs'

export const NavItem = (props) => {
  const { active, subtle, icon, children, label, endElement, onChange, pageView } = props

  function handleChange(view) {
    // Here, we invoke the callback with the new value
    props.onChange(view);
  }
  
  return (
    <HStack
      _selected='gray.700'
      w="full"
      px="3"
      py="2"
      cursor="pointer"
      userSelect="none"
      rounded="md"
      transition="all 0.2s"
      bg={active ? 'gray.700' : undefined}
      _hover={{
      }}
      _active={{
      }}
      onClick={() => {handleChange(pageView)}}
    >
      <Box fontSize="lg" color={active ? 'currentcolor' : '#2A5FFF'}>
        {icon}
      </Box>
      <Box flex="1" fontWeight="inherit" color={subtle ? 'gray.400' : undefined}>
        {label}
      </Box>
      {endElement && !children && <Box>{endElement}</Box>}
      {children && <Box fontSize="xs" flexShrink={0} as={BsCaretRightFill} />}
    </HStack>
  )
}
