import { Box, Heading, List, ListItem, ListIcon, Stack, Radio, RadioGroup, Button } from '@chakra-ui/react'
import * as React from 'react'
import { useState } from 'react'
const App = ({props, score, onChange}) => {
    const [value, setValue] = useState("");
    const [submitted, setSubmited] = useState(false)
    function handleChange(score) {
        // Here, we invoke the callback with the new value
        onChange(score);
      }
    let correct;
    const checkAnswer = () => {
        console.log(value)
        console.log(props.isCorrect)
        correct = (value===props.isCorrect)
        console.log(correct)
        setSubmited(true)
        if (value===props.isCorrect) {
            handleChange(score+1)
        }
    };
    return (
        <Box my="50">
            <Heading fontSize="md" mb="5">
                {props.question}
            </Heading>
            
            <RadioGroup onChange={setValue} value={value}>
                <Stack >
                    <Radio isDisabled={submitted} value="answer_1">{props.answer_1}</Radio>
                    <Radio isDisabled={submitted} value="answer_2">{props.answer_2}</Radio>
                    <Radio isDisabled={submitted} value="answer_3">{props.answer_3}</Radio>
                    <Radio isDisabled={submitted} value="answer_4">{props.answer_4}</Radio>
                </Stack>
                </RadioGroup>
            <Button mt="10" onClick={checkAnswer} isDisabled={submitted}>
                Submit
            </Button>
        </Box>
    )
}

export default App