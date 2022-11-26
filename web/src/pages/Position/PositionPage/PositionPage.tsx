import PositionCell from 'src/components/Position/PositionCell'

type PositionPageProps = {
  id: number
}

const PositionPage = ({ id }: PositionPageProps) => {
  return <PositionCell id={id} />
}

export default PositionPage
