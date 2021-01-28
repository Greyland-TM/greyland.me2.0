import React, {Component} from 'react';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {background1: 'about-me__welcome--hi-background1'}

    }

    // componentDidMount = () => {
    //     this.setState = {background1: 'about-me__welcome--hi-background1after'}
    //     console.log('animated')
    // }

    onAnimationEnd = () => {
        this.setState = {background1: 'about-me__welcome--hi-background1after'}
        console.log('also animated')
    }

    render() {
        return (
            <div className="about-me">
                <div className="about-me__welcome">
                    <div className="about-me__welcome--hi">
                        <span onAnimationEnd={this.onAnimationEnd} className='about-me__welcome--hi-background1'></span>
                        <span className="about-me__welcome--hi-background2"></span>
                        <span className="about-me__welcome--hi-h">H</span>
                        <span className="about-me__welcome--hi-i">i</span>
                    </div>
                    <div className="about-me__welcome--name">
                        <span className='about-me__welcome--name'>im Greyland</span>
                    </div>
                </div>
            </div>
        );
    }
}
    

export default AboutMe;