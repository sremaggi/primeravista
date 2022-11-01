import React, { useState } from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from 'firebase/firestore'
import { Col, Container, Row } from 'react-grid-system'
import ReactLoading from 'react-loading'
import { UserAuth } from '../context/AuthContext'
import { firestore } from '../firebase'

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'America/Santiago',
}

function GetAllRequest(props) {
  const [documents, setDocuments] = useState([])
  const [loadDocs, setLoadDocs] = useState(true)
  const [loadApr, setLoadApr] = useState(true)
  const { user } = UserAuth()
  // Firebase Collection Reference query

  if (user?.displayName) {
    const q = query(
      collection(firestore, 'requests'),
      where('approved', '==', props.status),
    )
    const getDocuments = async () => {
      const data = await getDocs(q)
      setDocuments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setLoadDocs(true)
    }
    getDocuments()
  }

  return (
    <Container>
      {documents.map((d) => (
        <Container>
          <Row
            style={{
              backgroundColor: 'grey',
              display: 'flex',
              justifyContent: 'center',
              marginTop: 20,
              padding: 3,
              color: 'white',
              fontSize: 10,
              flexDirection: 'column',
            }}
          >
            id: {d.id}
            <Row
              style={{
                backgroundColor: '#273A2B',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10,
                padding: 3,
                color: 'white',
                fontSize: 10,
              }}
            >
              {d.user.name}
            </Row>
            <Row
              style={{
                backgroundColor: '#273A2B',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 1,
                padding: 3,
                color: 'white',
                fontSize: 10,
              }}
            >
              {d.user.email}
            </Row>
            <Row
              style={{
                backgroundColor: '#E3E3E3',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <Col
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  padding: 10,
                }}
              >
                <Row
                  style={{
                    backgroundColor: '#8BC088',
                    display: 'flex',
                    padding: 5,
                    justifyContent: 'center',
                    fontSize: 10,
                  }}
                >
                  LLegada
                </Row>
                <Row
                  style={{
                    backgroundColor: '#8BC088',
                    display: 'flex',
                    padding: 5,
                    justifyContent: 'center',
                    fontSize: 10,
                  }}
                >
                  {new Date(d.startDate.y, d.startDate.m -1, d.startDate.d)
                  .toLocaleString('es-CL', options)
                  .toUpperCase()}
             
                </Row>
              </Col>

              <Col
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  padding: 10,
                }}
              >
                <Row
                  style={{
                    backgroundColor: '#B26C41',
                    display: 'flex',
                    padding: 5,
                    justifyContent: 'center',
                    fontSize: 10,
                  }}
                >
                  Salida
                </Row>
                <Row
                  style={{
                    backgroundColor: '#B26C41',
                    display: 'flex',
                    padding: 5,
                    justifyContent: 'center',
                    fontSize: 10,
                  }}
                >
                  {new Date(d.finishDate.y, d.finishDate.m -1, d.finishDate.d)
                  .toLocaleString('es-CL', options)
                  .toUpperCase()}
                </Row>
              </Col>

              <Col
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  padding: 10,
                }}
              >
                <Row
                  style={{
                    backgroundColor: '#B3D5D3    ',
                    display: 'flex',
                    padding: 5,
                    justifyContent: 'center',
                    fontSize: 10,
                    color: 'black',
                  }}
                >
                  Telefono: {d.user.phone}
                </Row>
                <Row
                  style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    padding: 5,
                    justifyContent: 'center',
                    fontSize: 10,
                  }}
                >
                  {d.approved === true ? (
                    <div style={{ color: 'green', fontWeight: 'bold' }}>
                      {' '}
                      Aceptado!
                    </div>
                  ) : ( d.rejected === true ? 
                    <div style={{ color: 'red', fontWeight: 'bold' }}>
                      {' ' + ' Rechazado'}
                    </div>
                  : <div style={{ color: 'orange', fontWeight: 'bold' }}>
                  {' ' + ' En espera'}
                </div>)}
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                backgroundColor: '#273A2B',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 1,
                padding: 3,
                color: 'white',
                fontSize: 10,
              }}
            >
              {d.user.qty} Personas
            </Row>
            <Row
              style={{
                backgroundColor: '#273A2B',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 1,
                padding: 3,
                color: 'white',
                fontSize: 10,
              }}
            >
              ${d.mount}
            </Row>
            <Row
              style={{
                backgroundColor: '#273A2B',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 1,
                padding: 6,
                color: 'white',
                fontSize: 9,
              }}
            >
              {d.msg}
            </Row>
            {loadApr && d.approved == false ? (
              <Row>
                <Col>
                <button
                  onClick={() => {
                    setLoadApr(false)
                    const docRef = doc(firestore, 'requests', d.id)
                    d.approved = true
                    updateDoc(docRef, d)
                      .then(() => {
                        alert('Aprobado exitoso')
                        setLoadApr(true)
                      })
                      .catch((e) => {
                        alert(e)
                      })
                  }}
                  style={{
                    width: '100%',
                    padding: 10,
                    backgroundColor: 'green',
                    color: 'white',
                  }}
                >
                  Aprobar
                </button>
                </Col>
                <Col>
                <button
                  onClick={() => {
                    setLoadApr(false)
                    const docRef = doc(firestore, 'requests', d.id)
                    d.rejected = true
                    updateDoc(docRef, d)
                      .then(() => {
                        alert('Rechazado exitoso')
                        setLoadApr(true)
                      })
                      .catch((e) => {
                        alert(e)
                      })
                  }}
                  style={{
                    width: '100%',
                    padding: 10,
                    backgroundColor: 'red',
                    color: 'white',
                  }}
                >
                  Rechazar
                </button>
                </Col>
              </Row>
              
            ) : (
             ''
            )}
          </Row>
        </Container>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        {loadDocs  ? (
          ''
        ) : (
          <ReactLoading
            type="spinningBubbles"
            color="green"
            height={40}
            width={40}
          />
        )}
      </div>
    </Container>
  )
}

export default GetAllRequest
