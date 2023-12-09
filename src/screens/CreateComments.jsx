import React, { useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ReactStars from "react-rating-stars-component";
import ReactLoading from "react-loading";

import { collection, addDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";

import NavbarLogin from "../components/NavBarLogin";
import Navbar from "../components/NavBar";
import { firestore, storage } from "../firebase";

function ComentsCreate() {
  const today = new Date().toDateString();
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [stars, setStars] = useState(0);

  const [percent, setPercent] = useState(0);
  const [file, setFile] = useState("");
  const [loadDocs, setLoadDocs] = useState(true);

  const [message, setMessage] = useState("");

  const example = {
    size: 23,
    value: stars,
    onChange: (newValue) => {
      setStars(newValue);
    },
  };
  const example2 = {
    size: 15,
    value: stars,
    onChange: (newValue) => {
      setStars(newValue);
    },
  };

  function handleUpload() {
    setLoadDocs(false);
    if (!file) {
      setLoadDocs(true);
      alert("Debes escoger una foto");
    } else {
      console.log(
        file.name +
          today +
          new Date().getMinutes().toString() +
          new Date().getSeconds().toString()
      );
      const storageRef = ref(
        storage,
        `/commentsImages/${
          file.name +
          today +
          new Date().getMinutes().toString() +
          new Date().getSeconds().toString()
        }`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
        },
        (err) => alert(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            addDoc(collection(firestore, "comments"), {
              userPhoto: `https://ui-avatars.com/api/name=${
                user.displayName.split(" ")[0]
              }&background=random`,
              timestamp: today,
              userName: user.displayName,
              img: url,
              stars,
              msg: message,
              active: true,
              email: user.email,
              tmp: new Date(),
            })
              .then(() => {
                setLoadDocs(true);
                alert("Comentario creado correctamente");
                navigate("/comments");
              })
              .catch((e) => {
                setLoadDocs(true);
                alert("Error creando comentario ", e);
              });
          });
        }
      );
    }
  }

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleMessageChange = (event) => {
    // 👇️ access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      {user?.displayName ? (
        <NavbarLogin title="Crear comentario" />
      ) : (
        <Navbar />
      )}
      <Container>
        <Container>
          <Row
            style={{
              backgroundColor: "#454545",
              color: "white",
              display: "flex",
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
              fontSize: 14,
              marginTop: 10,
              borderRadius: 10,
            }}
          >
            Cuentanos que te ha parecido tu experiencia en Primera Vista
            Hospedaje.
          </Row>
          <Row
            style={{
              display: "flex",
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReactStars {...example} />
          </Row>
          <Row>
            <textarea
              style={{ fontSize: 13, padding: 10 }}
              maxLength={350}
              rows={5}
              cols={99999}
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
            />
          </Row>
          <Row>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
                justifyContent: "center",
              }}
            >
              <input
                style={{
                  height: 30,
                  justifyContent: "center",
                  display: "flex",
                }}
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
                justifyContent: "center",
              }}
            >
              <label
                style={{
                  backgroundColor: "#037D77",
                  color: "white",
                  fontSize: 12,
                  padding: 5,
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                Adjunta tu mejor foto en Primera Vista
              </label>
            </Col>
          </Row>

          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: 10,
            }}
          >
            {file !== "" && stars > 0 && message !== "" && loadDocs === true ? (
              <button
                onClick={handleUpload}
                style={{
                  display: "flex",
                  padding: 10,
                  fontSize: 15,
                  color: "white",
                  backgroundColor: "green",
                  margin: 1,
                  justifyContent: "center",
                }}
              >
                Enviar Comentario
              </button>
            ) : (
              ""
            )}
            {file !== "" && stars > 0 && message !== "" ? (
              ""
            ) : (
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                }}
              >
                Debes rellenar todos los campos
              </p>
            )}

            <div style={{ display: "flex", justifyContent: "center" }}>
              {loadDocs ? (
                ""
              ) : (
                <ReactLoading
                  type="spinningBubbles"
                  color="green"
                  height={40}
                  width={40}
                />
              )}
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ComentsCreate;
