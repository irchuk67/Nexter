import React from "react";
import logo from '../../img/logo.png';
import './header.scss';

let Header = ({logos}) => {
    let n = 0;
    let logoList = logos.map((item) => {
        n++;
        return <img src={item} alt={'Seen on logo'} key={n}/>
    });
    return (
        <header className="header">
            <img src={logo} alt="Nexter logo" className="header__logo"/>
            <h3 className="heading-3">
                Your own home:
            </h3>
            <h1 className="heading-1">
                The ultimate personal freedom
            </h1>
            <button className="btn header__btn">View our properties</button>
            <div className="header__seenon-text">As seen on</div>
            <div className="header__seenon-logos">
                {logoList}
            </div>

        </header>
    )
}

export default Header;