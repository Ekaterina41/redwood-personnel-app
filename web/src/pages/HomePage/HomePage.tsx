import { MetaTags } from '@redwoodjs/web'

import EmployeesCountWidgetCell from 'src/components/EmployeesCountWidgetCell'
import PositionsCountWidgetCell from 'src/components/PositionsCountWidgetCell'
import ProjectsCountWidgetCell from 'src/components/ProjectsCountWidgetCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="home-page-header">
        <h1>Personnel Management</h1>
      </div>

      <div className="widgets-container">
        <EmployeesCountWidgetCell />
        <ProjectsCountWidgetCell />
        <PositionsCountWidgetCell />
      </div>
    </>
  )
}

export default HomePage
