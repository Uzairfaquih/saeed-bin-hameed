import React, { useState } from "react";

const ContactMain = () => {
  
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubject =(event)=>{
    setSubject(event.target.value);
  }
  const handleMessage =(event)=>{
    setMessage(event.target.value);
  }

  return (
    <div
      className="container-fluid bg-light overflow-hidden px-lg-0"
      style={{ margin: "6rem 0" }}
    >
      <div className="container contact px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div
            className="col-lg-6 contact-text py-5 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div className="p-lg-5 ps-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4">Contact Us</h1>
              </div>
              <p className="mb-4">
                {/* The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done.{" "}
                <a href="https://htmlcodex.com/contact-form">Download Now</a>. */}
              </p>
            
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={handleSubject}
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        value={message}
                        onChange={handleMessage}
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* <button onClick ={()=>{
                      console.log(document.getElementById('subject').value,document.getElementById('message').value);
                    }}className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button> */}
                    <a target="blank"  className="btn btn-primary w-100 py-3" href="mailto:info@s-b-c.co?subject=Your%20Subject&body=Your%20Message%20Here">
                      Click here to send an email
                    </a>
                  </div>
                </div>
            
            </div>
          </div>
          <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
            <div className="position-relative h-100">
              <iframe
                className="position-absolute w-100 h-100"
                style={{ objectFit: "cover" }}
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1856.0469221232038!2d39.18388323853866!3d21.504043840573953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCo%20Advance%20Business%20Center%20Building%20Sharafya%20Jeddah%2C%20Jeddah%2C%20Makkah%2022234%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1696168734192!5m2!1sen!2sin"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
