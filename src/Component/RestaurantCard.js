import { CDN_LINK } from "../utils/constant";
const RestaurantCard =(props)=>{
    const {data}=props;
    const {name,cloudinaryImageId,cuisines,avgRating}=data?.info;
    const deliveryTime=data?.info?.sla.deliveryTime;
    return (
        <div className="res-card">
            <img src={CDN_LINK+cloudinaryImageId} alt="" />
            <div className="content">
                <h3>{name}</h3>
                <h4>{cuisines.join(' , ')}</h4>
                <h4>{avgRating} stars </h4>
                <h4>{deliveryTime} mins</h4>
            </div>
        </div>
    )
}
export default RestaurantCard;