import { Box, Stack, Button, Text, HStack } from '@chakra-ui/react'
import * as React from 'react'
import { Step } from './Step'
import { StepContent } from './StepContent'
import { Steps } from './Steps'
import { useSteps } from './useSteps'
import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'

const App = (props) => {
  // const { nextStep, prevStep, reset, activeStep } = useSteps({
  //   initialStep: 2,
  // })
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
              You will need to follow the link to the Learning Module page where you will find information about using the related machines, please complete the quizzes thoroughly to earn the Online Badge.
              </Text>
              {/* <HStack>
                <Button size="sm" variant="ghost" isDisabled>
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Next
                </Button>
              </HStack> */}
            </Stack>
          </StepContent>
        </Step>
        <Step title="Book Hands-on Training session">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
                You will need to book an offline session to get familiar with the machines and learn safety procedures when operating.
              </Text>
              {/* <HStack>
                <Button size="sm" onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Next
                </Button>
              </HStack> */}
            </Stack>
          </StepContent>
        </Step>
        <Step title="Finish Hands-on Training to gain access">
          <StepContent>
            <Stack shouldWrapChildren spacing="4">
              <Text>
              Learn practical machine and workshop skills in this 3 hour group badge training session. This badge training session is assessed and if you are deemed competent you will receive your badge.
              </Text>
              {/* <HStack>
                <Button size="sm" onClick={prevStep} variant="ghost">
                  Back
                </Button>
                <Button size="sm" onClick={nextStep}>
                  Finish
                </Button>
              </HStack> */}
            </Stack>
          </StepContent>
        </Step>
      </Steps>
      {/* <HStack display={activeStep === 3 ? 'flex' : 'none'} mt="10" spacing="4" shouldWrapChildren>
        <Text>All steps completed - you&apos;re finished</Text>
        <Button size="sm" onClick={reset} variant="outline" verticalAlign="baseline">
          Reset
        </Button>
      </HStack> */}
    </Box>
  )
}
export default App