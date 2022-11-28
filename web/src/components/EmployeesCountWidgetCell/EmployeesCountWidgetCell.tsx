import type { FindEmployeesCount } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindEmployeesCount {
    employeesCount {
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
  employeesCount,
}: CellSuccessProps<FindEmployeesCount>) => {
  return (
    <div>
      <Link to={routes.employees()} className="rw-link">
        <h3>Employees</h3>
      </Link>
      <h3>{employeesCount.count}</h3>
    </div>
  )
}
