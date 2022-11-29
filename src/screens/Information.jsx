import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { Container } from 'react-grid-system'

import InfoContainer from '../components/infoContainer'

import NavbarLogin from '../components/NavBarLogin'

function Information() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <NavbarLogin />

      <Row
        style={{
          display: 'flex',
          backgroundColor: '#454545',
          color: 'white',
          justifyContent: 'center',
          marginTop: 10,
          padding: 10,
          fontSize: 15,
        }}
      >
       Información
      </Row>
        <InfoContainer />

    </div>
  )
}

export default Information
