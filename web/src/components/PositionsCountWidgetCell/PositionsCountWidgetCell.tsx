import type { FindPositionsCount } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindPositionsCount {
    positionsCount {
      count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  positionsCount,
}: CellSuccessProps<FindPositionsCount>) => {
  return (
    <div>
      <Link to={routes.positions()}>Positions</Link>
      <p>{positionsCount.count}</p>
    </div>
  )
}
