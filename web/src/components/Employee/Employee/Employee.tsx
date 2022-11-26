
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteEmployeeMutationVariables, FindEmployeeById } from 'types/graphql'

const DELETE_EMPLOYEE_MUTATION = gql`
  mutation DeleteEmployeeMutation($id: Int!) {
    deleteEmployee(id: $id) {
      id
    }
  }
`

interface Props {
  employee: NonNullable<FindEmployeeById['employee']>
}

const Employee = ({ employee }: Props) => {
  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE_MUTATION, {
    onCompleted: () => {
      toast.success('Employee deleted')
      navigate(routes.employees())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteEmployeeMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete employee ' + id + '?')) {
      deleteEmployee({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Employee {employee.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{employee.id}</td>
            </tr><tr>
              <th>Email</th>
              <td>{employee.email}</td>
            </tr><tr>
              <th>Name</th>
              <td>{employee.name}</td>
            </tr><tr>
              <th>Surname</th>
              <td>{employee.surname}</td>
            </tr><tr>
              <th>Date of birth</th>
              <td>{timeTag(employee.dateOfBirth)}</td>
            </tr><tr>
              <th>Phone</th>
              <td>{employee.phone}</td>
            </tr><tr>
              <th>Project id</th>
              <td>{employee.projectId}</td>
            </tr><tr>
              <th>Position id</th>
              <td>{employee.positionId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEmployee({ id: employee.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(employee.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Employee
