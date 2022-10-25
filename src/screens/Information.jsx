import React, { useEffect } from 'react'
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
      <Container>
        <InfoContainer />
      </Container>
    </div>
  )
}

export default Information
