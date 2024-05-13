import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from '../utils/mockdata';
import  { useState }from "react";
const Body=()=>{
    const arr=useState(restaurants);
    // const [restrau,setRestrau]=arr;
    const restrau=arr[0];
    const setRestrau=arr[1];
    return (
        <div className="body">
            <button className="filt-btn" onClick={()=>{
                 let newlist=restrau.filter((rest)=>rest.info.avgRating>4.4);
                 setRestrau(newlist);    
                 console.log(restrau);
                }}>Top-rated-restraunts</button>
            <div className="res-container">
               {restrau.map((restrau)=>(
                    (<RestaurantCard key={restrau.info.id} data={restrau}/>)
               ))}
            </div>
        </div>
    )
};
export default Body;