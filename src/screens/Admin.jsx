import React, { useEffect } from "react";
import { Container, Row } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavbarLogin from "../components/NavBarLogin";

function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <NavbarLogin title="Primera Vista" />
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            fontSize: 15,
            backgroundColor: "purple",
            color: "white",
            padding: 10,
          }}
        >
          Gestión Solicitudes
        </Row>

        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 2,
            fontSize: 15,
            color: "white",
            padding: 10,
          }}
        >
          <Button
            onClick={() => {
              navigate("/admin/requests", {
                state: {
                  title: "Aprobadas",
                },
              });
            }}
            style={styles.adminButton}
          >
            Aprobadas
          </Button>

          <Button
            onClick={() => {
              navigate("/admin/requests", {
                state: {
                  title: "Pendientes",
                },
              });
            }}
            style={styles.inProgressButton}
          >
            Pendientes
          </Button>
          <Button
            onClick={() => {
              navigate("/admin/requests", {
                state: {
                  title: "Rechazadas",
                },
              });
            }}
            style={styles.rejectedButton}
          >
            Rechazadas
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Admin;

const styles = {
  adminButton: {
    backgroundColor: "green",
    borderWidth: 1,
    borderColor: "purple",
    padding: 20,
    color: "white",
    fontSize: 10,
    width: "100%",
    margin: 5,
  },
  rejectedButton: {
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "purple",
    padding: 20,
    color: "black",
    fontSize: 10,
    width: "100%",
    margin: 5,
  },
  inProgressButton: {
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "purple",
    padding: 20,
    color: "black",
    fontSize: 10,
    width: "100%",
    margin: 5,
  },
};
