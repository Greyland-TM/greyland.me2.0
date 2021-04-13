import React, { Component } from "react";
import { Link } from "react-router-dom";
import sr from "../HOC/scroll-reveal/scrollReveal";

import tablet from "../../media/tablet.jpg";
import work from "../../media/work.jpg";
import robot from "../../media/robot.jpg";
import workThings from "../../media/workThings.jpg";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollPosition: "bottom" };

    this.img1 = React.createRef();
    this.img2 = React.createRef();
    this.txt1 = React.createRef();
    this.txt2 = React.createRef();
  }

  componentDidMount = () => {
    const configTxt = {
      // reset: true,
      origin: this.state.scrollPosition,
      duration: 1500,
      delay: 1000,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };

    const configTxt2 = {
      // reset: true,
      origin: this.state.scrollPosition,
      duration: 1500,
      delay: 800,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };

    const configImg = {
      // reset: true,
      origin: this.state.scrollPosition,
      duration: 1500,
      delay: 1000,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };

    const configImg2 = {
      // reset: true,
      origin: this.state.scrollPosition,
      duration: 1500,
      delay: 800,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };

    console.log(this.state.scrollPosition);

    sr.reveal(this.txt1.current, configTxt);
    sr.reveal(this.txt2.current, configTxt2);
    sr.reveal(this.img1.current, configImg);
    sr.reveal(this.img2.current, configImg2);

    if (this.state.scrollPosition === "bottom") {
      this.setState({ scrollPosition: "top" });
    } else {
      this.setState({ scrollPosition: "bottom" });
    }

    console.log(this.state.scrollPosition);
    console.log(this.txt1.current);
  };

  render() {
    return (
      <div className="description">
        <div
          className="description__content description__content--1"
          ref={this.txt1}
        >
          <div className="description__content--background description__content--background-1"></div>
          <img
            src={work}
            alt="work"
            className="description__content--image description__content--image--1"
            ref={this.img1}
          />
          <img
            src={robot}
            alt="robot"
            className="description__content--image description__content--image--1-2"
            ref={this.img1}
          />
          <p className="description__content--vertical">
            stylish design makes a difference
          </p>
          <div className="description__text description__text--1">
            <h2 className="description__text--head">What about Greyland?</h2>
            <p className="description__text--body">
              I am a largly self taught software developer who is currently
              persuing a masters in computer science and working at Columbia
              Helicopters as a Buisness Intelligence Developer. Most of my
              expierence is in front end web development and Microsoft
              applications.
            </p>
            <h3 className="description__text--head">How can I help you?</h3>
            <p className="description__text--body">
              You're starting up a brand new company and need help{" "}
              <span>promoting &nbsp;</span>your name and building the perfect
              website, Greyland can help.
            </p>
            <p className="description__text--body margin-bottom-sm">
              You need a better way to manage the employees you already have?
              Greyland can <span>design &nbsp;</span>personalized spreadsheets
              that will exceed your wildest expectations.
            </p>
          </div>
        </div>

        <div className="description__seperator">
          <h1 className="description__seperator--body">
            Creative design that flows
          </h1>
        </div>

        <div
          className="description__content description__content--2"
          ref={this.txt2}
        >
          <div className="description__content--background description__content--background-2"></div>
          <img
            src={workThings}
            alt="together"
            className="description__content--image description__content--image--2"
            ref={this.img2}
          />
          <img
            src={tablet}
            alt="together"
            className="description__content--image description__content--image--2-2"
            ref={this.img2}
          />
          <div className="description__text description__text--2">
            <h2 className="description__text--head">What about Greyland?</h2>
            <p className="description__text--body">
              If your want someone who will pay attention to the details, and
              produce an application that is &nbsp;
              <span>ellagant</span> and <span>beautiful</span> you have found
              the right person. I have an eye for design and a passion for
              developing. And I will do my best to ensure you are happy with
              your product.
            </p>
            <h3 className="description__text--head">What about specifics?</h3>
            <p className="description__text--body">
              There are two major things I do very well. The first is{" "}
              <span>front end</span> &nbsp;development / design. And together we
              can <span>create</span> &nbsp;the perfect page for your needs.
            </p>
            <p className="description__text--body margin-bottom-sm">
              And the second is building complex and automated{" "}
              <span>Microsoft applications</span>. Using VBA I can make managing
              your buisness significantly easier.
            </p>
            <div className="btn description__btn">
              <Link to="/about-me">Learn about Greyland &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Description;
