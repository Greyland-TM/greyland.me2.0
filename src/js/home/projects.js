import React, {Component} from 'react'
import Card from './card';
import nexter from '../../media/nexter3.png';
import trillo from '../../media/trillo.png';
import notorus from '../../media/notorus.jpg';
import sr from '../HOC/scroll-reveal/scrollReveal';
// import pattern1 from '../../media/pattern1.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        
        this.state = {scrollPosition: 'top'}
        this.cardLeft = React.createRef();
        this.cardMiddle = React.createRef();
        this.cardRight = React.createRef();
    }

    componentDidMount = () => {
        const projectLeft = {
            reset: true,
            origin: 'left',
            duration: 1500,
            delay: 500,
            distance: '500px',
            scale: 1,
            easing: 'ease',
        }

        const projectRight = {
            reset: true,
            origin: 'bottom',
            duration: 1500,
            delay: 500,
            distance: '500px',
            scale: 1,
            easing: 'ease',
        }

        const projectMiddle = {
            reset: true,
            origin: 'right',
            duration: 1500,
            delay: 500,
            distance: '500px',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal(this.cardRight.current, projectRight);
        sr.reveal(this.cardLeft.current, projectLeft);
        sr.reveal(this.cardMiddle.current, projectMiddle);
    }

    render() {
        return (
            <div className="projects">
                
                <h3 className="projects__head">Check out some of my favorite completed projects.</h3>

                <Card
                    ref={this.cardLeft}
                    link='https://nexter-three.vercel.app/'
                    src={nexter}
                    description='This pjoject was to solidify designing with the CSS grids.'
                    p1='JavaScript'
                    p2='React'
                    p3='SCSS preprocessor'
                    p4='CSS grid'
                    
                ></Card>

                <Card
                    ref={this.cardRight}
                    link='https://trillo-beta.vercel.app/'
                    src={trillo}
                    description='With this web page I built on my skills learning design using flex box.'
                    p1='JavaScript'
                    p2='React'
                    p3='SCSS preprocessor'
                    p4='Flex layout'
                ></Card>

                <Card
                    ref={this.cardMiddle}
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