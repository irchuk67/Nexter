import React from "react";
import img1 from '../../../img/story-1.jpeg';
import img2 from '../../../img/story-2.jpeg';
import '../story.scss';
import '../../../base.scss';

let StoryPictures = () => {
    return (
        <div className="story__img">
            <img src={img1} alt="Couple with new house" className="story__img--1"/>
            <img src={img2} alt="New house" className="story__img--2"/>
        </div>
    )
}

export default StoryPictures;