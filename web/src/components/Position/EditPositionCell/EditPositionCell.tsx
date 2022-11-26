import type { EditPositionById, UpdatePositionInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PositionForm from 'src/components/Position/PositionForm'

export const QUERY = gql`
  query EditPositionById($id: Int!) {
    position: position(id: $id) {
      id
      name
    }
  }
`
const UPDATE_POSITION_MUTATION = gql`
  mutation UpdatePositionMutation($id: Int!, $input: UpdatePositionInput!) {
    updatePosition(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ position }: CellSuccessProps<EditPositionById>) => {
  const [updatePosition, { loading, error }] = useMutation(
    UPDATE_POSITION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Position updated')
        navigate(routes.positions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePositionInput,
    id: EditPositionById['position']['id']
  ) => {
    updatePosition({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Position {position?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PositionForm position={position} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
