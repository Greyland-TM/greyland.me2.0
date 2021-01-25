import React from 'react'
import glassBeach from '../../media/stolen.png';
import oceanHole from '../../media/cannonBeach.jpg';
import tablet from '../../media/tablet.jpg';

const Description = () => (
    <div className="description">
        
        <img src={glassBeach} alt="together" className="description__image description__image--1"/>
        <img src={oceanHole} alt="together" className="description__image description__image--12"/>
        <div className="description__content description__content--1">
            <div className="">
                <h2 className="description__content--head">What about Greyland?</h2>
                <p className="description__content--text">
                    I am a largly self taught software developer who is currently persuing a masters in computer science 
                    and working at Columbia Helicopters as a Buisness Intelligence Developer. Most of my expierence is in 
                    front end web development and Microsoft applications.
                </p>
                <h3 className="description__content--head">How can I help you?</h3>
                <p className="description__content--text">
                    You're starting up a brand new company and need help <span>promoting &nbsp;</span>your name 
                    and building the perfect website, Greyland can help.
                </p>
                <p className="description__content--text margin-bottom-sm">
                    You need a better way to manage the employees you already have? Greyland can <span>design &nbsp;</span>personalized 
                    spreadsheets that will exceed your wildest expectations.
                </p>
            </div>
        </div>

        <img src={tablet} alt="together" className="description__image description__image--2"/>
        <div className="description__content description__content--2">
            <div className="">
                <h2 className="description__content--head">Why should you pick me?</h2>
                <p className="description__content--text">
                    If your want someone who will pay attention to the details, and produce an application that is &nbsp;
                    <span>ellagant</span> and <span>beautiful</span> you have found the right person. I have an eye for
                    design and a passion for developing. And I will do my best to ensure you are happy with your product.
                </p>
                <h3 className="description__content--head">What about specifics?</h3>
                <p className="description__content--text">
                    There are two major things I do very well. The first is <span>front end</span> &nbsp;development / design. 
                    And together we can <span>create</span> &nbsp;the perfect page for your needs. 
                </p>
                <p className="description__content--text margin-bottom-sm">
                    And the second is building complex and automated <span>Microsoft applications</span>. Using VBA I can make managing your
                    buisness significantly easier.
                </p>
                <div className="btn description__btn">Learn about Greyland &rarr;</div>
            </div>
        </div>

    </div>
);

export default Description;