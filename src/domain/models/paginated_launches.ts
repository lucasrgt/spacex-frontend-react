import { Launch } from './launch.ts'

export type PaginatedLaunches = {
  results: Launch[]
  totalDocs: number
  page: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}
