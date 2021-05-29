export type TMarker = {
  id: number
  lng: number
  lat: number
  name: string
  description: string
  active: boolean
}

export type TMapEvent = {
  originalEvent: {
    target: {
      id: string
    }
  }
}
