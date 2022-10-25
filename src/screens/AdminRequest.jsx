import React from 'react'
import { useLocation } from 'react-router-dom'
import GetAllRequest from '../components/GetAllRequest'
import NavbarLogin from '../components/NavBarLogin'

function AdminRequest() {
  const { state } = useLocation()
  console.log(state.status)
  return (
    <div style={{ width: '100%' }}>
      <NavbarLogin></NavbarLogin>
      <GetAllRequest status={state.status} />
    </div>
  )
}

export default AdminRequest
