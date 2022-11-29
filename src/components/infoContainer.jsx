import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FcNext } from 'react-icons/fc'
import { Col, Container, Row } from 'react-grid-system'
import {
  GiBed,
  GiRiceCooker,
  GiSofa,
  GiDesk,
  GiCityCar,
  GiRoundTable,
} from 'react-icons/gi'
import { FaToilet } from 'react-icons/fa'
import { RiHotelBedLine } from 'react-icons/ri'
import { WiSunrise } from 'react-icons/wi'
import { MdOutlineYard } from 'react-icons/md'
import { render } from '@testing-library/react'
import MyVerticallyCenteredModal from './CenterModal'
import InfoDescription from './infoDescription'
import Gallery from './GalleryImage'
import InfoImageContainer from './InfoImage'
import InfornmationBedRoom from '../screens/InformationBedRoom'
import InfornmationBathRoom from '../screens/informationBathRoom'
import InfornmationKitchen from '../screens/InformationKitchen'
import InfornmationBedRoom2 from '../screens/informationBedRoom2'
import InfornmationLiving from '../screens/informationLiving'
import InformationDinnerRoom from '../screens/informationComedor'
import InformationDesktop from '../screens/informationDesktop'
import InformationParking from '../screens/informationParking'
import InformationUpGarden from '../screens/informationUpGarden'
import InformationDownGarden from '../screens/informationDownGarden'

function InfoContainer(props) {
  const [loadDocs, setLoadDocs] = useState(true)
  const [loadImages, setLoadImages] = useState(true)
  const [bedroom, clickBedRoom] = React.useState(false)
  const [bedroom2, clickBedRoom2] = React.useState(false)
  const [bathroom, clickBathRoom] = React.useState(false)
  const [kitchen, clickKitchen] = React.useState(false)
  const [living, clickLiving] = React.useState(false)
  const [dinnerRoom, clickDinnerRoom] = React.useState(false)
  const [desktop, clickDestkop] = React.useState(false)
  const [parking, clickParking] = React.useState(false)
  const [upGarden, clickUpGarden] = React.useState(false)
  const [downGarden, clickDownGarden] = React.useState(false)

  return (
    <div style={{ backgroundColor: '#9DC289', marginTop: 10, padding: 10 }}>
      <Row
        style={{
          display: 'flex',
          backgroundColor: '#454545',
          color: 'white',
          justifyContent: 'center',
          marginTop: 10,
          padding: 7,
          fontSize: 15,
        }}
      >
        Capacidad 6 personas
      </Row>
      <button
        to="/information/bedroom"
        onClick={() => clickBedRoom(!bedroom)}
        style={{
          textDecoration: 'none',
          color: 'green',
          width: '100%',
          border: 'none',
          backgroundColor: '#F3F3F3',
          marginTop: 5,
          marginBottom:5
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            padding: 10,
            fontSize: 15,
          }}
        >
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <GiBed size={40} style={{ margin: 10 }} /> Habitación
          </Col>
        </Row>
      </button>
      {bedroom ? <InfornmationBedRoom /> : ''}
      <button
        onClick={() => clickBathRoom(!bathroom)}
        style={{
          textDecoration: 'none',
          color: 'green',
          width: '100%',
          backgroundColor: '#F3F3F3',
          border: 'none',
          marginBottom:5
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            padding: 10,
            fontSize: 15,
          }}
        >
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <FaToilet size={35} style={{ margin: 10 }} /> Baño
          </Col>
        </Row>
      </button>
      {bathroom ? <InfornmationBathRoom /> : ''}
      <Container>
        <Row
          style={{
            display: 'flex',
            backgroundColor: '#454545',
            color: 'white',
            justifyContent: 'center',
            marginTop: 2,
            padding: 7,
            fontSize: 15,
            marginBottom:5
          }}
        >
          Espacio común
        </Row>
      </Container>
      <button
        onClick={() => clickKitchen(!kitchen)}
        style={{
          textDecoration: 'none',
          color: 'green',
          width: '100%',
          backgroundColor: '#F3F3F3',
          border: 'none',
          marginBottom:5
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            padding: 10,
            fontSize: 15,
          }}
        >
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <GiRiceCooker size={35} style={{ margin: 10 }} /> Cocina
          </Col>
        </Row>
      </button>
      {kitchen ? <InfornmationKitchen /> : ''}
      <button
        onClick={() => clickBedRoom2(!bedroom2)}
        style={{
          textDecoration: 'none',
          color: 'green',
          width: '100%',
          backgroundColor: '#F3F3F3',
          border: 'none',
          marginBottom:5
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            padding: 10,
            fontSize: 15,
          }}
        >
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <RiHotelBedLine size={35} style={{ margin: 10 }} /> Habitación común
          </Col>
        </Row>
      </button>
      {bedroom2 ? <InfornmationBedRoom2 /> : ''}
      <button
        onClick={() => clickLiving(!living)}
        style={{
          textDecoration: 'none',
          color: 'green',
          width: '100%',
          backgroundColor: '#F3F3F3',
          border: 'none',
          marginBottom:5
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            padding: 10,
            fontSize: 15,
          }}
        >
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <GiSofa size={35} style={{ margin: 10 }} /> Living
          </Col>
        </Row>
      </button>
      {living ? <InfornmationLiving /> : ''}
      <button
        onClick={() => clickDinnerRoom(!dinnerRoom)}
        style={{
          textDecoration: 'none',
          color: 'green',
          width: '100%',
          backgroundColor: '#F3F3F3',
          border: 'none',
          marginBottom:5
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            padding: 10,
            fontSize: 15,
          }}
        >
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <GiRoundTable size={35} style={{ margin: 10 }} /> Comedor
          </Col>
        </Row>
      </button>
      {dinnerRoom ? <InformationDinnerRoom /> : ''}
      <button
        onClick={() => clickDestkop(!desktop)}
        style={{
          textDecoration: 'none',
          color: 'green',
          width: '100%',
          backgroundColor: '#F3F3F3',
          border: 'none',
          marginBottom:5
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            padding: 10,
            fontSize: 15,
          }}
        >
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <GiDesk size={35} style={{ margin: 10 }} /> Escritorio
          </Col>
        </Row>
      </button>
      {desktop ? <InformationDesktop /> : ''}
      <Container>
        <Row
          style={{
            display: 'flex',
            backgroundColor: '#454545',
            color: 'white',
            justifyContent: 'center',
            marginTop: 2,
            padding: 7,
            fontSize: 15,
            marginBottom:5
          }}
        >
          Exterior
        </Row>
      </Container>
      <button
        onClick={() => clickParking(!parking)}
        style={{
          textDecoration: 'none',
          color: 'green',
          width: '100%',
          backgroundColor: '#F3F3F3',
          border: 'none',
          marginBottom:5
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            padding: 10,
            fontSize: 15,
          }}
        >
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <GiCityCar size={40} style={{ margin: 10 }} /> Estacionamiento
          </Col>
        </Row>
      </button>
      {parking ? <InformationParking /> : ''}
      <button
        onClick={() => clickUpGarden(!upGarden)}
        style={{
          textDecoration: 'none',
          color: 'green',
          width: '100%',
          backgroundColor: '#F3F3F3',
          border: 'none',
          marginBottom:5
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            padding: 10,
            fontSize: 15,
          }}
        >
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <WiSunrise size={40} style={{ margin: 10 }} /> Patio lateral
          </Col>
        </Row>
      </button>
      {upGarden ? <InformationUpGarden /> : ''}
      <button
        onClick={() => clickDownGarden(!downGarden)}
        style={{
          textDecoration: 'none',
          color: 'green',
          width: '100%',
          backgroundColor: '#F3F3F3',
          border: 'none',
          marginBottom:5
        }}
      >
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3,
            padding: 10,
            fontSize: 15,
          }}
        >
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <MdOutlineYard size={40} style={{ margin: 10 }} /> Patio inferior
          </Col>
        </Row>
      </button>
      {downGarden ? <InformationDownGarden /> : ''}
    </div>
  )
}

export default InfoContainer
