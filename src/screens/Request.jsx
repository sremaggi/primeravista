import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import ReactLoading from "react-loading";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { firestore } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import NavbarLogin from "../components/NavBarLogin";

const {
  REACT_APP_EMAIL_KEY,
  REACT_APP_TEMPLATE_ID,
  REACT_APP_API_KEY_EMAILJS,
} = process.env;

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "America/Santiago",
};

function Request() {
  const form = useRef();
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [name, setName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState("");
  const [loadDocs, setLoadDocs] = useState(true);

  const [phone, setPhone] = useState("");
  const { state } = useLocation();
  const { mount, startDate, finishDate, nights, rangeDates } = state;
  const [mountState, setMountState] = useState(mount);
  //console.log(state)
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const sendEmail = (e) => {
    if (phone.length <= 6 || qty < 1) {
      alert("Datos incorrectos!");
      setLoadDocs(true);
    } else {
      setLoadDocs(false);
      e.preventDefault();
      var formData = new FormData(form.current);

      // Establece los valores de los campos
      let nameArray = name.split(" ");

      for (let index = 0; index < nameArray.length; index++) {
        // Establece los valores de los campos
        let key = `name${index}`;
        console.log(key);
        formData.set(key, nameArray[index]);
        console.log(formData);
      }

      console.log(form.current);
      emailjs
        .sendForm(
          REACT_APP_EMAIL_KEY,
          REACT_APP_TEMPLATE_ID,
          form.current,
          REACT_APP_API_KEY_EMAILJS
        )
        .then(
          (result) => {
            console.log(result.text);

            addDoc(collection(firestore, "requests"), {
              mount: mountState,
              startDate,
              finishDate,
              nights,
              user: {
                name: name,
                email: email,
                phone,
                qty,
              },
              msg: message,
              timestamp: new Date(),
              approved: false,
              rage: rangeDates,
            })
              .then(() => {
                alert("Solicitud enviada correctamente");
                setLoadDocs(true);
                navigate("/profile");
              })
              .catch((er) => {
                alert("Error insert request ", er);
                setLoadDocs(true);
              });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  useEffect(() => {
    // scroll to top on page load
    document.body.style.zoom = "100%";
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavbarLogin title="Solicitud de Reserva" />
      <Container style={{ marginTop: 1, width: "100%" }}>
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmar Solicitud</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              ¿Estás segur@ de que quieres confirmar la solicitud?
            </Modal.Body>
            <Modal.Body>
              {loadDocs ? (
                ""
              ) : (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ReactLoading
                    type="spinningBubbles"
                    color="green"
                    height={40}
                    width={40}
                  />
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" type="submit" onClick={sendEmail}>
                Confirmar Solicitud
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        <Row
          style={{
            display: "flex",
            margin: 10,
            padding: 10,
            backgroundColor: "#393E3A",
            borderRadius: 10,
          }}
        >
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 13,
              color: "white",
            }}
          >
            Completar Solicitud
          </Col>
        </Row>
        <form ref={form} onSubmit={sendEmail}>
          <Row
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              padding: 10,
              backgroundColor: "#42AB06",
              margin: 2,
            }}
          >
            <Col
              sm={4}
              xs={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
              xxxl={4}
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 15,
                color: "white",
              }}
            >
              LLegada
            </Col>
            <Col
              sm={8}
              xs={8}
              md={8}
              lg={8}
              xl={8}
              xxl={8}
              xxxl={8}
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
                fontSize: 11,
              }}
            >
              <input
                readOnly
                style={styles.inputContainer}
                type="text"
                name="dateI"
                value={new Date(startDate.y, startDate.m - 1, startDate.d)
                  .toLocaleString("es-CL", options)
                  .toUpperCase()}
              ></input>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              padding: 10,
              backgroundColor: "#42AB06",
              margin: 2,
            }}
          >
            <Col
              sm={4}
              xs={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
              xxxl={4}
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 15,
                color: "white",
              }}
            >
              Salida
            </Col>
            <Col
              sm={8}
              xs={8}
              md={8}
              lg={8}
              xl={8}
              xxl={8}
              xxxl={8}
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
                fontSize: 11,
              }}
            >
              <input
                readOnly
                style={styles.inputContainer}
                type="text"
                name="dateF"
                value={new Date(finishDate.y, finishDate.m - 1, finishDate.d)
                  .toLocaleString("es-CL", options)
                  .toUpperCase()}
              ></input>
            </Col>
          </Row>

          <Row
            style={{
              display: "flex",
              padding: 10,
              backgroundColor: "#42AB06",
              margin: 2,
            }}
          >
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 15,
                color: "white",
              }}
            >
              Noches totales
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
            >
              <input
                type="text"
                style={styles.inputContainer}
                name="nights"
                value={nights}
              />
            </Col>
          </Row>

          <Row
            style={{
              display: "flex",
              padding: 10,
              backgroundColor: "#CACACA",
              color: "black",
              margin: 2,
            }}
          >
            <Col
              sm={4}
              xs={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
              xxxl={4}
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 15,
                alignItems: "center",
              }}
            >
              Nombre
            </Col>
            <Col
              sm={8}
              xs={8}
              md={8}
              lg={8}
              xl={8}
              xxl={8}
              xxxl={8}
              style={{ display: "flex" }}
            >
              <input
                style={styles.inputContainer}
                name="name"
                placeholder="Nombre"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Row>

          <Row
            style={{
              display: "flex",
              padding: 10,
              backgroundColor: "#CACACA",
              color: "black",
              margin: 2,
            }}
          >
            <Col
              sm={4}
              xs={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
              xxxl={4}
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 15,
                alignItems: "center",
              }}
            >
              Correo Electrónico
            </Col>
            <Col
              sm={8}
              xs={8}
              md={8}
              lg={8}
              xl={8}
              xxl={8}
              xxxl={8}
              style={{ display: "flex" }}
            >
              <input
                style={styles.inputContainer}
                placeholder="Email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>

          <Row
            style={{
              display: "flex",
              padding: 10,
              backgroundColor: "#CACACA",
              color: "black",
              margin: 2,
            }}
          >
            <Col
              sm={4}
              xs={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
              xxxl={4}
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 15,
                alignItems: "center",
              }}
            >
              Número de telefono
            </Col>
            <Col
              sm={8}
              xs={8}
              md={8}
              lg={8}
              xl={8}
              xxl={8}
              xxxl={8}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ margin: 5 }}>(+56)</div>
              <input
                style={styles.inputContainer}
                placeholder="Telefono"
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              padding: 10,
              backgroundColor: "#CACACA",
              color: "black",
              margin: 2,
            }}
          >
            <Col
              sm={4}
              xs={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
              xxxl={4}
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 15,
                alignItems: "center",
              }}
            >
              Cantidad de personas
            </Col>
            <Col
              sm={8}
              xs={8}
              md={8}
              lg={8}
              xl={8}
              xxl={8}
              xxxl={8}
              style={{ display: "flex" }}
            >
              <input
                style={styles.inputContainer}
                placeholder="6"
                name="qty"
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              padding: 10,
              backgroundColor: "#CACACA",
              color: "black",
              margin: 2,
            }}
          >
            <Col
              sm={4}
              xs={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
              xxxl={4}
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 15,
                alignItems: "center",
              }}
            >
              Comentario
            </Col>
            <Col
              sm={8}
              xs={8}
              md={8}
              lg={8}
              xl={8}
              xxl={8}
              xxxl={8}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <textarea
                placeholder="Iré unos días a descansar con mi familia, llevaré a mi tortuga, es súper tranquila."
                style={{ fontSize: 13, padding: 10 }}
                maxLength={300}
                rows={4}
                cols={100}
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
              />
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              padding: 10,
              backgroundColor: "#42AB06",
              margin: 2,
            }}
          >
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 15,
                color: "white",
              }}
            >
              Total a pagar
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 5,
                color: "white",
              }}
            >
              <div style={{ margin: 5 }}>$</div>
              {user.email === "seba.rf96@gmail.com" ||
              user.email === "ant.niasbravo@gmail.com" ? (
                <input
                  type="text"
                  style={styles.inputContainer}
                  name="mount"
                  value={mountState}
                  onChange={(e) => setMountState(e.target.value)}
                />
              ) : (
                <input
                  readOnly
                  type="text"
                  style={styles.inputContainer}
                  name="mount"
                  value={mountState}
                  onChange={(e) => setMountState(e.target.value)}
                />
              )}
            </Col>
          </Row>
          {loadDocs ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Button
                variant="primary"
                style={{ backgroundColor: "green", padding: 20 }}
                onClick={handleShow}
              >
                Confirmar solicitud
              </Button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ReactLoading
                  type="spinningBubbles"
                  color="green"
                  height={40}
                  width={40}
                />
              </div>
              <div
                style={{
                  fontSize: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Enviando solicitud
              </div>
            </div>
          )}
        </form>
      </Container>
    </div>
  );
}

export default Request;

const styles = {
  inputContainer: {
    padding: 20,
    backgroundColor: "white",
    height: 20,
    width: "100%",
    fontSize: 12,
  },
};
