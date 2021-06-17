import {
    Avatar,
    Box,
    Button,
    Checkbox,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    StackDivider,
    Text,
    Textarea,
    useColorModeValue,
    VStack,
    useToast,
    InputGroup,
    InputLeftElement,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { HiCloudUpload } from 'react-icons/hi'
  import { FaGithub, FaGoogle } from 'react-icons/fa'
  
  import {useAuth} from '../../../services/auth'
  import firebaseClient from '../../../services/firebaseClient'
  import firebase from 'firebase/app'
  import 'firebase/auth'
  
  import {useState} from 'react'
  
  const App = () => {
    const toast = useToast();
    const {user} = useAuth();
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState(null);
    return (
    <Box
      px={{
        base: '4',
        md: '10',
      }}
      py="16"
      maxWidth="3xl"
      mx="auto"
    >
      Help and Support (Coming Soon)
    </Box>
  )}
  
  export default App;