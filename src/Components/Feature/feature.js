import React from "react";
import './feature.scss';
import '../../base.scss';

let Feature = ({image, heading, text}) => {
    let Image = image;
    return(
        <div className={'feature'}>
            <Image className="feature__img"/>
            <h4 className="feature__heading heading-4 heading-4__dark">{heading}</h4>
            <p className="feature__text">{text}</p>
        </div>
    )
}

export default Feature;