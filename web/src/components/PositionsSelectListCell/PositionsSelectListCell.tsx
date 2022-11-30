import type { FindPositionsSelectList } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindPositionsSelectList {
    positionsSelectList: positions {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  positionsSelectList,
}: CellSuccessProps<FindPositionsSelectList>) => {
  return (
    <>
      <option value={null}>No position assigned</option>
      {positionsSelectList.map((position) => (
        <option key={position.id} value={position.id}>
          {position.name}
        </option>
      ))}
    </>
  )
}
