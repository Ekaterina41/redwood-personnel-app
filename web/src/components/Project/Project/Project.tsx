import type {
  DeleteProjectMutationVariables,
  FindProjectById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { truncate } from 'src/lib/formatters'

const DELETE_PROJECT_MUTATION = gql`
  mutation DeleteProjectMutation($id: Int!) {
    deleteProject(id: $id) {
      id
    }
  }
`

interface Props {
  project: NonNullable<FindProjectById['project']>
}

const Project = ({ project }: Props) => {
  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION, {
    onCompleted: () => {
      toast.success('Project deleted')
      navigate(routes.projects())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteProjectMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete project ' + id + '?')) {
      deleteProject({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Project {project.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{project.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{project.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{project.description}</td>
            </tr>
            <tr>
              <th>Manager id</th>
              <td>
                {project.manager != null ? (
                  <Link to={routes.employee({ id: project.manager.id })}>
                    {truncate(project.manager.name) +
                      ' ' +
                      truncate(project.manager.surname)}
                  </Link>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProject({ id: project.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(project.id)}
        >
          Delete
        </button>
      </nav>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Project {project.id} Employees
          </h2>
        </header>
        <table className="rw-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            {project.employees?.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <Link to={routes.employee({ id: employee.id })}>
                    {truncate(employee.name) + ' ' + truncate(employee.surname)}
                  </Link>
                </td>
                <td>
                  {employee.position != null ? (
                    employee.position.name
                  ) : (
                    <span className="red-text">No position assigned</span>
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

export default Project
