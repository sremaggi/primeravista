import React,{useState,useContext} from 'react';
import { DateRange } from 'react-date-range';
import styled from "styled-components";
import { es } from 'date-fns/locale'
import {Container,Row,Col} from 'react-grid-system';
import { addDays, format} from "date-fns";
import { Context } from "../App";
import { Link } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const bookings = [{
    startDate:new Date(2022,8,9),
    endDate: new Date(2022,8,10),
    key: 'selection',
    color:'red',
    disabled: true,
  },{
    startDate:new Date(2022,8,12),
    endDate: new Date(2022,8,14),
    key: 'selection',
    color:'red',

    disabled: true,
  }]

  const highDemands = [{
    startDate:new Date(2022,8,18),
    endDate: new Date(2022,8,19),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  }]

  const lowDemands = [{
    startDate:new Date(2022,8,26),
    endDate: new Date(2022,8,27),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  }]

function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate.getTime());
  
    const dates = [];
  
    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
  
    return dates;
  }
function customDayContent(day) {
    let extraDot = null;

    highDemands.forEach(b=>{
        let dates = getDatesInRange(b.startDate,b.endDate)
        dates.forEach(d=>{
            if(
                day.getFullYear() === d.getFullYear() &&
                day.getMonth() === d.getMonth() &&
                day.getDate() === d.getDate()
              ) {
              extraDot = (
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    borderRadius: "100%",
                    background: "orange",
                    position: "absolute",
                    top: 2,
                    right: 2,
                  }}
                />
              )
            }
        })
    })

    lowDemands.forEach(b=>{
        let dates = getDatesInRange(b.startDate,b.endDate)
        dates.forEach(d=>{
            if(
                day.getFullYear() === d.getFullYear() &&
                day.getMonth() === d.getMonth() &&
                day.getDate() === d.getDate()
              ) {
              extraDot = (
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    borderRadius: "100%",
                    background: "yellow",
                    position: "absolute",
                    top: 2,
                    right: 2,
                  }}
                />
              )
            }
        })
    })
    return (
      <div>
        {extraDot}
        <span >{format(day, "d")}</span>
      </div>
    )
  }

  function getLowDemand(state){
    let count = 0
    let selectedDates = getDatesInRange(state[0].startDate,state[0].endDate)
    selectedDates.forEach(sd =>{
        lowDemands.forEach(lds=>{
            let lowDemands = getDatesInRange(lds.startDate,lds.endDate)
            lowDemands.forEach(ld=>{
                if(
                    sd.getFullYear() === ld.getFullYear() &&
                    sd.getMonth() === ld.getMonth() &&
                    sd.getDate() === ld.getDate()
                  ) {
                    count = count+1
                  }
            })
        })
    })
    console.log('low demand',count)
    return count
  }

  function getHighDemand(state){
    let count = 0
    let selectedDates = getDatesInRange(state[0].startDate,state[0].endDate)
    selectedDates.forEach(sd =>{
        highDemands.forEach(lds=>{
            let highDemands = getDatesInRange(lds.startDate,lds.endDate)
            highDemands.forEach(ld=>{
                if(
                    sd.getFullYear() === ld.getFullYear() &&
                    sd.getMonth() === ld.getMonth() &&
                    sd.getDate() === ld.getDate()
                  ) {
                    count = count+1
                  }
            })
        })
    })
    console.log('high demand',count)
    return count
  }


function CalendarComponent() {
    const context = useContext(Context)
    const [state, setState] = useState([
        {
            startDate:new Date(),
            endDate: new Date(),
            key: 'selection',
            color:'#7FA251',
            showDateDisplay: false,
          }
      ].concat(bookings));
      console.log(getDatesInRange(state[0].startDate,state[0].endDate))

    return (
        <div>
 <Container style={{backgroundColor:"white"}}>
               <Row style={{display:"flex",backgroundColor:"white",color:"white",justifyContent:"center",marginTop:10}}>
        <Col style={{backgroundColor:"red"}}>
        </Col>
        <Col   style={{color:"black",justifyContent:"center",display:"flex",fontSize:10,alignItems:"center"}}>
        Reservado
        </Col>
        <Col style={{backgroundColor:"yellow",justifyContent:"center",display:"flex",color:"black",alignItems:"center",fontSize:13}}>
        {state[0].endDate != null ? getLowDemand(state) :""}
        </Col>
        <Col   style={{color:"black",justifyContent:"center",display:"flex",fontSize:10,alignItems:"center"}}>
        Tarifa media
        </Col>
        <Col style={{backgroundColor:"orange",justifyContent:"center",display:"flex",color:"black",alignItems:"center",fontSize:13}}>
        {state[0].endDate != null ? getHighDemand(state) :""}
        </Col>
        <Col   style={{color:"black",justifyContent:"center",display:"flex",fontSize:10,alignItems:"center"}}>
        Tarifa alta
        </Col>
        </Row>
        </Container>   
    <div style={{display:"flex",justifyContent:"center",backgroundColor:"white"}}>
    <DateRange

editableDateInputs={true}
onChange={item => setState([item.selection].concat(bookings))}
dayContentRenderer={customDayContent}
moveRangeOnFirstSelection={false}
ranges={state}
minDate={addDays(new Date(),0)}
maxDate={addDays(new Date(), 200)}
direction="vertical"
rangeColors={["white","white","white",]}
color="#FFF4D1"
scroll={{ enabled: true,// defaults monthWidth * months
calendarHeight: 240,}}
locale={es}
/>
    </div>             

<Container>
<Row style={{display:"flex",color:"white",justifyContent:"center",padding:10}}>
        <Col style={{backgroundColor:"#7FA251",padding:5,fontSize:12}}>
        <Row style={{display:"flex",justifyContent:"center"}}>
        Llegada
        </Row> 
        
        <Row style={{display:"flex",justifyContent:"center"}}>
        {state[0].endDate != null ? new Date(state[0].startDate).getFullYear() :""}/
        {state[0].endDate != null ? (new Date(state[0].startDate).getMonth() < 10 ? `0${new Date(state[0].startDate).getMonth()}`:new Date(state[0].startDate).getMonth()) :""}
        /{state[0].endDate != null ? (new Date(state[0].startDate).getUTCDate() < 10 ? `0${new Date(state[0].startDate).getUTCDate()}`:new Date(state[0].startDate).getUTCDate())  :""}
        </Row>    
        </Col>
        

        <Col style={{backgroundColor:"#C16C6C",padding:5,fontSize:12}}>
        <Row style={{display:"flex",justifyContent:"center"}}>
        Salida
        </Row> 
        
        <Row style={{display:"flex",justifyContent:"center"}}>
        {state[0].endDate != null ? new Date(state[0].endDate).getFullYear() :""}/
        {state[0].endDate != null ? (new Date(state[0].endDate).getMonth() < 10 ? `0${new Date(state[0].endDate).getMonth()}`:new Date(state[0].endDate).getMonth()) :""}
        /{state[0].endDate != null ? (new Date(state[0].endDate).getUTCDate() < 10 ? `0${new Date(state[0].endDate).getUTCDate()}`:new Date(state[0].endDate).getUTCDate())  :""}
        </Row>    
        </Col>
 </Row> 

 <Row style={{display:"flex",justifyContent:"center",backgroundColor:"#454545",padding:5,color:"white",fontSize:13}}>
    <Col style={{display:"flex",justifyContent:"center"}}>
    Dias
    </Col>
    <Col style={{display:"flex",justifyContent:"center"}}>
    { ((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))+1}
    </Col>
    <Col style={{display:"flex",justifyContent:"center"}}>
    Monto
    </Col>
    <Col style={{display:"flex",justifyContent:"center"}}>
    ${(((((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))+1)-(getLowDemand(state)+getHighDemand(state)))*65000)
      + (getLowDemand(state)*85000) + (getHighDemand(state)*105000)
    }
    </Col>

 </Row>
 <Row style={{display:"flex",justifyContent:"center"}}>
   {Object.keys(context.user) != 0 ? 
   <Link to={"/Bookings/Request"}>
        <button 
    style={{padding:20,backgroundColor:"#9A7D9E",color:"white",fontWeight:"bold"}}> Realizar solicitud</button>
   </Link>
    :
    <Link to={"/Bookings"}>
        <button 
    onClick={()=>{
     alert("Debes iniciar sesión para poder realizar una solicitud.")
        
    }}
    style={{padding:20,backgroundColor:"#9A7D9E",color:"white",fontWeight:"bold"}}> Realizar solicitud</button>
    </Link>}

   
 </Row>
</Container>
        </div>
    
    );
}

export default CalendarComponent;




