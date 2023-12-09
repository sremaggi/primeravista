import React, { useEffect } from "react";
import { Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";

import NavbarLogin from "../components/NavBarLogin";
import { UserAuth } from "../context/AuthContext";
import GetMyReqs from "../components/GetMyReq";
import TitleContainer from "../components/TitleContainer";

function Profile() {
  useEffect(() => {
    // scroll to top on page load
    document.body.style.zoom = "100%";
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <NavbarLogin />
      <TitleContainer title="Mi Perfil" />

      <Container>
        <div style={{ marginTop: 10, justifyContent: "center" }}>
          <Row
            style={{ display: "flex", marginTop: 5, justifyContent: "center" }}
          >
            <img
              alt="Foto de perfil"
              src={user.photoURL}
              height={100}
              style={{ display: "flex", margin: 5 }}
            />
          </Row>
          <Row
            style={{ display: "flex", marginTop: 5, justifyContent: "center" }}
          >
            {user.displayName}
          </Row>
          <Row
            style={{ display: "flex", marginTop: 5, justifyContent: "center" }}
          >
            {user.email}
          </Row>
          <Row
            style={{ display: "flex", marginTop: 5, justifyContent: "center" }}
          >
            <Link to="/">
              <button
                style={{ backgroundColor: "red", color: "white", padding: 10 }}
                onClick={handleSignOut}
              >
                Cerrar Sesión
              </button>
            </Link>
          </Row>
          {user.email === "seba.rf96@gmail.com" ||
          user.email === "ant.niasbravo@gmail.com" ? (
            <div
              style={{
                display: "flex",
                marginTop: 5,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 10,
              }}
            >
              Rol: Admin
              <Link
                style={{
                  display: "flex",
                  marginTop: 5,
                  textDecoration: "none",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: 10,
                }}
                to="/admin"
              >
                <button
                  style={{
                    backgroundColor: "purple",
                    padding: 20,
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  {" "}
                  Panel de administración
                </button>
              </Link>
            </div>
          ) : (
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 10,
              }}
            >
              Rol: Usuario
            </Row>
          )}
          <Row
            style={{
              display: "flex",
              padding: 10,
              justifyContent: "center",
              marginTop: 20,
              fontSize: 18,
            }}
          >
            Mis Solicitudes
          </Row>
          <GetMyReqs />
        </div>
      </Container>
    </div>
  );
}

export default Profile;
