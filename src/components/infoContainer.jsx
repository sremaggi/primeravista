import React, { useState, useContext } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Alert from '@mui/material/Alert';
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
import { GiCookingPot } from 'react-icons/gi'
import { TbToiletPaper } from 'react-icons/tb'
import { RiHotelBedLine } from 'react-icons/ri'
import { WiSunrise } from 'react-icons/wi'
import { MdOutlineYard } from 'react-icons/md'
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
import TitleContainer from './TitleContainer'
import SubTitleContainer from './SubTitleContainer';

function InfoContainer(props) {
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

      <Container>
      <Container><Alert severity="success">Capacidad 6 Personas</Alert></Container>
     
    <Box   style={{justifyContent:"center",alignContent:"center"}} sx={{
      display: 'flex',
      '& > *': {
        m: 1,
      },
    }}>
         <ButtonGroup
        orientation="horizontal"
        
   
      >
       
      <Button
       startIcon={<GiBed size={25} style={styles.icon} /> }
       variant={bedroom?"contained":"outlined"}
       color={"success"}
        size="small"
        style={styles.infoButton}
        onClick={() =>{
        clickBathRoom(false)
        clickKitchen(false)
        clickBedRoom(!bedroom)}}
        >
      Habitación 
      </Button>
      <Button
      startIcon={<TbToiletPaper size={25} style={styles.icon} />}
      variant={bathroom?"contained":"outlined"}
      color={"success"}
      size="small"
      onClick={() => {
          clickBedRoom(false)
          clickKitchen(false)
          clickBathRoom(!bathroom)}}
        style={styles.infoButton}
      >
             Baño
      </Button>
      
      <Button
        startIcon={<GiCookingPot size={25} style={styles.icon} />}
        variant={kitchen?"contained":"outlined"}
        color={"success"}
        size="small"
        onClick={() => {
          clickBathRoom(false)
          clickBedRoom(false)
          clickKitchen(!kitchen)}}
        style={styles.infoButton}
      >
        Cocina
      </Button>
      </ButtonGroup>
      </Box>
      {bedroom ? <InfornmationBedRoom /> : ''}
      {bathroom ? <InfornmationBathRoom /> : ''}
      {kitchen ? <InfornmationKitchen /> : ''}
     <Box   style={{justifyContent:"center",alignContent:"center",justifyContent:"space-around"}} sx={{
      display: 'flex',
      '& > *': {
        m: 1,
      },
    }}>
     <ButtonGroup
        orientation="horizontal"
        
   
      >

     
      <Button
           startIcon={<RiHotelBedLine size={25} style={styles.icon} />}
           variant={bedroom2?"contained":"outlined"}
           color={"success"}
           size="small"
        onClick={() => {
          clickLiving(false)
          clickDinnerRoom(false)
          clickDestkop(false)
          clickBedRoom2(!bedroom2)}}
        style={styles.infoButton}
      > Camas
      </Button>
      
      <Button
       startIcon={<GiSofa size={25} style={styles.icon} />}
       variant={living?"contained":"outlined"}
       color={"success"}
       size="small"
        onClick={() => {
          clickDestkop(false)
          clickBedRoom2(false)
          clickDinnerRoom(false)
          clickLiving(!living)}}
        style={styles.infoButton}
      >
      Living
      </Button>
      <Button
          startIcon={<GiRoundTable size={25} style={styles.icon} />}
          variant={dinnerRoom?"contained":"outlined"}
          color={"success"}
          size="small"
        onClick={() => {
          clickLiving(false)
          clickDestkop(false)
          clickBedRoom2(false)
          clickDinnerRoom(!dinnerRoom)}}
        style={styles.infoButton}
      >
        Comedor
      </Button>
      <Button
            startIcon={<GiDesk size={25} style={styles.icon} />}
            variant={desktop?"contained":"outlined"}
            color={"success"}
            size="small"
        onClick={() => {
          clickLiving(false)
          clickBedRoom2(false)
          clickDinnerRoom(false)
          clickDestkop(!desktop)}}
        style={styles.infoButton}
      >
       Escritorio
      </Button>
      </ButtonGroup>
      </Box>
      {bedroom2 ? <InfornmationBedRoom2 /> : ''}
      {living ? <InfornmationLiving /> : ''}
      {dinnerRoom ? <InformationDinnerRoom /> : ''}
      {desktop ? <InformationDesktop /> : ''}

        <SubTitleContainer title="Exterior"/>

        <Box   style={{justifyContent:"center",alignContent:"center",justifyContent:"space-around"}} sx={{
      display: 'flex',
      '& > *': {
        m: 1,
      },
    }}>
     <ButtonGroup
        orientation="horizontal"
        
   
      >
      <Button
           startIcon={<GiCityCar size={25} style={styles.icon} />}
           variant={parking?"contained":"outlined"}
           color={"success"}
           size="small"
        onClick={() => {
          clickUpGarden(false)
          clickDownGarden(false)
          clickParking(!parking)}}
        style={styles.infoButton}
      >
        Estacionamiento
      </Button>
      
      <Button
              startIcon={<WiSunrise size={25} style={styles.icon} />}
              variant={upGarden?"contained":"outlined"}
              color={"success"}
              size="small"
        onClick={() => {
          clickDownGarden(false)
          clickParking(false)
          clickUpGarden(!upGarden)}}
        style={styles.infoButton}
      >
       Patio lateral
      </Button>
      
      <Button
          startIcon={<MdOutlineYard size={25} style={styles.icon} />}
          variant={downGarden?"contained":"outlined"}
          color={"success"}
          size="small"
        onClick={() =>{
          clickParking(false)
          clickUpGarden(false)
          clickDownGarden(!downGarden)}}
        style={styles.infoButton}
      >
        Patio inferior
      </Button>
      </ButtonGroup>
      </Box>
      {parking ? <InformationParking /> : ''}
      {upGarden ? <InformationUpGarden /> : ''}
      {downGarden ? <InformationDownGarden /> : ''}
      </Container>
  )
}

export default InfoContainer


const styles = {
  icon:{},
  infoButton:{
     boxShadow: "1px 1px 4px #999",
     fontSize: 12,
      marginRight:3,
      marginLeft:3,
      borderRadius:10,
      textDecoration: 'none',
      justifyContent:'center',
    
  },
  infoRow:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
   margin:2,
    padding: 1,
    fontSize: 12,
  }
}