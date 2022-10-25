import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import styled from 'styled-components'
import InfoContainer from '../components/infoContainer'
import InfoDescription from '../components/infoDescription'
import Navbar from '../components/NavBar'
import NavbarLogin from '../components/NavBarLogin'
import TitleContainer from '../components/TitleContainer'
import { UserAuth } from '../context/AuthContext'

function InfornmationBathRoom() {
  const { user } = UserAuth()
  return (
    <div>
      <Container style={{ marginBottom: 10 }}>
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
