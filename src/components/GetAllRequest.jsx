import React, { useState } from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  orderBy
} from 'firebase/firestore'
import { Col, Container, Row } from 'react-grid-system'
import ReactLoading from 'react-loading'
import { UserAuth } from '../context/AuthContext'
import { firestore } from '../firebase'
import RequestPreview from './RequestPreview'

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
      where('approved', '==', props.status)
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

          <Row
            style={{
              backgroundColor:"#363636",
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
       
            <RequestPreview  doc={d} ></RequestPreview>
            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 1,
                padding: 6,
                color: 'white',
                fontSize: 9,
                marginBottom:10,
              }}
            >
              <Container>{d.msg}</Container>

         
             
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
