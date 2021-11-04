import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "../ContactUs.css";

const ContactUs = ({
  phone,
  site_email,
  address,
}) => {
  const [processing, setProcessing] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const { fullName, email, subject, message } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };



  const sendEmail = (e) => {
    e.preventDefault();
    setProcessing(true);

    if (!fullName && !subject && !email && !message) {
      toast.error("Please fill out all fields.");
      setProcessing(false);
      return;
    }

    if (!fullName) {
      toast.error("Your full name is required.");
      setProcessing(false);
      return;
    }

    if (!subject) {
      toast.error("Subject is required.");
      setProcessing(false);
      return;
    }
    if (!email) {
      toast.error("Your valid email address is required.");
      setProcessing(false);
      return;
    }
    if (!message) {
      toast.error("Please type in your message.");
      setProcessing(false);
      return;
    }

    emailjs
      .sendForm(
        "service_okmo9vi",
        "template_7iln79b",
        e.target,
        "user_UdgQW2uxRt0vdGCQzkK9Y"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            ...formData,
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
          toast.success(
            "Your message has been sent successfully. We will get back to you soon."
          );
          setProcessing(false);
        },
        (error) => {
          console.log(error.text);
          setFormData({
            ...formData,
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
          toast.success(error.text);
          setProcessing(false);
        }
      );
    e.target.reset();
  };
  return (
    <section className="ftco-section" id="/contact-us">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">CONTACT US</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h2 className="mb-4">Get in touch</h2>
                    <form
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                      onSubmit={sendEmail}
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" for="name">
                              Full Name
                            </label>
                            <input
                              type="text"
                              value={fullName}
                              onChange={handleChange("fullName")}
                              className="form-control"
                              name="fullName"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" for="email">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={email}
                              onChange={handleChange("email")}
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" for="subject">
                              Subject
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              value={subject}
                              onChange={handleChange("subject")}
                              id="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" for="#">
                              Message
                            </label>
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              value={message}
                              onChange={handleChange("message")}
                              cols="30"
                              rows="4"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value={processing ? "Sending..." : "Send Message"}
                              className="btn btn-primary"
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                  <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                    <h3>Let's get in touch</h3>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address: </span> {address}
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone: </span>
                          <a>{phone}</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email: </span>
                          <a>{site_email}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
