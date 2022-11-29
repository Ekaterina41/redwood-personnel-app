import type { FindProjectsCount } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindProjectsCount {
    projectsCount {
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
  projectsCount,
}: CellSuccessProps<FindProjectsCount>) => {
  return (
    <div>
      <Link to={routes.projects()}>Projects</Link>
      <p>{projectsCount.count}</p>
    </div>
  )
}
