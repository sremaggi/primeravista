import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { DateRange } from "react-date-range";
import { es } from "date-fns/locale";
import { Container, Row, Col } from "react-grid-system";
import { addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import TitleContainer from "./TitleContainer";
import {
  customDayContent,
  getDatesInRange,
  getHighDemand,
  getLowDemand,
  getNormalDay,
  getSelectedNights,
} from "../assets/calendar/functions";

import { optionsFormat } from "../assets/calendar/format";

function getBookings(requests) {
  let bookings = [];
  requests.forEach((r) => {
    let rangeRequests = getDatesInRange(
      new Date(r.startDate.y, r.startDate.m - 1, r.startDate.d),
      new Date(r.finishDate.y, r.finishDate.m - 1, r.finishDate.d)
    );
    rangeRequests.shift();
    rangeRequests.pop();
    bookings = bookings.concat(rangeRequests);
  });

  return bookings;
}

function CalendarComponent(props) {
  document.body.style.zoom = "100%";
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [loadDocs, setLoadDocs] = useState(true);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
      color: "#7FA251",
      showDateDisplay: false,
    },
  ]);

  const [documents, setDocuments] = useState([]);
  const q = query(
    collection(firestore, "requests"),
    where("approved", "==", true)
  );
  const getDocuments = async () => {
    try {
      const data = await getDocs(q);
      setDocuments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoadDocs(true);
    } catch (e) {
      console.log(e);
    }
  };

  getDocuments();

  return (
    <div>
      <TitleContainer title="Calendario de reservas" />
      <Alert severity="success">
        Realiza tu solicitud, y nos contactaremos contigo a la brevedad.
      </Alert>

      <div
        style={{
          display: "flex",
          marginTop: 4,
          justifyContent: "center",
        }}
      >
        <DateRange
          editableDateInputs={true}
          moveRangeOnFirstSelection={false}
          onChange={(item) => setState([item.selection].concat())}
          ranges={state}
          //dayContentRenderer={customDayContent}
          minDate={addDays(new Date(), 0)}
          maxDate={addDays(new Date(), 350)}
          disabledDates={getBookings(documents)}
          direction={"vertical"}
          color="#FFF4D1"
          scroll={{
            enabled: true,
          }}
          locale={es}
        />
      </div>

      <Row style={{ color: "white", justifyContent: "center", padding: 10 }}>
        <Col style={{ backgroundColor: "#7FA251", padding: 10, fontSize: 12 }}>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            Llegada
          </Row>

          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              padding: 15,
              fontSize: 9,
            }}
          >
            {state[0].endDate != null &&
            (state[0].endDate.getTime() - state[0].startDate.getTime()) /
              (1000 * 3600 * 24) >=
              1
              ? new Date(state[0].startDate)
                  .toLocaleString("es-CL", optionsFormat)
                  .toUpperCase()
              : ""}
          </Row>
        </Col>

        <Col style={{ backgroundColor: "#C16C6C", padding: 10, fontSize: 12 }}>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            Salida
          </Row>

          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              padding: 15,
              fontSize: 9,
            }}
          >
            {state[0].endDate != null &&
            (state[0].endDate.getTime() - state[0].startDate.getTime()) /
              (1000 * 3600 * 24) >=
              1
              ? new Date(state[0].endDate)
                  .toLocaleString("es-CL", optionsFormat)
                  .toUpperCase()
              : ""}
          </Row>
        </Col>
      </Row>
      <Container>
        <Alert severity="info">
          Por reservar sobre 5 noches, se aplica un descuento.
        </Alert>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "darkslategray",
            padding: 5,
            marginTop: 10,
            color: "white",
            fontSize: 13,
          }}
        >
          <Col style={{ display: "flex", justifyContent: "end" }}>
            Noches Solicitadas
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            {getSelectedNights(state)}
          </Col>
        </Row>

        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "darkslategray",
            padding: 5,
            color: "white",
            fontSize: 13,
          }}
        >
          <Col style={{ display: "flex", justifyContent: "end" }}>Monto</Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            $
            {state[0].endDate != null
              ? getSelectedNights(state) > 5
                ? (getNormalDay(state) * 60000 +
                    getLowDemand(state) * 75000 +
                    getHighDemand(state) * 90000) *
                  0.9
                : getNormalDay(state) * 60000 +
                  getLowDemand(state) * 75000 +
                  getHighDemand(state) * 90000
              : ""}
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "darkslategray",
            padding: 5,
            color: "white",
            fontSize: 13,
          }}
        >
          <Col style={{ display: "flex", justifyContent: "end" }}>
            Descuento
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            {(state[0].endDate.getTime() - state[0].startDate.getTime()) /
              (1000 * 3600 * 24) +
              1 >
            6
              ? "10 %"
              : "0 %"}
          </Col>
        </Row>

        <Row style={{ display: "flex", justifyContent: "center" }}>
          {user?.displayName && getSelectedNights(state) >= 2 ? (
            <Button
              variant="contained"
              color={"success"}
              size="large"
              onClick={() => {
                navigate("/bookings/request", {
                  state: {
                    mount:
                      getSelectedNights(state) > 5
                        ? (getNormalDay(state) * 60000 +
                            getLowDemand(state) * 75000 +
                            getHighDemand(state) * 90000) *
                          0.9
                        : getNormalDay(state) * 60000 +
                          getLowDemand(state) * 75000 +
                          getHighDemand(state) * 90000,
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
                      state[0].endDate
                    ),
                  },
                });
              }}
              style={{
                margin: 20,
              }}
            >
              Realizar Solicitud
            </Button>
          ) : (
            <Button
              variant="contained"
              color={"success"}
              size="large"
              onClick={() => {
                alert(
                  "Debes \n 1.Iniciar sesión. \n 2.Seleccionar al menos dos noches. \n Luego podrás realizar una solicitud"
                );
              }}
              style={{
                margin: 20,
              }}
            >
              Realizar Solicitud
            </Button>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default CalendarComponent;
