import React from 'react'
import Card from './card';
import nexter from '../../media/nexter3.png';
import trillo from '../../media/trillo.png';
import notorus from '../../media/notorus.jpg';

const Projects = () => (
    <div className="projects">

        {/* <div className="projects__head"> */}
            <h3 className="projects__head">Check out some of my favorite completed projects.</h3>
        {/* </div> */}

        <Card
            link='https://nexter-three.vercel.app/'
            src={nexter}
            description='This pjoject was to solidify designing with the CSS grids.'
            p1='JavaScript'
            p2='React'
            p3='SCSS preprocessor'
            p4='CSS grid'
            
        ></Card>

        <Card
            link='https://trillo-beta.vercel.app/'
            src={trillo}
            description='With this web page I built on my skills learning design using flex box.'
            p1='JavaScript'
            p2='React'
            p3='SCSS preprocessor'
            p4='Flex layout'
        ></Card>

        <Card
            link='https://notorus.vercel.app/'
            src={notorus}
            description='This project was mainly to practce animations for front end design.'
            p1='JavaScript'
            p2='React'
            p3='CSS'
            p4='Float layout'
        ></Card>

        <div className="btn projects__btn">See all my projects &rarr;</div>

    </div>
);

export default Projects;