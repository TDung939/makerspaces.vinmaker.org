import {
  Avatar,
  Box,
  Button,
  Img,
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
import { FieldGroup } from './FieldGroup'
import { LanguageSelect } from './LanguageSelect'
import AuthContext from '../../../../context/AuthContext'
import { useContext, useState } from 'react'

const App = () => {
  const {user} = useContext(AuthContext)
  const toast = useToast();
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  return (
  <Box
    py="12"
    maxWidth="4xl"
    mx="auto"
  >
    <form
      id="settings-form"
      onSubmit={(e) => {
        e.preventDefault() // form submit logic
      }}
    >
      <Stack spacing="4" divider={<StackDivider />}>
        <Heading size="lg" as="h1" paddingBottom="4">
          Account Settings
        </Heading>
        <FieldGroup title="Profile Photo">
          <Stack direction="row" spacing="6" align="center" width="full" pos='relative'>
            {/* <Img src='/helmet.png' pos='absolute' height='50px' zIndex='2' top='-0.5' left='9' /> */}
            <Avatar
              bg='transparent'
              borderWidth='2px'
              borderColor='#2A5FFF'
              size="xl"
              name={user? user.username : ""}
              src={user?.photoURL? user.photoURL : `https://avatars.dicebear.com/api/croodles/${user?.username}.svg`}
            />
            <Box>
              <HStack spacing="5">
                <FormControl id="avatar">
                  <FormLabel>Change Avatar</FormLabel>
                
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<HiCloudUpload />}
                  />
                  <Input 
                  type="file"
                  id="uploadAvatar"
                  placeholder="Change Avatar" 
                  variant="ghost" 
                  onChange={(e) => setAvatar(e.target.files[0])}
                  />
                </InputGroup>
                </FormControl>
                <Button 
                  variant="ghost" 
                  colorScheme="red" 
                  onClick={() => {document.getElementById('uploadAvatar').value=""}}
                >
                  Delete
                </Button>
              </HStack>
              <Text fontSize="sm" mt="3" color={useColorModeValue('gray.500', 'whiteAlpha.600')}>
                .jpg, .gif, or .png. Max file size 700K.
              </Text>
            </Box>
          </Stack>
        </FieldGroup>

        <FieldGroup title="Personal Info">
          <VStack width="full" spacing="6">
            <FormControl id="fullname">
              <FormLabel>Full Name</FormLabel>
              <Input 
                onChange={(e) => setName(e.target.value)}
                id="fullName"
                type="text"
                maxLength={255} 
                value={name}
                placeholder={user? user.username : ""}
                />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" isReadOnly placeholder={user? user.email : ""} />
            </FormControl>

            <FormControl id="bio">
              <FormLabel>Bio</FormLabel>
              <Textarea rows={5} />
              <FormHelperText>
                Brief description for your profile. URLs are hyperlinked.
              </FormHelperText>
            </FormControl>
          </VStack>
        </FieldGroup>

        <FieldGroup title="Language">
          <VStack width="full" spacing="6">
            <LanguageSelect />
          </VStack>
        </FieldGroup>
      </Stack>
      <FieldGroup mt="8">
        <HStack width="full">
          <Button type="submit" colorScheme="blue" isDisabled={name===""}
          onClick={ async () => {
            await firebase.auth().currentUser.updateProfile({
              displayName: name,
            }).then(function() {
              window.location.href = "/user/dashboard"
            }).catch(function(error) {
              const message = error.message;
                toast({
                    title: "An error occured",
                    description: message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                })
            });
        }}
          >
            Save Changes
          </Button>
          
          <Button variant="outline" onClick={() => {
            document.getElementById('fullName').value="";
            document.getElementById('uploadAvatar').value="";
          }}
          >
            Cancel
          </Button>
        </HStack>
      </FieldGroup>
    </form>
  </Box>
)}

export default App;