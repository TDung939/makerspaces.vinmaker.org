
import Banner from '../components/banner/App'
import NavBar from '../components/navbar/App'
import Hero from '../components/pageHome/hero/App'
import Features from '../components/pageHome/features/App'
import Testimonials from '../components/pageHome/testimonials/App'
import Footer from '../components/footer/App'
import Stats from '../components/pageHome/stats/App'
import Cta from '../components/pageHome/cta/App'
import { fetchAPI } from '../lib/api'
import Marquee from "react-fast-marquee";
import { Img, Box, Tooltip, Heading } from '@chakra-ui/react'

export default function Home({badges_num, machines_num, makerspaces_num}) {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Box my='12' mx='auto' maxW='7xl'>
        <Marquee pauseOnHover speed={60}>
          <Tooltip label='Ultimaker 3D printer' hasArrow bg='#2A5FFF' fontSize='lg'>
            <Img 
            filter='grayscale(1)'
            _hover={{
              transition:'0.1s ease-in-out',
              filter:'grayscale(0)'
            }}
            mx='12' src='http://localhost:1337/uploads/ultimaker_s3_01_1b75fba196.jpeg' h='200px'/>
          </Tooltip>
          <Tooltip label='Laser Cutter' hasArrow bg='#2A5FFF' fontSize='lg'>
            <Img 
            filter='grayscale(1)'
            _hover={{
              transition:'0.1s ease-in-out',
              filter:'grayscale(0)'
            }}
            mx='12' src='http://localhost:1337/uploads/epilog_1024x713_750180946a.jpeg' h='200px'/>
          </Tooltip>
          <Tooltip label='VR' hasArrow bg='#2A5FFF' fontSize='lg'>
            <Img 
            filter='grayscale(1)'
            _hover={{
              transition:'0.1s ease-in-out',
              filter:'grayscale(0)'
            }}
            mx='12' src='https://product.hstatic.net/1000360697/product/vive_pro_pdp_desktop-mian-min_cc9455039aaf469d92a02ef898480b99.png' h='200px'/>
          </Tooltip>
          <Tooltip label='Laser Cutter' hasArrow bg='#2A5FFF' fontSize='lg'>
            <Img 
            filter='grayscale(1)'
            _hover={{
              transition:'0.1s ease-in-out',
              filter:'grayscale(0)'
            }}
            mx='12' src='https://www.brights.co.za/wp-content/uploads/2018/03/19854_Bosch-Electronic-Bench-Drill-710W-600x600.png' h='240px'/>
          </Tooltip>
        </Marquee>
      </Box>
      <Stats badges_num={badges_num}  machines_num={machines_num} makerspaces_num={makerspaces_num}/>
      
      <Testimonials />
      <Cta />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [badges_num, machines_num, makerspaces_num] = await Promise.all([
    fetchAPI("/badges/count"), 
    fetchAPI("/machines/count"), 
    fetchAPI("/makerspaces/count")
  ]);

  return {
    props: { badges_num, machines_num, makerspaces_num },
    revalidate: 1,
  };
}

