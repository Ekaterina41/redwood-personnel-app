import EditPositionCell from 'src/components/Position/EditPositionCell'

type PositionPageProps = {
  id: number
}

const EditPositionPage = ({ id }: PositionPageProps) => {
  return <EditPositionCell id={id} />
}

export default EditPositionPage
