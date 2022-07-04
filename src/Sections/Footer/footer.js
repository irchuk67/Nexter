import React from "react";
import './footer.scss';

let Footer = ({items}) => {
    let links = items.map((item) => {
        return(
            <li className={'nav__item'}>
                <a className={'nav__link'} href={'#'}>{item}</a>
            </li>)

    })
    return (
        <footer className="footer">
            <ul className="nav">
                {links}
            </ul>
            <p className="footer__copyright">&copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own purposes. This does NOT apply if you plan to produce your own course or tutorials based on this project. </p>
        </footer>

    )
}

export default Footer;