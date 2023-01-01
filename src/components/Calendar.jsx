import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { DateRange } from 'react-date-range'
import { es } from 'date-fns/locale'
import { Container, Row, Col } from 'react-grid-system'
import { addDays, format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { UserAuth } from '../context/AuthContext'
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { UseWindowSize } from '../context/UseWidth'
import TitleContainer from './TitleContainer';
import SubTitleContainer from './SubTitleContainer';

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'America/Santiago',
}

function getBookings(requests){
  let bookings = [];
  requests.forEach(r=>{
    let rangeRequests = getDatesInRange(new Date(r.startDate.y, r.startDate.m -1, r.startDate.d),new Date(r.finishDate.y, r.finishDate.m-1,r.finishDate.d))
    rangeRequests.shift()
    rangeRequests.pop()
    bookings = bookings.concat(rangeRequests)
  })


return bookings
  

}

const bookings = getDatesInRange(new Date(2022, 11, 5),new Date(2022, 11, 8))

const highDemands = [
  {
    startDate: new Date(2022, 11, 23),
    endDate: new Date(2022, 11, 26),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },
  {
    startDate: new Date(2022, 11, 29),
    endDate: new Date(2023, 0, 2),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },
]

const lowDemands = [
  {
    startDate: new Date(2022, 8, 16),
    endDate: new Date(2022, 8, 19),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },
  {
    startDate: new Date(2022, 9, 8),
    endDate: new Date(2022, 9, 9),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },
  {
    startDate: new Date(2022, 9, 28),
    endDate: new Date(2022, 10, 1),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },
  {
    startDate: new Date(2022, 11, 8),
    endDate: new Date(2022, 11, 22),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },
  {
    startDate: new Date(2023, 0, 16),
    endDate: new Date(2023, 1, 28),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },
]

const offerts = [
  {
    startDate: new Date(2022, 8, 23),
    endDate: new Date(2022, 8, 25),
    key: 'selection',
    disabled: true,
    showDateDisplay: false,
  },
]

function getDatesInRange(startDate, endDate) {
  const date = new Date(startDate.getTime())

  const dates = []

  while (date <= endDate) {
    dates.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return dates
}
function customDayContent(day) {
  let extraDot = null

  offerts.forEach((b) => {
    const dates = getDatesInRange(b.startDate, b.endDate)
    dates.forEach((d) => {
      if (
        day.getFullYear() === d.getFullYear() &&
        day.getMonth() === d.getMonth() &&
        day.getDate() === d.getDate()
      ) {
        extraDot = (
          <div
            style={{
              height: '6px',
              width: '6px',
              borderRadius: '100%',
              background: '#00D4C1',
              position: 'absolute',
              top: 2,
              right: 2,
            }}
          />
        )
      }
    })
  })

  highDemands.forEach((b) => {
    const dates = getDatesInRange(b.startDate, b.endDate)
    dates.forEach((d) => {
      if (
        day.getFullYear() === d.getFullYear() &&
        day.getMonth() === d.getMonth() &&
        day.getDate() === d.getDate()
      ) {
        extraDot = (
          <div
            style={{
              height: '8px',
              width: '8px',
              borderRadius: '100%',
              background: 'orange',
              position: 'absolute',
              top: 2,
              right: 2,
            }}
          />
        )
      }
    })
  })

  lowDemands.forEach((b) => {
    const dates = getDatesInRange(b.startDate, b.endDate)
    dates.forEach((d) => {
      if (
        day.getFullYear() === d.getFullYear() &&
        day.getMonth() === d.getMonth() &&
        day.getDate() === d.getDate()
      ) {
        extraDot = (
          <div
            style={{
              height: '6px',
              width: '6px',
              borderRadius: '100%',
              background: 'yellow',
              position: 'absolute',
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
      <span>{format(day, 'd')}</span>
    </div>
  )
}

function getLowDemand(state) {
  let count = 0
  const selectedDates = getDatesInRange(state[0].startDate, state[0].endDate)
  selectedDates.forEach((sd) => {
    lowDemands.forEach((lds) => {
      const lowDemands = getDatesInRange(lds.startDate, lds.endDate)
      lowDemands.forEach((ld) => {
        if (
          sd.getFullYear() === ld.getFullYear() &&
          sd.getMonth() === ld.getMonth() &&
          sd.getDate() === ld.getDate()
        ) {
          count += 1
        }
      })
    })
  })

  if (count === 0) {
    return 0
  }
  return count - 1
}

function getSelectedNights(state) {
  const days =
    (state[0].endDate.getTime() - state[0].startDate.getTime()) /
    (1000 * 3600 * 24)
  return days
}

function getNormalDay(state) {
  const days =
    getSelectedNights(state) - (getLowDemand(state) + getHighDemand(state))
  return days
}
function getHighDemand(state) {
  let count = 0
  const selectedDates = getDatesInRange(state[0].startDate, state[0].endDate)
  selectedDates.forEach((sd) => {
    highDemands.forEach((lds) => {
      const highDemands = getDatesInRange(lds.startDate, lds.endDate)
      highDemands.forEach((ld) => {
        if (
          sd.getFullYear() === ld.getFullYear() &&
          sd.getMonth() === ld.getMonth() &&
          sd.getDate() === ld.getDate()
        ) {
          count += 1
        }
      })
    })
  })

  if (count === 0) {
    return 0
  }
  return count - 1
}

function getOfferts(state) {
  let count = 0
  const selectedDates = getDatesInRange(state[0].startDate, state[0].endDate)
  selectedDates.forEach((sd) => {
    offerts.forEach((lds) => {
      const o = getDatesInRange(lds.startDate, lds.endDate)
      o.forEach((ld) => {
        if (
          sd.getFullYear() === ld.getFullYear() &&
          sd.getMonth() === ld.getMonth() &&
          sd.getDate() === ld.getDate()
        ) {
          count += 1
        }
      })
    })
  })

  return count
}

function CalendarComponent(props) {

  document.body.style.zoom = '100%'
  const navigate = useNavigate()
  const { user } = UserAuth()
  const [loadDocs, setLoadDocs] = useState(true)
  const [bookings, setBookings] = useState([])
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
      color: '#7FA251',
      showDateDisplay: false,
    }
  ])

  const [documents, setDocuments] = useState([]);
  const q = query(collection(firestore, "requests"),where('approved', '==', true),where('approved', '==', true))
  const getDocuments = async () => {
    try{
      const data = await getDocs(q);
      setDocuments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      setLoadDocs(true)
    }catch(e){
      console.log(e)
    }
  }
  
  getDocuments()

  //console.log( documents)


  return (
    <div>
    
    <TitleContainer title="Calendario de reservas" />
    <Alert severity="warning">Realiza tu solicitud, y nos contactaremos contigo a la brevedad.</Alert>

      <div
        style={{
          display: 'flex',
          marginTop:4,
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <DateRange
          editableDateInputs
          showDateDisplay
          months={props.months}
          onChange={(item) => setState([item.selection].concat())}
          moveRangeOnFirstSelection={false}
          ranges={state}
          //dayContentRenderer={customDayContent}
          minDate={addDays(new Date(), 0)}
          maxDate={addDays(new Date(), 150)}
          disabledDates={
            getBookings(documents).concat(
            [new Date(2022, 11, 29),
            new Date(2022, 11, 30),
            new Date(2022, 11, 31),
            new Date(2023, 0, 1),
            new Date(2023, 0, 2),
            new Date(2023, 0, 3),
            new Date(2023, 0, 4),
            new Date(2023, 0, 5),
            new Date(2023, 0, 6),
            new Date(2023, 0, 7),
            new Date(2023, 0, 8),
            new Date(2023, 0, 9),
            new Date(2023, 0, 10),
            new Date(2023, 0, 11),
            new Date(2023, 0, 12),
            new Date(2023, 0, 13),
            new Date(2023, 0, 14),
            new Date(2023, 0, 29),
            new Date(2023, 0, 30),
            new Date(2023, 0, 31),
            new Date(2023, 1, 1),
            new Date(2023, 1, 2),
            new Date(2023, 1, 3),
            new Date(2023, 1, 4),
            new Date(2023, 1, 5),
            new Date(2023, 1, 6),
            new Date(2023, 1, 7),
            new Date(2023, 1, 8),
            new Date(2023, 1, 9),
            new Date(2023, 1, 10),
            new Date(2023, 1, 11),
            new Date(2023, 1, 12),
            new Date(2023, 1, 13),
            new Date(2023, 1, 14),
            new Date(2023, 1, 15),
            new Date(2023, 1, 16),
            new Date(2023, 1, 17),
            new Date(2023, 1, 18)
            ])


          }
          direction={props.orientation}
          color="#FFF4D1"
          scroll={{
            enabled: true

          }}
          locale={es}
        />
      </div>

      <Row style={{ color: 'white', justifyContent: 'center', padding: 10 }}>
        <Col style={{ backgroundColor: '#7FA251', padding: 10, fontSize: 12 }}>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            Llegada
          </Row>

          <Row
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: 15,
              fontSize: 9,
            }}
          >
            {state[0].endDate != null &&
            (state[0].endDate.getTime() - state[0].startDate.getTime()) /
              (1000 * 3600 * 24) >=
              1
              ? new Date(state[0].startDate)
                  .toLocaleString('es-CL', options)
                  .toUpperCase()
              : ''}
          </Row>
        </Col>

        <Col style={{ backgroundColor: '#C16C6C', padding: 10, fontSize: 12 }}>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            Salida
          </Row>

          <Row
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: 15,
              fontSize: 9,
            }}
          >
            {state[0].endDate != null &&
            (state[0].endDate.getTime() - state[0].startDate.getTime()) /
              (1000 * 3600 * 24) >=
              1
              ? new Date(state[0].endDate)
                  .toLocaleString('es-CL', options)
                  .toUpperCase()
              : ''}
          </Row>
        </Col>
      </Row>
      <Container>
      <Alert severity="info">Por reservar sobre 5 noches, se aplica un descuento.</Alert>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'darkslategray',
            padding: 5,
            marginTop:10,
            color: 'white',
            fontSize: 13,
          }}
        >
          <Col style={{ display: 'flex', justifyContent: 'end' }}>
            Noches Solicitadas
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            {getSelectedNights(state)}
          </Col>
        </Row>

        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'darkslategray',
            padding: 5,
            color: 'white',
            fontSize: 13,
          }}
        >
          <Col style={{ display: 'flex', justifyContent: 'end' }}>Monto</Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            $
            {state[0].endDate != null
              ? getSelectedNights(state) > 5
                ? (getNormalDay(state) * 90000 +
                    getLowDemand(state) * 105000 +
                    getHighDemand(state) * 125000) *
                  0.9
                : getNormalDay(state) * 90000 +
                  getLowDemand(state) * 105000 +
                  getHighDemand(state) * 125000
              : ''}
          </Col>
        </Row>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'darkslategray',
            padding: 5,
            color: 'white',
            fontSize: 13,
          }}
        >
          <Col style={{ display: 'flex', justifyContent: 'end' }}>
            Descuento
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            {(state[0].endDate.getTime() - state[0].startDate.getTime()) /
              (1000 * 3600 * 24) +
              1 >
            6
              ? '10 %'
              : '0 %'}
          </Col>
        </Row>

        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          {user?.displayName &&
          (state[0].endDate.getTime() - state[0].startDate.getTime()) /
            (1000 * 3600 * 24) +
            1 >
            1 ? (
      
            <Button
            variant="contained"
            color={"success"}
             size="large"
              onClick={() => {
                navigate('/bookings/request', {
                  state: {
                    mount:
                      getSelectedNights(state) > 5
                        ? (getNormalDay(state) * 90000 +
                            getLowDemand(state) * 105000 +
                            getHighDemand(state) * 125000) *
                          0.9
                        : getNormalDay(state) * 90000 +
                          getLowDemand(state) * 105000 +
                          getHighDemand(state) * 125000,
                    startDate: {
                      y: state[0].startDate.getFullYear(),
                      m: state[0].startDate.getMonth() + 1,
                      d: state[0].startDate.getUTCDate(),
                    },
                    finishDate: {
                      y: state[0].endDate.getFullYear(),
                      m: state[0].endDate.getMonth() + 1,
                      d: state[0].endDate.getUTCDate(),
                    },
                    nights: getSelectedNights(state),
                    rangeDates: getDatesInRange(
                      state[0].startDate,
                      state[0].endDate,
                    ),
                  },
                })
              }}
              style={{
                margin:20,
              
               }}
            >
              {' '}
              Realizar Solicitud
            </Button>
          ) : (
            <Button
            variant="contained"
            color={"success"}
             size="large"
              onClick={() => {
                alert(
                  'Debes \n 1.Iniciar sesión. \n 2.Seleccionar al menos una noche. \n Luego podrás realizar una solicitud',
                )
              }}
              style={{
               margin:20,
             
              }}
            >
              {' '}
              Realizar Solicitud
            </Button>
          )}
        </Row>
      </Container>
  
    </div>
  )
}

export default CalendarComponent
