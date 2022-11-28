import { MetaTags } from '@redwoodjs/web'

import EmployeesCountWidgetCell from 'src/components/EmployeesCountWidgetCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="home-page-header">
        <h1>Personnel Management</h1>
      </div>

      <div className="home-page-widgets">
        <EmployeesCountWidgetCell />
      </div>
    </>
  )
}

export default HomePage
