import { Badge, LightMode } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

export const links = [
  {
    title: 'Community',
    links: [
      {
        label: 'Our story',
        href: '/about',
      },
      {
        label: 'Volunteer',
        href: '/recruitment',
        badge: (
          <LightMode>
            <Badge color='white' bg='#2A5FFF' fontSize="0.625rem">
              New
            </Badge>
          </LightMode>
        ),
      },
      {
        label: 'Media Assets',
        href: '/media/media-kit',
      },
      {
        label: 'FAQ',
        href: '/faq',
      },
    ],
  },
  {
    title: 'Projects',
    links: [
      {
        label: 'Student projects',
        href: '/projects',
      },
      {
        label: 'Makerspaces Network',
        href: 'https://makerspaces.vinmaker.org/',
      },
      // {
      //   label: 'Makers4Kindness',
      //   href: '#',
      // },
      // {
      //   label: 'VinUniverse',
      //   href: '#',
      // },
      {
        label: 'Propose a project',
        href: '#',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        label: 'Blog',
        href: '/articles',
      },
      // {
      //   label: 'First-year guide',
      //   href: '#',
      // },
      {
        label: 'For Sponsors',
        href: '#',
      },
      // {
      //   label: 'Help Center',
      //   href: '#',
      // },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/vinmakersoc/',
      },
      {
        label: 'Email us',
        href: 'mailto:vinmaker.info@vinuni.edu.vn',
      },
    ],
  },
]
export const socialLinks = [
  {
    label: 'Facebook',
    icon: <FaFacebook />,
    href: 'https://www.facebook.com/vinmakersoc/',
  },
  {
    label: 'Github',
    icon: <FaGithub />,
    href: 'https://github.com/vinmakersoc',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/company/vinmaker',
  },
  {
    label: 'Youtube',
    icon: <FaYoutube />,
    href: 'https://www.youtube.com/channel/UCbfsn7J7G0G61itXyHNqysA',
  },
]
export const footerLinks = [
  
]
