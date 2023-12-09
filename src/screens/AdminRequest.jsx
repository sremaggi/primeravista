import { Title } from "@mui/icons-material";
import React from "react";
import { useLocation } from "react-router-dom";
import GetAllRequest from "../components/GetAllRequest";
import NavbarLogin from "../components/NavBarLogin";
import TitleContainer from "../components/TitleContainer";

function AdminRequest() {
  const { state } = useLocation();

  console.log(state.status, "ADMIN REQUEST AQUI");
  return (
    <div style={{ width: "100%" }}>
      <NavbarLogin></NavbarLogin>
      <GetAllRequest status={state} />
    </div>
  );
}

export default AdminRequest;
