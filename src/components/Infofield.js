import { Component } from "react";
import './Infofield.css';

class Infofield extends Component {
    render() {
        return (
            <header  className="InfoHeader"> 
                <div className="Efective">
                Efektivna hodnota
                <p className="text">TEXT,TEXT</p>   
                <p className="math">VZOREC</p>
                </div> 
                <div className="Average">
                Stredna hodnota
                <p className="text">TEXT,TEXT</p>   
                <p className="math">VZOREC</p>
                </div> 
                
            </header>    
           
        )
    }
}

export default Infofield;
