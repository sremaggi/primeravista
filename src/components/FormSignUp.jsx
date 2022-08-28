import React, {useState} from 'react';
import { Container, Row } from 'react-grid-system';
import { FileUploader } from './FileUploader';
import { getAuth, createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth, storage } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import {
    useNavigate
  } from "react-router-dom";

function RegistrationForm() {
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const {user,setUser} = UserAuth();
    const [email,setEmail] = useState();
    const [pwd,setPwd] = useState("");
    const [confirmPwd,setConfirmPwd] = useState("");
    const [name,setName] = useState();
    const [surname,setSurname] = useState();
    const [phone,setPhone] = useState();
    const [selectedFile, setSelectedFile] = useState(null);
    const [urlImage,setUrl] = useState(null);
       // progress
       const [percent, setPercent] = useState(0);

    function handleUpload() {
        if (!file) {
            alert("Elige una foto de perfil!")
        }
        const storageRef = ref(storage, `/usersImages/${file.name}`)
       const uploadTask = uploadBytesResumable(storageRef, file)
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
                setUrl(url)
            });
        },


    )

    }   

    function handleChange(event) {
            setFile(event.target.files[0]);
        }
    
    const isEmailValid = (email) => {
        if (!email || email.length === 0) {
            return 'Email cannot be empty';
          }
        
          const isEmailValid = /@/.test(email); // use any validator you want
          if (!isEmailValid) {
            return 'Invalid email provided';
          }
        
          return null;
      };
    return(
        <div style={{display:"flex",flexDirection:"column",justifyItems:"center"}}>
  
         <div style={{justifyContent:"center",backgroundColor:"#454545",color:"white",padding:10,display:"flex"}}>
            Registrarse
         </div>
        

         <div style={{justifyContent:"center",color:"white",padding:5,display:"flex"}}>
         <img  src="https://firebasestorage.googleapis.com/v0/b/primeravista-50b01.appspot.com/o/assests%2Fimages%2Fkrika3.jpeg?alt=media&token=0609ac50-a4d1-4be3-909a-41c798ba7eab" height={100} width={100} style={{display:"flex",justifyItems:"center",margin:1,borderRadius:100}}/>
         </div>
     
        <input   
                style={{padding:20,backgroundColor:"#EFFFED",height:20}}
                placeholder='Nombre'
                 type="text" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
        />
                <input   
                style={{padding:20,backgroundColor:"#EFFFED",height:20}}
                placeholder='Apellido'
                 type="text" 
                 value={surname}
                 onChange={(e) => setSurname(e.target.value)}
        />
                <input   
                style={{padding:20,backgroundColor:"#EFFFED",height:20}}
                placeholder='Telefono'
                 type="text" 
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
        />
                <input   
                style={{padding:20,backgroundColor:"#EFFFED",height:20}}
                placeholder='Email'
                 type="text" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
        />
                        {isEmailValid(email) && <p style={{fontSize:10,display:"flex",color:"red",padding:10}}>Email no valido</p>}
                        <label style={{fontSize:12,padding:5}}>Foto de perfil</label>
                        <input style={{height:30}} type="file" accept="image/*" onChange={handleChange}/>
            <button style={{backgroundColor:"gold",color:"black",padding:10}} onClick={handleUpload}>Confirmar foto</button>
            <p style={{fontSize:10,display:"flex",justifyContent:"center"}}>{percent}% Subiendo</p>
                        <input   
                style={{padding:20,backgroundColor:"#EFFFED",height:20}}
                placeholder='Password'
                 type="password" 
                 value={pwd}
                 onChange={(e) => setPwd(e.target.value)}
        />
        <input placeholder='ConfirmPassword'
      style={{padding:20,backgroundColor:"#EFFFED"}}
            type="password"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
        />
                                {(pwd == confirmPwd )
                                ? <p style={{fontSize:10,display:"flex",color:"green",padding:10}}>Contraseñas coinciden</p>
                               :<p style={{fontSize:10,display:"flex",color:"red",padding:10}}>Contraseñas no coinciden</p>}
        <button 
        onClick={()=>{createUserWithEmailAndPassword(auth,email,pwd)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('USER',user)
                console.log('USER CREDENTIAL',userCredential)
                console.log(urlImage)
                updateProfile(user,{
                    displayName: name + " " + surname, 
                    photoURL: urlImage,
                    phoneNumber:phone,
                  }).then(()=>{
                    alert("Usuario creado correctamente ",user.displayName)
                    setUser(user)
                    navigate("/Home")
                  }).catch(e=>{
                    alert(e)
                  })

              })
              .catch((error) => {
                console.log(error)
              })}
        
        }
        style={{backgroundColor:"#3CAFFF",color:"white",padding:5}}><h3 style={{fontSize:14}}>Crear cuenta</h3></button>
   

        
        </div>    
    )       
}
export default RegistrationForm;