import { Badge } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const links = [
  {
    title: 'Engage with us',
    links: [
      {
        label: 'Contact us',
        href: '#',
      },
      {
        label: 'Features',
        href: '#',
      },
      {
        label: 'Integrations',
        href: '#',
        badge: (
          <Badge color="white" bg="#ae262b" variant="solid" fontSize="0.625rem">
            New
          </Badge>
        ),
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        label: 'Learn Center',
        href: '#',
      },
      {
        label: 'Support',
        href: '#',
      },
      {
        label: 'Events',
        href: '#',
      },
      {
        label: 'Terms of Service',
        href: '#',
      },
      {
        label: 'Privacy Policy',
        href: '#',
      },
    ],
  },
  {
    title: 'About',
    links: [
      {
        label: 'Our Community',
        href: '#',
      },
      {
        label: 'Media Kit',
        href: '#',
      },
      {
        label: 'Blog',
        href: '#',
      },
      {
        label: 'Email us',
        href: '#',
      },
    ],
  },
  {
    title: 'Get Started',
    links: [
      {
        label: 'Start for free',
        href: '#',
      },
      {
        label: 'Makerspaces',
        href: '#',
      },
      {
        label: 'Badges',
        href: '#',
      },
      {
        label: 'Machines',
        href: '#',
      },
    ],
  },
]
export const socialLinks = [
  {
    label: 'Facebook',
    icon: <FaFacebook />,
    href: '#',
  },
  {
    label: 'Instagram',
    icon: <FaInstagram />,
    href: '#',
  },
  {
    label: 'LinkedIn',
    icon: <FaLinkedin />,
    href: '#',
  },
  {
    label: 'LinkedIn',
    icon: <FaTwitter />,
    href: '#',
  },
]
export const footerLinks = [
  {
    label: 'Terms of Service',
    href: '#',
  },
  {
    label: 'Privacy Policy',
    href: '#',
  },
  {
    label: 'Offer terms',
    href: '#',
  },
  {
    label: 'Legal notice',
    href: '#',
  },
  {
    label: 'Sitemap',
    href: '#',
  },
]
