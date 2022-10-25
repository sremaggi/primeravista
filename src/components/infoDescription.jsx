import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-grid-system'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function InfoDescription(props) {
  const { user } = UserAuth()

  return (
    <>
      <Row style={{display:"flex",justifyContent:"center",marginTop:3,padding:5,fontSize:12, backgroundColor:"#F3F3F3",fontSize:13}}>
        <Col style={{display:"flex",justifyContent:"center"}}>
        {props.title}
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        {props.desc}
        </Col>
        <Col style={{display:"flex",justifyContent:"center"}}>
        {props.qty}
        </Col>

       </Row>



  )
}

export default InfoDescription
