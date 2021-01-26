import React, {Component} from 'react'
import Card from './card';
import nexter from '../../media/nexter3.png';
import trillo from '../../media/trillo.png';
import notorus from '../../media/notorus.jpg';
import sr from '../HOC/scroll-reveal/scrollReveal';
// import pattern1 from '../../media/pattern1.png';

class Projects extends Component {

    componentDidMount = () => {
        const projectLeft = {
            origin: 'bottom',
            duration: 1500,
            delay: 5000,
            distance: '500px',
            scale: 1,
            easing: 'ease',
        }

        const projectRight = {
            origin: 'bottom',
            duration: 1500,
            delay: 5000,
            distance: '500px',
            scale: 1,
            easing: 'ease',
        }

        const projectMiddle = {
            origin: 'bottom',
            duration: 1500,
            delay: 5000,
            distance: '500px',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal(this.refs.cardRight, projectRight);
        sr.reveal(this.refs.cardLeft, projectLeft);
        sr.reveal(this.refs.cardMiddle, projectMiddle);
    }

    

    render() {
        const ref = React.createRef();
        return (
            <div className="projects">
                
                <h3 className="projects__head">Check out some of my favorite completed projects.</h3>

                <Card
                    ref={ref}
                    link='https://nexter-three.vercel.app/'
                    src={nexter}
                    description='This pjoject was to solidify designing with the CSS grids.'
                    p1='JavaScript'
                    p2='React'
                    p3='SCSS preprocessor'
                    p4='CSS grid'
                    
                ></Card>

                <Card
                    ref='cardMiddle'
                    link='https://trillo-beta.vercel.app/'
                    src={trillo}
                    description='With this web page I built on my skills learning design using flex box.'
                    p1='JavaScript'
                    p2='React'
                    p3='SCSS preprocessor'
                    p4='Flex layout'
                ></Card>

                <Card
                    ref='cardRight'
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
    }
}
    

export default Projects;