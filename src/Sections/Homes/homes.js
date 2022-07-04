import React from "react";
import './homes.scss';
import CardHome from "../../Components/Card/card";

let Homes = ({houses}) => {
    let homes = houses.map((item) => <CardHome image={item[0]}
                                               heading={item[1]}
                                               place={item[2]}
                                               roomNum={item[3]}
                                               square={item[4]}
                                               price={item[5]}
                                               key={item[5]}
    />)
    return (
        <section className="homes">
            {homes}
        </section>
    )
}

export default Homes;