import React from "react";
import '../story.scss';
import '../../../base.scss';

let StoryContent = () => {
    return (
        <div className="story__content">
            <h3 className="heading-3 mb-sm">Happy Customers</h3>
            <h2 className="heading-2 heading-2__dark mb-md">&ldquo;The best decision of our life&rdquo;</h2>
            <p className="story__text mb-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
            </p>
            <button className="btn">Find your own home</button>
        </div>
    )
}

export default StoryContent;