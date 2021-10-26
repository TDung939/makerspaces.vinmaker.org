
import NavBar from '@/components/navbar/App'
import Hero from '@/views/pageHome/hero/App'
import Features from '@/views/pageHome/features/App'
import Testimonials from '@/views/pageHome/testimonials/App'
import Footer from '@/components/footer/App'
import Stats from '@/views/pageHome/stats/App'
import Cta from '@/views/pageHome/cta/App'
import { fetchAPI } from '@/lib/api'
import Marquee from "react-fast-marquee";
import { Img, Box, Tooltip, Heading } from '@chakra-ui/react'
import Seo from '@/components/Seo'

export default function Home({ modules, machines, makerspaces, modules_num, machines_num, makerspaces_num}) {
  return (
    <>
      <Seo /> 
      <NavBar />
      <Hero modules={modules} machines={machines} makerspaces={makerspaces}/>
      <Features />
      <Box mb='12' mx='auto' maxW='7xl'>
        <Marquee pauseOnHover speed={60}>
          <Tooltip label='Ultimaker 3D printer' hasArrow bg='#2A5FFF' fontSize='lg'>
            <Img 
            filter='grayscale(1)'
            _hover={{
              transition:'0.1s ease-in-out',
              filter:'grayscale(0)'
            }}
            mx='12' src='/featured-machines/ultimaker.jpeg' h='200px'/>
          </Tooltip>
          <Tooltip label='EinScan 3D Scanner' hasArrow bg='#2A5FFF' fontSize='lg'>
            <Img 
            filter='grayscale(1)'
            _hover={{
              transition:'0.1s ease-in-out',
              filter:'grayscale(0)'
            }}
            mx='12' src='/featured-machines/3D_Scanner.jpeg' h='200px'/>
          </Tooltip>
          <Tooltip label='Laser Cutter' hasArrow bg='#2A5FFF' fontSize='lg'>
            <Img 
            filter='grayscale(1)'
            _hover={{
              transition:'0.1s ease-in-out',
              filter:'grayscale(0)'
            }}
            mx='12' src='/featured-machines/laser_cutter.jpeg' h='200px'/>
          </Tooltip>
          <Tooltip label='Vive Focus Plus' hasArrow bg='#2A5FFF' fontSize='lg'>
            <Img 
            filter='grayscale(1)'
            _hover={{
              transition:'0.1s ease-in-out',
              filter:'grayscale(0)'
            }}
            mx='12' src='/featured-machines/vive_focus.jpeg' h='240px'/>
          </Tooltip>
        </Marquee>
      </Box>
      <Stats modules_num={modules_num}  machines_num={machines_num} makerspaces_num={makerspaces_num}/>
      
      <Testimonials />
      <Cta />
      <Footer />
    </>
  )
}

export async function getServerSideProps({context, req }) {
  const [modules, machines, makerspaces, modules_num, machines_num, makerspaces_num] = await Promise.all([
    fetchAPI("/modules"), 
    fetchAPI("/machines"), 
    fetchAPI("/makerspaces"),
    fetchAPI("/modules/count"), 
    fetchAPI("/machines/count"), 
    fetchAPI("/makerspaces/count")
  ]);

  return {
    props: { modules, machines, makerspaces, modules_num, machines_num, makerspaces_num }
  };
}

