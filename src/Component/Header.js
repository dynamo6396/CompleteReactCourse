import React from "react";
import { LOGO_URL } from "../utils/constant";
export const Header=()=>{
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="" />
            </div>
            <div className="nav-item">
               <ul className="items">
                    <li className="item">Home</li>
                    <li className="item">About</li>
                    <li className="item">Contact Us</li>
                    <li className="item">Cart</li>
               </ul>
            </div>
        </div>
    )
};
export default Header;