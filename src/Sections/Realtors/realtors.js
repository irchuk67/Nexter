import React from "react";
import './realtors.scss';

let Realtors = ({realtorsData}) => {
    let realtors = realtorsData.map((realtor) => {
        return(
            <div className={'realtor'}>
                <img src={realtor[0]} alt="Realtor photo" className="realtor__img"/>
                <div className="realtor__content">
                    <h4 className="heading-4__light heading-4 realtor__heading">{realtor[1]}</h4>
                    <p className="realtor__houses">{realtor[2]} houses sold</p>
                </div>
            </div>
        )
    })
    return (
        <div className="realtors">
            <h3 className="heading-3 realtors__heading">Top 3 realtors</h3>
            <div className="realtors__list">
                {realtors}
            </div>
        </div>
    )
}

export default Realtors;