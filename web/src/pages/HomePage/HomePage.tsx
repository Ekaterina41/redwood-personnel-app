import { MetaTags } from '@redwoodjs/web'

import EmployeesCountWidgetCell from 'src/components/EmployeesCountWidgetCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Personnel Management</h1>

      <EmployeesCountWidgetCell />
    </>
  )
}

export default HomePage
