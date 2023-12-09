import React, { useState, useContext, useEffect } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { firestore } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { Col, Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import ReactStars from "react-rating-stars-component";
import { maxWidth } from "@mui/system";

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "America/Santiago",
};

function GetAllMyComments() {
  const [documents, setDocuments] = useState([]);
  const [loadDocs, setLoadDocs] = useState(false);
  const [loadImages, setLoadImages] = useState(true);
  const { user } = UserAuth();

  //Firebase Collection Reference query
  const q = query(
    collection(firestore, "comments"),
    where("active", "==", true),
    orderBy("tmp", "desc")
  );
  useEffect(() => {
    const getDocuments = async () => {
      const data = await getDocs(q);
      setDocuments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoadDocs(true);
      setLoadImages(false);
    };

    getDocuments();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {documents.map((d) => (
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 8,
            backgroundColor: "#1C9B13",
            borderRadius: 10,
            boxShadow: "2px 2px 5px #999",
          }}
        >
          <Col
            sm={6}
            xs={6}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            xxxl={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            {loadImages ? (
              ""
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ReactLoading
                  type={"spinningBubbles"}
                  color={"green"}
                  height={20}
                  width={20}
                />
              </div>
            )}
            <img
              onLoad={() => setLoadImages(true)}
              style={{
                display: "flex",
                width: "100%",
                maxHeight: "250px",
                maxWidth: "700px",
                height: "100%",
                objectFit: "cover",
              }}
              src={d.img}
            ></img>
          </Col>

          <Col
            sm={6}
            xs={6}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            xxxl={6}
            style={{ display: "flex", flexDirection: "column", padding: 5 }}
          >
            <Row style={{ display: "flex", margin: 1, fontSize: 7 }}>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  color: "#EEEEEE",
                  fontSize: 7,
                  alignItems: "center",
                }}
              >
                {d.timestamp.toLocaleString("es-CL", options).toUpperCase()}
                <ReactStars size={16} value={d.stars} />
              </Col>
            </Row>
            <Row style={{ display: "flex", margin: 5 }}>
              <Col
                style={{
                  display: "flex",
                  color: "white",
                  margin: 3,
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 14,
                  textJustify: "inter-word",
                  textAlign: "justify",
                }}
              >
                {d.userName}
              </Col>
            </Row>
            <Row
              style={{ display: "flex", margin: 1, justifyContent: "center" }}
            >
              <textarea
                style={{
                  resize: "none",
                  backgroundColor: "#167A1090",
                  width: "100%",
                  margin: 4,
                  marginRight: 10,
                  fontSize: 10,
                  padding: 5,
                  borderWidth: 0,
                  color: "#EEEEEE",
                  textJustify: "inter-word",
                  textAlign: "justify",
                }}
                maxLength={800}
                rows={10}
                cols={80}
                id="message"
                name="message"
                value={d.msg}
              />
            </Row>
          </Col>
        </Row>
      ))}

      <div style={{ display: "flex", justifyContent: "center" }}>
        {loadDocs ? (
          ""
        ) : (
          <ReactLoading
            type={"spinningBubbles"}
            color={"green"}
            height={40}
            width={40}
          />
        )}
      </div>
    </div>
  );
}

export default GetAllMyComments;
