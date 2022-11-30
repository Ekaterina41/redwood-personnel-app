import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { truncate } from 'src/lib/formatters'

// eslint-disable-next-line import/order
import type {
  DeletePositionMutationVariables,
  FindPositionById,
} from 'types/graphql'

const DELETE_POSITION_MUTATION = gql`
  mutation DeletePositionMutation($id: Int!) {
    deletePosition(id: $id) {
      id
    }
  }
`

interface Props {
  position: NonNullable<FindPositionById['position']>
}

const Position = ({ position }: Props) => {
  const [deletePosition] = useMutation(DELETE_POSITION_MUTATION, {
    onCompleted: () => {
      toast.success('Position deleted')
      navigate(routes.positions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePositionMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete position ' + id + '?')) {
      deletePosition({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Position {position.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{position.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{position.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPosition({ id: position.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(position.id)}
        >
          Delete
        </button>
      </nav>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Employees with {position.name} function
          </h2>
        </header>
        <table className="rw-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>
            {position.employees?.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <Link to={routes.employee({ id: employee.id })}>
                    {truncate(employee.name) + ' ' + truncate(employee.surname)}
                  </Link>
                </td>
                <td>
                  {employee.project != null ? (
                    employee.project.name
                  ) : (
                    <span className="red-text">No project assigned</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Position
