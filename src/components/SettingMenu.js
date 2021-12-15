import { Component } from "react";
import './SettingMenu.css'
import styled from "styled-components";
import React, { useState } from 'react';

const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    },    
  };
  
const Button = styled.button`
background-color: ${(props) => theme[props.theme].default};
color: white;
padding: 5px 15px;
border-radius: 5px;
outline: 0;
text-transform: uppercase;
margin: 10px 0px;
cursor: pointer;
box-shadow: 0px 2px 2px lightgray;
transition: ease background-color 250ms;
&:hover {
    background-color: ${(props) => theme[props.theme].hover};
}
&:disabled {
    cursor: default;
    opacity: 0.7;
}
`;
  
Button.defaultProps = {
theme: "blue"
};

function clickMe() {
alert("You clicked me!");
}


const Tab = styled.button`
padding: 10px 30px;
cursor: pointer;
opacity: 0.6;
background: white;
border: 0;
outline: 0;
border-bottom: 2px solid transparent;
transition: ease border-bottom 250ms;
${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
`}
`;

const types = ["Sinus", "Trojuholnik", "Obdlznik"];

function TabGroup() {
    const [active, setActive] = useState(types[0]);
    return (
      <>
        <div>
          {types.map((type) => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
              {type}
            </Tab>
          ))}
        </div>
        <p />
        <p> Your choice of signal: {active} </p>
      </>
    );
}
 

const T = 5;
const f = 100;
const Um = 1;
const t = 3;

//Vypocet strednej hodnoty
function AverageValueS()
{
    return (2*Um)/Math.PI;
}
function AverageValueT()
{
    return Um/2;
}
function AverageValueR()
{
    return Um;
}
//vypocet efektivnej hodnoty
function EfectiveValueS()
{
    return Um/Math.sqrt(2);
}
function EfectiveValueT()
{
    return Um/Math.sqrt(3);
}
function EfectiveValueR()
{
    return Um;
}
//vypocet periody
function Period()
{
    return 1/f;
}
//vypocet frekvencie
function frequency()
{
    return 1/T;
}
//vypocet priebehu signalu jednotlive body!
function SignalProcessS(object)
{
    let i = 0;
    if(i <= T) {
         i += 0.0001;
        return Um*Math.sin(2*Math.PI*f*t); 
    }
    else throw console.error("CHYBA");
}
function SignalProcessT(object)
{   
    let i = 0;
    if(i < T/4) {
         i += 0.0001;
        return ((4*Um)/T)*t; 
    }
    else if(i = T/4 || i < ((3*T)/4)) {
        i += 0.0001;
        return (2*Um)-((4*Um)/T)*t; 
    }
    else if(i = ((3*T)/4) || i < T) {
        i += 0.0001;
        return ((-4)*Um)+((4*Um)/T)*t; 
    }
    else throw console.error("CHYBA");
}

function SignalProcessR(double) {
    
    let i = 0;
    if(i < T/2) {
         i += 0.001;
        return Um; 
    }
    else if(i = (T/2) || i < T) {
        i += 0.0001;
        return -Um; 
    }
    else throw console.error("CHYBA");
}
class SettingMenu extends Component {
    render() {
        return (
            <header className="SettingMenu">
                 <TabGroup/>  
                <form>
                    <fieldset>
                        <label>
                        <p>Amplituda</p>
                        <input  name="Um"/>
                        </label>
                    </fieldset>
                    <fieldset>
                        <label>
                        <p>Frekvencia</p>
                        <input name="f"/>
                        </label>
                    </fieldset>                    
                    <Button>Submit</Button>   
                </form>                
            </header>          
        )
    }
}

export default SettingMenu