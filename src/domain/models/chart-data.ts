export type ChartData = {
  cores: Core[]
  date_utc: string
  rocket: string
}

type Core = {
  id?: string
  flight?: number
  gridfins?: boolean
  legs?: boolean
  reused?: boolean
  landing_attempt?: boolean
  landing_success?: boolean
  landing_type?: string
  landpad?: string
}
