import {
  useToast,
  Stack,
  chakra,
  Button,
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { PasswordField } from './PasswordField'

import axios from 'axios'
import {useState, useContext, useEffect} from 'react'
import AuthContext from '../../context/AuthContext'

export const LoginForm = React.forwardRef((props, ref) => {
  const toast = useToast();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {register, error } = useContext(AuthContext);
  useEffect(() => error && toast({title: "An error has occured", status: "error"}))

  const handleSubmit = (e) => {
    e.preventDefault()
    register({username, email, password})
  }
  const { isOpen, onToggle } = useDisclosure()
  const inputRef = React.useRef(null)
  const mergeRef = useMergeRefs(inputRef, ref)

  const onClickReveal = () => {
    onToggle()
    const input = inputRef.current

    if (input) {
      input.focus({
        preventScroll: true,
      })
      const length = input.value.length * 2
      requestAnimationFrame(() => {
        input.setSelectionRange(length, length)
      })
    }
  }

  return (
    <chakra.form
      onSubmit={(e) => {
        e.preventDefault() // your login logic here
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl id="name">
          <FormLabel>Full Name</FormLabel>
          <Input 
          onChange={(e) => setUsername(e.target.value)}
          type="text" 
          id="fullName"
          value={username}
          aria-describedby="name-helper-text"
          autoComplete="name" 
          required 
          />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input 
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          id="emailAddress"
          value={email}
          aria-describedby="email-helper-text"
          autoComplete="email" 
          required 
          />
        </FormControl>

        <FormControl id="password">
          <Flex justify="space-between">
            <FormLabel>Password</FormLabel>
            {/*<Box as="a" color={mode('blue.600', 'blue.200')} fontWeight="semibold" fontSize="sm">
              Forgot Password?
              </Box>*/}
          </Flex>
          <InputGroup>
            <InputRightElement>
              <IconButton
                bg="transparent !important"
                variant="ghost"
                aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                icon={isOpen ? <HiEyeOff /> : <HiEye />}
                onClick={onClickReveal}
              />
            </InputRightElement>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="pass"
              value={password}
              aria-describedby="password-helper-text"
              ref={mergeRef}
              name="password"
              type={isOpen ? 'text' : 'password'}
              autoComplete="current-password"
              required
              {...props}
            />
          </InputGroup>
        </FormControl>
        <Button 
          type="submit" 
          color="white"
          bg="#ae262b"
          _hover={{ bg: "#9d2227" }} 
          size="lg" 
          fontSize="md"
          isDisabled={email === "" || password === ""}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Stack>
    </chakra.form>
  )
})
