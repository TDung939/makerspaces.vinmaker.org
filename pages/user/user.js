import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '../../components/navbar/App'
import UserInfo from '../../components/pageUser/App'
import Footer from '../../components/footer/App'

export default function Home() {
  return (
    <ChakraProvider>
      <NavBar />
      <UserInfo />
      <Footer />
    </ChakraProvider>
  )
}
