import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'
import TitleContainer from '../components/TitleContainer'

import NavbarLogin from '../components/NavBarLogin'
import Navbar from '../components/NavBar'
import CalendarComponent from '../components/Calendar'
import { UserAuth } from '../context/AuthContext'
import { UseWindowSize } from '../context/UseWidth'
import Gallery from '../components/GalleryImage'

function Bookings() {
  const { user } = UserAuth()
  const { navigate } = useNavigate()
  const [width, height] = UseWindowSize()
  useEffect(() => {
    // scroll to top on page load
    document.body.style.zoom = '100%'
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div>
      <NavbarLogin />
      {width > 733 ? (
        <Container>
          <CalendarComponent months="1.5" orientation="vertical" />
        </Container>
      ) : (
        <Container>
        <CalendarComponent months="1.5" orientation="vertical" />
      </Container>
      )}
    </div>
  )
}

export default Bookings
