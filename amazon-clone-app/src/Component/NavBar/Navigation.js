import React, { Component } from 'react';
import "./Navigation.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='navbar_component'> 
                <div className='navbar_logo'></div>
                <div className='navbar_locator'>
                <div className='navbar_location_image'></div>
                <div className='navbar_location'> Sri Lanka</div>
                </div>
                
            </div> 
           );
    }
}
 
export default NavBar