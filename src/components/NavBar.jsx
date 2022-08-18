import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MDBIcon } from 'mdb-react-ui-kit';
import BurguerButton from "./BurgerButton";

const ClikedContext = React.createContext(null);

function Navbar(props) {

    const [clicked, setClicked] = useState(false);
   
    const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked);
    };
    return (
        <>
            <NavContainer>
                
                <Link to='/'><h2>Primera <span>Vista</span></h2></Link>
                <div className={`links ${clicked ? "active" : ""}`}>

                    <Link to='/signin'>Acerca de <MDBIcon icon='camera' size='s' /></Link>
                </div>
                <ClikedContext.Provider value={clicked} >
                <div className="burguer">
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>
                </ClikedContext.Provider>
                <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
            </NavContainer>
        </>
    );
}

export default Navbar;



const NavContainer = styled.nav`

  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: #34B616;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    top: 15%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 1.5rem;
      margin-top: 0.5rem;
      color: #34B616;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`;

const BgDiv = styled.div`
background-color: #C9C9C9;
position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  &.active{
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
  }
`;