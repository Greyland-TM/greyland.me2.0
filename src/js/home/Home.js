import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Aux from '../HOC/aux';

import Landing from "./landing";
import Skills from './skills';
import Projects from './projects';

class Home extends Component {
    render() {
        return (
            <Aux>
                <Landing></Landing>
                <Skills></Skills>
                <Projects></Projects>
            </Aux>
        );
    }
}

export default Home;