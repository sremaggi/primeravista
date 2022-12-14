import React from 'react'
import { Row, Col } from 'react-grid-system'
import Gallery from '../components/GalleryImage'
import ButtonContainer from '../components/ButtonContainer'
// import { UserAuth } from '../context/AuthContext'
import NavbarLogin from '../components/NavBarLogin'
import { UseWindowSize } from '../context/UseWidth'

function WelcomeScreen() {
  // const { user } = UserAuth()
  const [width] = UseWindowSize()
  return (
    <div>
      <NavbarLogin />

      {width > 733 ? (
        <Row>
          <Col
            sm={8}
            xs={8}
            md={8}
            lg={8}
            xl={6}
            xxl={6}
            xxxl={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 32,
              flexDirection: 'column',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <Gallery />
          </Col>
          <Col
            sm={4}
            xs={4}
            md={4}
            lg={4}
            xl={6}
            xxl={6}
            xxxl={6}
            style={{
              display: 'flex',
              marginBottom: 10,
              marginTop: 37,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Row
              style={{
                padding: 5,
                borderRadius: 2,
                color: 'white',
                fontSize: 10,
                alignItems: 'center',
                alignContent: 'center',
                margin: 30,
              }}
            >
              <Col
                sm={12}
                xs={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                xxxl={12}
                style={{
                  display: 'flex',
                  backgroundColor: '#454545',
                  padding: 10,
                  borderRadius: 5,
                  fontSize: 13,
                  textJustify: 'inter-word',
                  textAlign: 'justify',
                }}
              >
                Bienvenid@ a hospedaje Primera Vista, aqu?? encuentrar??s toda la
                informaci??n respecto a la casa y podr??s crear tu perfil para
                realizar una reserva o un comentario. Adem??s, facilitamos el
                canal de comunicaci??n en la pesta??a de contacto, con el fin de
                garantizar una buena experiencia para nuestros hu??spedes.
              </Col>

              <Col
                sm={12}
                xs={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                xxxl={12}
                style={{
                  justifyContent: 'center',
                  width: '100%',
                  marginTop: 5,
                }}
              >
                <ButtonContainer />
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col
            sm={12}
            xs={12}
            md={12}
            lg={12}
            xl={12}
            xxl={6}
            xxxl={6}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Gallery />
          </Col>
          <Col
            sm={12}
            xs={12}
            md={12}
            lg={12}
            xl={12}
            xxl={6}
            xxxl={6}
            style={{ marginBottom: 10 }}
          >
            <ButtonContainer />
          </Col>
        </Row>
      )}
    </div>
  )
}

export default WelcomeScreen
