import type { FindPositions } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Positions from 'src/components/Position/Positions'

export const QUERY = gql`
  query FindPositions {
    positions {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No positions yet. '}
      <Link
        to={routes.newPosition()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ positions }: CellSuccessProps<FindPositions>) => {
  return <Positions positions={positions} />
}
