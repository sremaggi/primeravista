import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { UserAuth } from '../context/AuthContext';



function SigninForm() {
    const navigate = useNavigate();
    const {googleSignIn,setUser,user} = UserAuth();
    const [email,setEmail] = useState();
    const [pwd,setPwd] = useState();

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
      const usePasswordValidation = (email) => {
        const isEmailValid = /@/.test(email); // use any validator you want
        return isEmailValid;
      };

    return(
            <div style={{display:"flex",flexDirection:"column",justifyItems:"center"}}>
                
                <label style={{fontSize:12,padding:5}}>Correo electronico</label>
                <input   
                        style={{padding:20,height:20}}
                        placeholder='Correo electronico'
                         type="text" 
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                />
                  <div style={{justifyContent:"center",display:"flex"}}>
                {isEmailValid(email) && <p style={{fontSize:10,display:"flex",color:"red"}}>Email no valido</p>}
                </div>
                <label style={{fontSize:12,padding:5}}>Contraseña</label>
                <input placeholder='Contraseña'
              style={{padding:20}}
                    type="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />

           
      
                <button  style={{padding:10,backgroundColor:"green",color:"white"}} 
                onClick={()=>{
                    signInWithEmailAndPassword(auth,email,pwd).then((r)=>{
                        const user = r.user;
                        setUser(user)

                    }).catch(e=>{
                        alert(e)
                    })
                }}
                >Iniciar Sesión</button>
                <div style={{justifyContent:"center",display:"flex"}}>
                <p  style={{fontSize:12,display:"flex"}}>No tienes una cuenta?, <Link to='/signup'
                >Registrate Aquí</Link></p>
                </div>
                
                </div>
    )       
}
export default SigninForm;