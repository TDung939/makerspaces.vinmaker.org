
import { ChakraProvider} from "@chakra-ui/react"

import NavBar from '../components/navbar/App'
import SignUp from '../components/pageSignUp/App'

import Footer from '../components/footer/App'



export default function Home() {
  return (
    <ChakraProvider>
        <NavBar />
        <SignUp />
        <Footer />
    </ChakraProvider>
  )
}
