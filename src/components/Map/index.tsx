import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Places = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Places[]
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, name, slug, location }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            key={`place-${slug}-${id}`}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => router.push(`/place/${slug}`)
            }}
          />
        )
      })}
    </MapContainer>
  )
}

export default Map
