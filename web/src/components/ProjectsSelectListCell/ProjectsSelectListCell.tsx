import type { FindProjectsSelectList } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindProjectsSelectList {
    projectsSelectList: projects {
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
  projectsSelectList,
}: CellSuccessProps<FindProjectsSelectList>) => {
  return (
    <>
      <option value={null}>No project assigned</option>
      {projectsSelectList.map((project) => (
        <option key={project.id} value={project.id}>
          {project.name}
        </option>
      ))}
    </>
  )
}
