import { Outlet } from 'react-router-dom'
import { Sidebar } from '../partials/Sidebar'

export const MainLayout = () => {
  return (
    <div
      className='d-flex flex-row justify-content-start align-items-center'
      style={{ height: '100vh' }}
    >
      <Sidebar />
      <div style={{ flexGrow: 1, height: '100%', overflowY: 'scroll' }}>
        <Outlet />
      </div>
    </div>
  )
}
