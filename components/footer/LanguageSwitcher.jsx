import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import * as React from 'react'

export const LanguageSwitcher = () => (
  <FormControl w="auto" display="flex" alignItems="center">
    <FormLabel mb="1" fontSize="sm" fontWeight="normal">
      Language:
    </FormLabel>
    <Select
      w="120px"
      flexShrink={0}
      fontSize="inherit"
      fontWeight="bold"
      variant="unstyled"
      id="lang"
      name="lang"
      defaultValue="English"
    >
      <option value="English">English</option>
      <option value="Vietnamese">Vietnamese</option>
    </Select>
  </FormControl>
)
