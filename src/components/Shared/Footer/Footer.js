import React from "react";
import "./_footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container mt-5">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-md-4 footer__header">
            <h3>Let us handle your project, professionally.</h3>
            <p>
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
          <div className="col-12 col-md-6 offset-md-1">
            <form action="" className="d-flex flex-column contact-form">
              <input type="text" name="name" placeholder="Enter your Name" />
              <input type="email" name="email" placeholder="Enter your Email" />
              <textarea
                name="description"
                rows="4"
                cols="10"
                placeholder="Project details"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>copyright &copy; {new Date().getFullYear()} by kite. all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
