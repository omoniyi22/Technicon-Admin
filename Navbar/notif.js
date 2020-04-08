import React from 'react';
import './styles/notif.css'
import {MdNotifications} from 'react-icons/md';

class Notifi extends React.Component{
    render(){
        return(
        <div>
            <div className="wrap">
            <button >
                <div className="bell"><MdNotifications /></div><br/>
                <div className="notext">Notifications</div>
            </button>

            </div>
            
        </div>
            
        )
    }
}

export default Notifi;