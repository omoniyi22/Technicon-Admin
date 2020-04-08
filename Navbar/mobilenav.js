import React from 'react';
import './styles/mobilenav.css';
import 'react-bootstrap';
import logo from './logo1.jpg';

class Mobilenav extends React.Component{
    render(){
        return(
            <div className="mobilenav">
              <div className="d-flex flexrow justify-content-between">    
                  <img src={logo}
                  width= {100}
                  height={90}
                  alt="logo"
                   className="p-2 logo"/>
                
                  <input type="button" value="Try Here" className="p-2 try rounded"/> 
                  </div>
                
            </div>
        );
            
    }
}

export default Mobilenav;