import { Title } from '@mui/icons-material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import GetAllRequest from '../components/GetAllRequest'
import NavbarLogin from '../components/NavBarLogin'
import TitleContainer from '../components/TitleContainer'

function AdminRequest() {
  const { state } = useLocation()
  console.log(state.status)
  return (
    <div style={{ width: '100%' }}>
      <NavbarLogin></NavbarLogin>
      {state.status ? <TitleContainer title="Aprobadas" />:<TitleContainer title="Pendientes" />}
      <GetAllRequest status={state.status} />
    </div>
  )
}

export default AdminRequest
