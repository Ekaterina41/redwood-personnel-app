import type { FindEmployeesSelectList } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindEmployeesSelectList {
    employeesSelectList: employees {
      id
      name
      surname
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  employeesSelectList,
}: CellSuccessProps<FindEmployeesSelectList>) => {
  return (
    <>
      <option value={null}>No manager assigned</option>
      {employeesSelectList.map((employee) => (
        <option key={employee.id} value={employee.id}>
          {employee.name + ' ' + employee.surname}
        </option>
      ))}
    </>
  )
}
