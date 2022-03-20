import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('Should render without any marker', () => {
    render(<Map places={[]} />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('Should render with any marker', () => {
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
        latitude: 0,
        longitude: 0
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/franca/i)).toBeInTheDocument()
    expect(screen.getByTitle(/floripa/i)).toBeInTheDocument()
  })
})
