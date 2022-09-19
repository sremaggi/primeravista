import React,{useState,useContext} from 'react';
import { DateRange } from 'react-date-range';
import styled from "styled-components";
import { es } from 'date-fns/locale'
import {Container,Row,Col} from 'react-grid-system';
import { addDays, format} from "date-fns";
import { Context } from "../App";
import { Link,useNavigate } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { UserAuth } from '../context/AuthContext';

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',timeZone: "America/Santiago" };

const bookings = [{
    startDate:new Date(2022,8,16),
    endDate: new Date(2022,8,19),
    key: 'selection',
    color:'red',
    disabled: true,
  }]

  const highDemands = [{
    startDate:new Date(2022,8,16),
    endDate: new Date(2022,8,19),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },{
    startDate:new Date(2022,9,8),
    endDate: new Date(2022,9,9),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },{
    startDate:new Date(2022,9,29),
    endDate: new Date(2022,9,30),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  }]

  const offerts = [{
    startDate:new Date(2022,8,23),
    endDate: new Date(2022,8,25),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  }]

  const lowDemands = [{
    startDate:new Date(2022,9,16),
    endDate: new Date(2022,9,16),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },{
    startDate:new Date(2022,9,23),
    endDate: new Date(2022,9,23),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },{
    startDate:new Date(2022,10,6),
    endDate: new Date(2022,10,6),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },{
    startDate:new Date(2022,10,13),
    endDate: new Date(2022,10,13),
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

    offerts.forEach(b=>{
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
                  background: "#00D4C1",
                  position: "absolute",
                  top: 2,
                  right: 2,
                }}
              />
            )
          }
      })
  })

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
                    height: "8px",
                    width: "8px",
                    borderRadius: "100%",
                    //background: "orange",
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
                    //background: "yellow",
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

    return count
  }


  function getOfferts(state){
    let count = 0
    let selectedDates = getDatesInRange(state[0].startDate,state[0].endDate)
    selectedDates.forEach(sd =>{
        offerts.forEach(lds=>{
            let o = getDatesInRange(lds.startDate,lds.endDate)
            o.forEach(ld=>{
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

    return count
  }


function CalendarComponent() {
  const navigate = useNavigate();
   const {user} = UserAuth();
    const [state, setState] = useState([
        {
            startDate:new Date(2022,8,1),
            endDate: new Date(2022,8,1),
            key: 'selection',
            color:'#7FA251',
            showDateDisplay: false,
          }
      ]);


    return (
        <div>
 <Container style={{}}>
               <Row style={{display:"flex",color:"white",justifyContent:"center",marginTop:10}}>

        <Col sm={8} xs={8} md={8} lg={8} xl={8} xxl={8} xxxl={8} style={{backgroundColor:"#454545",flexDirection:"column",justifyContent:"center",display:"flex",color:"black",alignItems:"center",fontSize:13,color:"white",textJustify:"inter-word",textAlign:"justify",borderRadius:10}}>
        <Row style={{padding:10,margin:2}}>
        Realiza tu solicitud y nos contactaremos contigo a la brevedad para concretar la reserva.
        </Row>

        
        </Col>
        <Col sm={4} xs={4} md={4} lg={4} xl={4} xxl={4} xxxl={4} style={{flexDirection:"column",justifyContent:"center",display:"flex",color:"black",alignItems:"center",fontSize:13}}>
        <Row style={{backgroundColor:"#CDCDCD",display:"flex",width:"100%",justifyContent:"center",padding:3,fontSize:10}}>
        No disponible
        </Row>
        <Row style={{backgroundColor:"#7FA251",display:"flex",width:"100%",justifyContent:"center",color:"white",padding:3,fontSize:10}}>
          Selección
        </Row>
        <Row style={{backgroundColor:"#00D4C1",display:"flex",width:"100%",justifyContent:"center",color:"black",padding:3,fontSize:10}}>
          Oferta
        </Row>
        </Col>
        </Row>
        </Container>   
    <div style={{display:"flex",justifyContent:"center",backgroundColor:"white"}}>
    <DateRange

editableDateInputs={true}
onChange={item => setState([item.selection])}
moveRangeOnFirstSelection={false}
ranges={state}
dayContentRenderer={customDayContent}
minDate={addDays(new Date(),0)}
maxDate={addDays(new Date(), 90)}
disabledDates={[
  new Date(2022,8,13),
  new Date(2022,8,14),
  new Date(2022,8,15),
  new Date(2022,8,16),
  new Date(2022,8,17),
  new Date(2022,8,18),
  new Date(2022,8,19),
  new Date(2022,8,30),
  new Date(2022,9,1),
  new Date(2022,9,7),
  new Date(2022,9,8),
]}
direction="vertical"
color="#FFF4D1"
scroll={{ enabled: true,

}}
locale={es}
/>

    </div>             

<Container>
  
<Row style={{display:"flex",color:"white",justifyContent:"center",padding:10}}>
        <Col style={{backgroundColor:"#7FA251",padding:5,fontSize:12}}>
        <Row style={{display:"flex",justifyContent:"center"}}>
        Llegada
        </Row> 
        
        <Row style={{display:"flex",justifyContent:"center",fontSize:10}}>
        {state[0].endDate != null && ((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24)) >= 1  ? new Date(state[0].startDate).toLocaleString("es-CL", options).toUpperCase()  :""}

        </Row>    
        </Col>
        

        <Col style={{backgroundColor:"#C16C6C",padding:5,fontSize:12}}>
        <Row style={{display:"flex",justifyContent:"center"}}>
        Salida
        </Row> 
        
        <Row style={{display:"flex",justifyContent:"center",fontSize:10}}>
        {state[0].endDate != null && ((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24)) >= 1  ? new Date(state[0].endDate).toLocaleString("es-CL", options).toUpperCase() :""}


        </Row>    
        </Col>
 </Row> 
 <Row style={{backgroundColor:"#454545",padding:10,borderRadius:10,margin:5,fontSize:12,display:"flex",justifyContent:"center",color:"white",textJustify:"inter-word",textAlign:"justify"}}>
        Por reservas superiores a 5 noches, se aplica un descuento
        </Row>
 <Row style={{display:"flex",justifyContent:"center",backgroundColor:"#42AB06",padding:5,color:"white",fontSize:13}}>
    <Col style={{display:"flex",justifyContent:"end"}}>
    Noches Solicitadas
    </Col>
    <Col style={{display:"flex",justifyContent:"center"}}>
    { ((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))}
    </Col>


 </Row>
 
 <Row style={{display:"flex",justifyContent:"center",backgroundColor:"#42AB06",padding:5,color:"white",fontSize:13}}>
    <Col style={{display:"flex",justifyContent:"end"}}>
    Monto 
    </Col>
    <Col style={{display:"flex",justifyContent:"center"}}>
    ${ state[0].endDate != null && getOfferts(state) != 3 && ((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24)) >= 1 ? 
    (((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))+1) > 6 ?
    (getLowDemand(state)*85000 + getHighDemand(state)*105000 + 
    ((((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))+1)-(getLowDemand(state)+getHighDemand(state)))*40000) *0.90 :
    (getLowDemand(state)*85000 + getHighDemand(state)*105000 + 
    ((((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))+1)-(getLowDemand(state)+getHighDemand(state)))*40000)
    :""}
    {getOfferts(state) == 3 ? 80000 + (((((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))+1)-getOfferts(state))*40000 ):""
    }
    </Col>


 </Row>
 <Row style={{display:"flex",justifyContent:"center",backgroundColor:"#42AB06",padding:5,color:"white",fontSize:13}}>
    <Col style={{display:"flex",justifyContent:"end"}}>
    Descuento
    </Col>
    <Col style={{display:"flex",justifyContent:"center"}}>
    { (((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))+1) > 6 
    ? "10 %" : "0 %"}

    </Col>


 </Row>
 
 <Row style={{display:"flex",justifyContent:"center"}}>
   {user?.displayName && (((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))+1) > 1  ? 

        <button 
        onClick={()=>{
          let mount;
          if (getOfferts(state) == 3){
            mount = 80000
          }else{
            mount = (((((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))+1)-(getLowDemand(state)+getHighDemand(state)))*65000)
            + (getLowDemand(state)*85000) + (getHighDemand(state)*105000) ;
          }
          navigate('/bookings/request', {state:{ 
            mount: mount,
            startDate:{y:state[0].startDate.getFullYear(),
              m:state[0].startDate.getMonth()+1,
              d:state[0].startDate.getUTCDate()},
            finishDate:{y:state[0].endDate.getFullYear(),
              m:state[0].endDate.getMonth()+1,
              d:state[0].endDate.getUTCDate()},
            days:{
              hd: getHighDemand(state),
              ld: getLowDemand(state),
              nd: ((((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))+1)-(getLowDemand(state)+getHighDemand(state))),
              total:((state[0].endDate.getTime() - state[0].startDate.getTime())/ (1000 * 3600 * 24))+1
            }  
          }})
        }}
    style={{padding:20,backgroundColor:"#037D77",color:"white",fontWeight:"bold"}}>  Realizar Solicitud</button>
 
    :

        <button 
    onClick={()=>{

     alert("Debes \n 1.Iniciar sesión. \n 2.Seleccionar al menos una noche. \n Luego podrás realizar una solicitud")
        
    }}
    style={{padding:20,backgroundColor:"#037D77",color:"white",fontWeight:"bold"}}> Realizar Solicitud</button>
  }

   
 </Row>
</Container>
        </div>
    
    );
}

export default CalendarComponent;





