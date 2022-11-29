import React, { useState,useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {Container,Row,Col} from 'react-grid-system';
import { UserAuth } from "../context/AuthContext";

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Santiago',
  }



function RequestPreview(props) {
    
//console.log(props.doc)
    return (
        <>  
            
            <div style={{marginTop:20}}>

            <Row
              style={{
       
                backgroundColor:"#546350",
                display: 'flex',
                justifyContent: 'center',
                padding: 3,
                color: 'white',
                fontSize: 10,
              }}
            >
              <Col style={{display:"flex",justifyContent:"center"}}>
            {props.doc.user.name}
              </Col>
              <Col style={{display:"flex",justifyContent:"center"}}>
              {props.doc.user.email}
              </Col>
           
            </Row>
            <Row
              style={{
                backgroundColor:"#788A73",
                display: 'flex',
                justifyContent: 'center',
                padding: 3,
                color: 'white',
                fontSize: 10,
              }}
            >
              <Col style={{display:"flex",justifyContent:"center"}}>
               {props.doc.user.phone}
              </Col>
              <Col style={{display:"flex",justifyContent:"center"}}>
              {props.doc.user.qty} Personas
              </Col>
           
            </Row>
            <Row
              style={{
                backgroundColor:"#788A73",
                display: 'flex',
                justifyContent: 'center',
                padding: 3,
                color: 'white',
                fontSize: 10,
              }}
            >
              <Col style={{display:"flex",justifyContent:"center"}}>
               Monto
              </Col>
              <Col style={{display:"flex",justifyContent:"center"}}>
              {props.doc.mount}
              </Col>
           
            </Row>
            <Row
              style={{
                
                backgroundColor:"#7FC96D",
                display: 'flex',
                justifyContent: 'center',
                marginTop: 1,
                padding: 3,
                color: 'white',
                fontSize: 10,
              }}
            >
              <Col style={{display:"flex",justifyContent:"center"}}>
             Llegada
              </Col>
            </Row>
            <Row
              style={{
                
                backgroundColor:"#7FC96D",
                display: 'flex',
                justifyContent: 'center',
            
                padding: 3,
                color: 'white',
                fontSize: 10,
              }}
            >
              <Col style={{display:"flex",justifyContent:"center",fontWeight:"bold"}}>
              {new Date(props.doc.startDate.y, props.doc.startDate.m -1, props.doc.startDate.d)
                  .toLocaleString('es-CL', options)
                  .toUpperCase()}
              </Col>
           
            </Row>
            <Row
              style={{
                
                
                backgroundColor:"#C9806D",
                display: 'flex',
                justifyContent: 'center',
                marginTop: 1,
                padding: 3,
                color: 'white',
                fontSize: 10,
              }}
            >
              <Col style={{display:"flex",justifyContent:"center"}}>
             Salida
              </Col>
            </Row>
            <Row
              style={{
                
                 
                backgroundColor:"#C9806D",
                display: 'flex',
                justifyContent: 'center',
                padding: 3,
                color: 'white',
                fontSize: 10,
              }}
            >
              <Col style={{display:"flex",justifyContent:"center",fontWeight:"bold"}}>
              {new Date(props.doc.finishDate.y, props.doc.finishDate.m -1, props.doc.finishDate.d)
                  .toLocaleString('es-CL', options)
                  .toUpperCase()}
              </Col>
           
            </Row>
            <Row
                  style={{
                    backgroundColor: '#F7F7F7',
                    borderWidth:10,
                    borderColor:"red",
                    display: 'flex',
                    padding: 5,

                    justifyContent: 'center',
                    fontSize: 10,
                  }}
                >

                 {props.doc.approved === true ? (
                    <div style={{ color: 'green', fontWeight: 'bold' }}>
                      {' '}
                      Aceptado
                    </div>
                  ) : ( props.doc.rejected === true ? 
                    <div style={{ color: 'red', fontWeight: 'bold' }}>
                      {' ' + ' Rechazado'}
                    </div>
                  : <div style={{ color: 'orange', fontWeight: 'bold' }} >
                  En espera

                </div>)}
                </Row>
            </div>
        </>
    );
}

export default RequestPreview;



