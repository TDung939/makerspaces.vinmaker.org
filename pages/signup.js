
import { ChakraProvider} from "@chakra-ui/react"
import NavBar from '@/components/navbar/App'
import SignUp from '@/views/pageSignUp/App'
import Footer from '@/components/footer/App'
import Seo from "@/components/Seo"



export default function Home() {
  return (
    <ChakraProvider>
        <Seo />
        <NavBar />
        <SignUp />
        <Footer />
    </ChakraProvider>
  )
}
