import React, { useEffect ,useState} from 'react'
import {Row,Col,Container} from 'react-grid-system';

import InfoContainer from '../components/infoContainer'
import { UseWindowSize } from '../context/UseWidth'
import NavbarLogin from '../components/NavBarLogin'
import TitleContainer from '../components/TitleContainer'

function Information() {
  const [width] = UseWindowSize()
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <NavbarLogin />

        <TitleContainer title="Información"/>
        <Row     style={{
              marginTop:10,
              display: 'flex',
    
            }}>
            
  
        <Col
   
          >
        <InfoContainer />
          </Col>
          </Row>
       

    </div>
  )
}

export default Information


