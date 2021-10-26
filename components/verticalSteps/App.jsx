import { Box, Stack, Button, Text, HStack } from '@chakra-ui/react'
import * as React from 'react'
import { Step } from './Step'
import { StepContent } from './StepContent'
import { Steps } from './Steps'
import { useSteps } from './useSteps'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'

const App = (props) => {

  const {user} = useContext(AuthContext)
  console.log(props.active);

  return (
    <Box
      mx="auto"
      maxW="2xl"
      py="10"
      px={{
        base: '6',
        md: '8',
      }}
      minH="400px"
    >
      <Steps activeStep={props.active}>
        <Step title="Complete Online Components">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
              You will find information about using the related machines below, please complete the quizz thoroughly to be able to book a hands-on session.
              </Text>
           
            </Stack>
          </StepContent>
        </Step>
        <Step title="Book & Finish Hands-on Training session to gain access">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
                You will need to book an offline training session to get familiar with the machines and learn safety procedures when operating. This training session is assessed and if you are deemed competent you will receive your qualification badge.
              </Text>
           
            </Stack>
          </StepContent>
        </Step>
        <Step title="Feedback on the training">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
              Congratulations on finishing your training! Please provide your feedback here! Feedback is fun! Feedback is useful! Feedback or we take away your badge. Just Kidding 😛
              </Text>
             
            </Stack>
          </StepContent>
        </Step>
      </Steps>
     
    </Box>
  )
}
export default App