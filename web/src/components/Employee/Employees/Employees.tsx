import type {
  DeleteEmployeeMutationVariables,
  FindEmployees,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Employee/EmployeesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_EMPLOYEE_MUTATION = gql`
  mutation DeleteEmployeeMutation($id: Int!) {
    deleteEmployee(id: $id) {
      id
    }
  }
`

const EmployeesList = ({ employees }: FindEmployees) => {
  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE_MUTATION, {
    onCompleted: () => {
      toast.success('Employee deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteEmployeeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete employee ' + id + '?')) {
      deleteEmployee({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date of birth</th>
            <th>Phone</th>
            <th>Project</th>
            <th>Position</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{truncate(employee.id)}</td>
              <td>
                {truncate(employee.name) + ' ' + truncate(employee.surname)}
              </td>
              <td>{truncate(employee.email)}</td>
              <td>{timeTag(employee.dateOfBirth)}</td>
              <td>{truncate(employee.phone)}</td>
              <td>
                {employee.project != null ? (
                  <Link to={routes.project({ id: employee.project.id })}>
                    {truncate(employee.project.name)}
                  </Link>
                ) : (
                  ''
                )}
              </td>
              <td>
                {employee.position != null ? (
                  <Link to={routes.position({ id: employee.position.id })}>
                    {truncate(employee.position.name)}
                  </Link>
                ) : (
                  ''
                )}
              </td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.employee({ id: employee.id })}
                    title={'Show employee ' + employee.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEmployee({ id: employee.id })}
                    title={'Edit employee ' + employee.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete employee ' + employee.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(employee.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeesList
