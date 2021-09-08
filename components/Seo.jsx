import { NextSeo } from 'next-seo';

const Seo = () => (
    <NextSeo
    title="VinUni Makerspace Network"
    description="VinUni Makerspace Network"
    additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.png',
        },
    ]}
    />
);

export default Seo;