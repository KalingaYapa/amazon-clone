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
                <div className='navbar_search'>
                    <div className='navbar_dropdown'>
                        <select className='navbar_select'> 
                            <option>All</option>
                            <option>Baby</option>
                            <option>Beauty</option>
                            <option>Text</option>
                            <option>Deals</option>
                        </select>
                    </div>
                    <div className='navbar_textbox'>
                        <input className='navbar_input'></input>
                    </div>
                    <div className='navbar_search_icon_div'>
                        <div className='navbar_search_icon'></div>
                    </div>

                    <div className='navbar_text navbar_sign_in'>
                        <div style={{fontSize: "12px", fontWeight : "400"}} >Hello Sign in</div>
                        <div style={{fontWeight : "700"}}> Account & List</div>
                    </div>
                    <div className='navbar_text navbar_return_orders'>
                        <div style={{fontSize: "12px", fontWeight : "400"}}>Returns </div>
                        <div style={{fontWeight : "700"}}>& Orders</div>
                    </div>
                    <div className='navbar_text navbar_cart'>
                        <div className='navbar_cart_image'> </div>
                        <div className='navbar_cart_item'>0</div>
                        <div style={{marginTop:"10px",  fontWeight : "700", fontSize:"14px"}}>Cart</div>
                    </div>
                        
                </div>
                
            </div> 
           );
    }
}
 
export default NavBar