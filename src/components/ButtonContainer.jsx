import React from "react";
import {Container,Row,Col} from 'react-grid-system';
import styled from "styled-components";
import { BsCalendarDate } from "react-icons/bs";
import { Link } from "react-router-dom";



function ButtonContainer() {

    return (
      <div>
        <Row style={{height: 80,marginTop:5}}>
            <Col style={{backgroundColor:'green',margin:2}}>
            </Col>
            <Col style={{margin:2,padding:5}}>
               <button onClick={()=>{
                <Link to={"bookings"} />
              }}  style={{width:"100%"}}>
              <Row style={{justifyContent:"center"}}>
              <BsCalendarDate size={40}/>
              </Row> 
              <Row style={{justifyContent:"center"}}>
              <p>Disponibilidad</p>
              </Row>   
              </button> 
            


            </Col>
        </Row>
        <Row style={{height: 80,marginTop:30}}>
            <Col style={{backgroundColor:'green',margin:2}}>
        
            </Col>
            <Col style={{backgroundColor:'green',margin:2}}>
            </Col>
        </Row>
      </div>
    );
}

export default ButtonContainer;


const GoogleButtonContainer = styled.div `
display: flex;
  justify-content: center;

`;