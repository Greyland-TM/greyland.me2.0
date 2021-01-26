import React from 'react';
import { DiJavascript } from "react-icons/di";
import { IoLogoReact, IoLogoSass } from "react-icons/io5";
import { IoMdGrid } from "react-icons/io";

const Card = React.forwardRef((props, ref) => (
    <div className="card" ref={ref}>
        <div className="card__top">
            <figure className="card__image">
                <img src={props.src} alt="Project Cover" className='card__image'/>
            </figure>
        </div>
        
        <div className="card__bottom">
            <div className="card__tools">
                <div className="card__tools--item">
                    <DiJavascript className='card__tools--icon'></DiJavascript>
                    <p className="card__tools--1">{props.p1}</p>
                </div>

                <div className="card__tools--item">
                    <IoLogoReact className='card__tools--icon'></IoLogoReact>
                    <p className="card__tools--2">{props.p2}</p>
                </div>

                <div className="card__tools--item">
                    <IoLogoSass className='card__tools--icon'></IoLogoSass>
                    <p className="card__tools--3">{props.p3}</p>
                </div>

                <div className="card__tools--item">
                    <IoMdGrid className='card__tools--icon'></IoMdGrid>
                    <p className="card__tools--4">{props.p4}</p>
                </div>
            </div>
            <a href={props.link} target='blank' className="btn-2 card__bottom--btn">View this project &rarr;</a>
        </div>
    </div>
));

export default Card;



