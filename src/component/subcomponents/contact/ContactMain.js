import React from "react";

const ContactMain = () => {
  return (
    <div
      class="container-fluid bg-light overflow-hidden px-lg-0"
      style={{ margin: "6rem 0" }}
    >
      <div class="container contact px-lg-0">
        <div class="row g-0 mx-lg-0">
          <div
            class="col-lg-6 contact-text py-5 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div class="p-lg-5 ps-lg-0">
              <div class="section-title text-start">
                <h1 class="display-5 mb-4">Contact Us</h1>
              </div>
              <p class="mb-4">
                {/* The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done.{" "}
                <a href="https://htmlcodex.com/contact-form">Download Now</a>. */}
              </p>
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
            <div class="position-relative h-100">
              <iframe
                class="position-absolute w-100 h-100"
                style={{ objectFit: "cover" }}
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1856.0469221232038!2d39.18388323853866!3d21.504043840573953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCo%20Advance%20Business%20Center%20Building%20Sharafya%20Jeddah%2C%20Jeddah%2C%20Makkah%2022234%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1696168734192!5m2!1sen!2sin"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMain;
