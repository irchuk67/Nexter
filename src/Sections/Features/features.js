import React from "react";
import './features.scss';
import Feature from "../../Components/Feature/feature";


let Features = ({features}) => {
    let featureList = features.map((feature) => {
        return <Feature image={feature[0]} heading={feature[1]} text={feature[2]} key={feature[1]}/>
    });
    return (
        <section className="features">
            {featureList}
        </section>
    )
}

export default Features;