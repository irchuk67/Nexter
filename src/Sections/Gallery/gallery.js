import React from "react";
import './gallery.scss';

let Gallery = ({photos}) => {
    let i = 0;
    let gallery = photos.map((photo) => {
        i += 1;
        return (
            <figure className={`gallery__item gallery__item--${i}`} key={i}>
                <img src={photo} className={`gallery__img`} alt={`house photo`}/>
            </figure>)

    })
    return (
        <section className="gallery">
            {gallery}
        </section>
    )
}

export default Gallery;