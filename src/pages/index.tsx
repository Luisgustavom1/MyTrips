import dynamic from 'next/dynamic'

const Map = dynamic(import('components/Map'), { ssr: false })

export default function Home() {
  const place = {
    id: '1',
    name: 'Franca',
    slug: 'franca',
    location: {
      latitude: 0,
      longitude: 0
    }
  }

  const placeTwo = {
    id: '2',
    name: 'Floripa',
    slug: 'floripa',
    location: {
      latitude: 32,
      longitude: -1
    }
  }
  return <Map places={[place, placeTwo]} />
}
