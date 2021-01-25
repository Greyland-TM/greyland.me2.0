import React, { Component } from 'react';

import pattern1 from '../../media/pattern1.png';

import Aux from '../HOC/aux';

import Landing from "./landing";
import Skills from './skills';
import Description from './description';
import Projects from './projects';

class Home extends Component {
    render() {
        return (
            <Aux>
                <div className='home-container'>
                {/* <img src={pattern1} alt="" className="home__img"/> */}
                <Landing></Landing>
                <Skills></Skills>
                <Description></Description>
                <Projects></Projects>
                </div>
            </Aux>
        );
    }
}

export default Home;