import React from 'react';
import './styles/searchbar.css';
import {FaSearch} from "react-icons/fa";



class Searchbar extends React.Component{
    render(){
        return(
            <div classname="searchdiv">
                <form>
                    <div className="searchbar-wrap">
                      <input type="search" placeholder="Search" className="searchbar bar"/>
                      <button className="searchbtn bar" ><FaSearch/></button>
                    </div>
                </form>

            </div>
        )
    }
}
export default Searchbar;
