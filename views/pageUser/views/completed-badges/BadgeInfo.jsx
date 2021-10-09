import { Icon, Text, VStack } from '@chakra-ui/react'
import * as React from 'react'
import { HiBadgeCheck } from 'react-icons/hi'

export const BadgeInfo = (props) => {
  const { name, bio, isVerified, ...stackProps } = props
  return (
    <VStack spacing="1" flex="1" {...stackProps}>
        <Text textAlign="center" fontWeight="bold">{name} {isVerified && <Icon as={HiBadgeCheck} color="green.300" verticalAlign="text-bottom" />}</Text>
    </VStack>
  )
}
