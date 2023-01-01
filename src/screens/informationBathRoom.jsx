import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'
import InfoContainer from '../components/infoContainer'
import InfoDescription from '../components/infoDescription'
import Navbar from '../components/NavBar'
import NavbarLogin from '../components/NavBarLogin'
import TitleContainer from '../components/TitleContainer'
import { UserAuth } from '../context/AuthContext'
import { Carousel } from 'react-responsive-carousel'

function InfornmationBathRoom() {
  const { user } = UserAuth()
  return (
    <div>
      <Container style={{ marginBottom: 10 }}>
      <Carousel
          showIndicators
          showThumbs={false}
          showStatus={false}
          infiniteLoop
      
        >
          <div>
            <img
              height={350}
              style={{ borderRadius: 5,objectFit:"fill" }}
              src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2FhomeImages%2Fbathroom%2Fb3.jpeg?alt=media&token=2f34c94d-be13-4bc3-b2ae-b265bab8da6d"
              
            />
         
          </div>

        </Carousel>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            padding: 5,
            fontSize: 14,
            backgroundColor: '#454545',
            color: 'white',
          }}
        >
          <Col style={{ display: 'flex', justifyContent: 'center' }}></Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            Descripción
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            Cantidad
          </Col>
        </Row>
        <InfoDescription title="Lavadora" desc="Con secadora" qty="1" />
        <InfoDescription title="Secador de pelo" desc="--" qty="1" />
        <InfoDescription title="Toalla cuerpo" desc="--" qty="6" />
        <InfoDescription title="Toalla mano" desc="--" qty="1" />
        <InfoDescription title="Botiquín" desc="--" qty="1" />
        <InfoDescription title="Plancha de ropa" desc="--" qty="1" />
        <InfoDescription title="Bajada de baño" desc="--" qty="1" />
        <InfoDescription title="Colgadores de ropa" desc="--" qty="7" />
      </Container>
    </div>
  )
}

export default InfornmationBathRoom
