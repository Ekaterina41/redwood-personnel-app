import { Link, routes } from '@redwoodjs/router'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <header className="main-header">
        <h1>
          <Link to={routes.home()}>Personnel Management</Link>
        </h1>
      </header>
      <div className="main-content">{children}</div>
    </div>
  )
}

export default AppLayout
