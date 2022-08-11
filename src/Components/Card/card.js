import React from "react";
import './card.scss';
import {Favorite, LocationOn, PersonOutline, Home, Key} from "@mui/icons-material";

let CardHome = ({image, heading, place, roomNum, square, price}) => {
    return(
        <div className={"house-card"}>
            <img src={image} alt="house view" className="house-card__img"/>
            <Favorite className="house-card__like "/>
            <h5 className="house-card__heading">{heading}</h5>
            <div className="house-card__location">
                <LocationOn/>
                <p>{place}</p>
            </div>
            <div className="house-card__rooms">
                <PersonOutline/>
                <p>{roomNum} rooms</p>
            </div>
            <div className="house-card__square">
                <Home/>
                <p>{square} m <sup>2</sup></p>
            </div>
            <div className="house-card__price">
                <Key/>
                <p>${price}</p>
            </div>
            <button className="btn house-card__btn">Contact realtors</button>
        </div>
    )
}

export default CardHome;