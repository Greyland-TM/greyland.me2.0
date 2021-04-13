import React, { Component } from "react";

class ContactMe extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact__card">
          <div className="contact__card--left">
            <h3 className="contact__headers contact__headers--1">
              Contact Details
            </h3>
            <p className="contact__text contact__text--1">
              I respond to all emails within 3 days, and we will set up a video
              meeting where we can discuss your needs and expectations.
            </p>
            <p className="contact__text contact__text--2">
              if you want more details about how I conduct business and what the
              process is once you contact me then follow the link below and I'll
              tell you all about what you can expect.
            </p>
          </div>

          <div className="contact__card--right">
            <form className="form" action="/">
              <div className="form__group">
                <h3 className="contact__headers contact__headers--2">
                  Email Me
                </h3>
              </div>

              <div className="form__group">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  name="name"
                ></input>
                <label className="form__lable" htmlFor="name">
                  Your Name
                </label>
              </div>

              <div className="form__group">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Your Email"
                  id="name"
                  name="name"
                ></input>
                <label className="form__lable" htmlFor="name">
                  Your Email
                </label>
              </div>

              <div className="form__group">
                <label className="form__lable" htmlFor="w3review"></label>
                <textarea
                  className="form__textarea"
                  id="w3review"
                  name="w3review"
                  rows="10"
                  cols="50"
                  defaultValue="Enter your message here."
                ></textarea>
              </div>

              <button className="btn">Send email</button>
            </form>
          </div>
        </div>

        {/* <div className="contact-me__left">
                    <h3 className="contact-me__headers contact-me__headers--1">
                        Contact Details
                    </h3>
                    <p className="contact-me__text contact-me__text--1">
                        I respond to all emails within 3 days, and we will set up a video meeting where we can discuss your 
                        needs and expectations. 
                    </p>
                    <p className="contact-me__text contact-me__text--2">
                        if you want more details about how I conduct business and what the process is once you contact me
                        then follow the link below and I'll tell you all about what you can expect.
                    </p>
                </div>

                <div className="contact-me__right">
                    
                    <div className="contact-me__form">
                        <form className='form' action="/">
                            <div className='form__group'>
                                <h3 className="contact-me__headers contact-me__headers--2">
                                    Email Me
                                </h3>
                            </div>
                            
                            <div className='form__group'>
                                <input className='form__input' type="text" placeholder='Your Name' id="name" name="name"></input>
                                <label className='form__lable' htmlFor='name'>Your Name</label>
                            </div>
                            
                            <div className='form__group'>
                                <input className='form__input' type="text" placeholder='Your Email' id="name" name="name"></input>
                                <label className='form__lable' htmlFor='name'>Your Email</label>
                            </div>

                            <div className='form__group'>
                                <label className='form__lable' htmlFor="w3review"></label>
                                <textarea className='form__textarea' id="w3review" name="w3review" rows="10" cols="50" defaultValue='Enter your message here.'>
                                    
                                </textarea> 
                            </div>

                            <button className="btn">Send email</button>
                        </form>
                    </div>
                </div> */}
      </div>
    );
  }
}

export default ContactMe;
