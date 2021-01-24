import React from 'react'
import { DiJavascript } from "react-icons/di";
import { SiMicrosoftexcel } from "react-icons/si";
import { IoBriefcase } from "react-icons/io5";
import { GiColdHeart } from "react-icons/gi";

const Skills = () => (
    <div className="skills">
        
        <div className="skills__item">
            <div className="skills__title">
                <DiJavascript className='skills__icon'/>
                <h2 className="skills__head">Javascript</h2>
            </div>
            <p className="skills__text">I use the most modern and advanced tools to make sure your website is fast and responsive.</p>
            <button className="btn skills__btn">Tell me more &rarr; </button>
        </div>

        <div className="skills__item">
            <div className="skills__title">
                <GiColdHeart className='skills__icon'/>
                <h2 className="skills__head">UX / UI design</h2>
            </div>
            <p className="skills__text">You found someone who cares about the way your application looks and feels.</p>
            <button className="btn skills__btn">Tell me more &rarr; </button>
        </div>

        <div className="skills__item">
            <div className="skills__title">
                <SiMicrosoftexcel className='skills__icon'/>
                <h2 className="skills__head">Microsoft VBA</h2>
            </div>
            <p className="skills__text">I create custom microsoft apllications for tracking progress, employees, or supplys.</p>
            <button className="btn skills__btn">Tell me more &rarr; </button>
        </div>

        <div className="skills__item">
            <div className="skills__title">
                <IoBriefcase className='skills__icon'/>
                <h2 className="skills__head">Business automation</h2>
            </div>
            <p className="skills__text">Dont waste time on repetitive tasks. I'll develope solutions to save your company time.</p>
            <button className="btn skills__btn">Tell me more &rarr; </button>
        </div>
    </div>
);

export default Skills;