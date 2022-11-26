import type { FindPositionById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Position from 'src/components/Position/Position'

export const QUERY = gql`
  query FindPositionById($id: Int!) {
    position: position(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Position not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ position }: CellSuccessProps<FindPositionById>) => {
  return <Position position={position} />
}
