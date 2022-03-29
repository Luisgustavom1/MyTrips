import { NextSeo } from 'next-seo'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show my favorite spots in the world"
        canonical="https://my-trips-kappa.vercel.app"
        openGraph={{
          url: 'https://my-trips-kappa.vercel.app',
          title: 'My Trips',
          description:
            'A simple project to show my favorite spots in the world',
          images: [
            {
              url: 'https://my-trips-kappa.vercel.app/img/conver.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkWrapper>

      <Map places={places} />
    </>
  )
}
