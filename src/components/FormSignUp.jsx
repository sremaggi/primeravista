import React, {useState} from 'react';
import { Container, Row } from 'react-grid-system';
import { FileUploader } from './FileUploader';
import { getAuth, createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth, storage } from '../firebase';
import { UserAuth } from '../context/AuthContext';
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
import ReactLoading from 'react-loading';
import {
    useNavigate
  } from "react-router-dom";

function RegistrationForm() {
    const [loadDocs,setLoadDocs] = useState(true)
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const {setUser} = UserAuth();
    const [email,setEmail] = useState();
    const [pwd,setPwd] = useState("");
    const [confirmPwd,setConfirmPwd] = useState("");
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [phone,setPhone] = useState("");

       // progress
       const [percent, setPercent] = useState(0);

    function handleUpload() {
        setLoadDocs(false)
        if (!file) {
            setLoadDocs(true)
            alert("Elige una foto de perfil!")
        }
        const storageRef = ref(storage, `/usersImages/${file.name+new Date().toDateString()}`)
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
            
                createUserWithEmailAndPassword(auth,email,pwd)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;        
                updateProfile(user,{
                    displayName: name + " " + surname, 
                    photoURL: url,
                    phoneNumber:phone,
                  }).then(()=>{
                    setLoadDocs(true)
                    alert("Usuario creado correctamente ",user.displayName)
                    setUser(user)
                    navigate("/Home")
                  }).catch(e=>{
                    setLoadDocs(true)
                    alert(e)
                  })

              })
              .catch((error) => {
                setLoadDocs(true)
                alert(error)
              })
              
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
        <div style={{display:"flex",flexDirection:"column",justifyItems:"center",marginTop:5}}>
  
 
        

         <div style={{justifyContent:"center",color:"white",padding:5,display:"flex"}}>
         <img  src={require('../assets/img/krika3.jpeg')}height={100} width={100} style={{display:"flex",justifyItems:"center",margin:1,borderRadius:100}}/>
         </div>
     
        <input   
                style={{padding:20,backgroundColor:"white",height:20,margin:8}}
                placeholder='Nombre'
                 type="text" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
        />
                <input   
                style={{padding:20,backgroundColor:"white",height:20,margin:8}}
                placeholder='Apellido'
                 type="text" 
                 value={surname}
                 onChange={(e) => setSurname(e.target.value)}
        />
                <input   
                style={{padding:20,backgroundColor:"white",height:20,margin:8}}
                placeholder='Teléfono'
                 type="text" 
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
        />
                <input   
                style={{padding:20,backgroundColor:"white",height:20,margin:8}}
                placeholder='Email'
                 type="text" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
        />
                        {isEmailValid(email) && <p style={{fontSize:10,display:"flex",color:"red",padding:10}}>Email no valido</p>}
                        <label style={{fontSize:12,padding:5}}>Foto de perfil</label>
                        <input style={{height:30}} type="file" accept="image/*" onChange={handleChange}/>
                        <input   
                style={{padding:20,backgroundColor:"white",height:20,margin:8}}
                placeholder='Contraseña'
                 type="password" 
                 value={pwd}
                 onChange={(e) => setPwd(e.target.value)}
        />
        <input placeholder='Confirmar contraseña'
      style={{padding:20,backgroundColor:"white",margin:8}}
            type="password"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
        />
                                {(pwd == confirmPwd  )
                                ? ""
                               :<p style={{fontSize:10,display:"flex",color:"red",padding:10}}>Contraseñas no coinciden</p>}
        {name != "" && surname != "" && phone != "" && file != ""
            && pwd != "" && confirmPwd != "" && loadDocs ==true ?
            <button 
            onClick={handleUpload}
            style={{backgroundColor:"#3CAFFF",color:"white",padding:5}}><h3 style={{fontSize:14}}>Crear cuenta</h3></button>
            :<p style={{display:"flex",justifyContent:"center",color:"red"}}>Debes rellenar todos los campos</p>

        }
                    <div style={{display:"flex",justifyContent:"center"}}>
            {loadDocs ? "" :<ReactLoading type={"spinningBubbles"} color={"green"} height={40} width={40} />}
            </div>   

   

        
        </div>    
    )       
}
export default RegistrationForm;