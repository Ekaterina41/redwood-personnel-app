// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={ScaffoldLayout} title="Employees" titleTo="employees" buttonLabel="New Employee" buttonTo="newEmployee">
        <Route path="/employees/new" page={EmployeeNewEmployeePage} name="newEmployee" />
        <Route path="/employees/{id:Int}/edit" page={EmployeeEditEmployeePage} name="editEmployee" />
        <Route path="/employees/{id:Int}" page={EmployeeEmployeePage} name="employee" />
        <Route path="/employees" page={EmployeeEmployeesPage} name="employees" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Projects" titleTo="projects" buttonLabel="New Project" buttonTo="newProject">
        <Route path="/projects/new" page={ProjectNewProjectPage} name="newProject" />
        <Route path="/projects/{id:Int}/edit" page={ProjectEditProjectPage} name="editProject" />
        <Route path="/projects/{id:Int}" page={ProjectProjectPage} name="project" />
        <Route path="/projects" page={ProjectProjectsPage} name="projects" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Positions" titleTo="positions" buttonLabel="New Position" buttonTo="newPosition">
        <Route path="/positions/new" page={PositionNewPositionPage} name="newPosition" />
        <Route path="/positions/{id:Int}/edit" page={PositionEditPositionPage} name="editPosition" />
        <Route path="/positions/{id:Int}" page={PositionPositionPage} name="position" />
        <Route path="/positions" page={PositionPositionsPage} name="positions" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
