import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import * as React from 'react'

export const LanguageSelect = (props) => (
  <FormControl id="language">
    <FormLabel>Display Language</FormLabel>
    <Select maxW="2xs" {...props}>
      <option>English</option>
      <option>Vietnamese (Comming soon)</option>
    </Select>
  </FormControl>
)
