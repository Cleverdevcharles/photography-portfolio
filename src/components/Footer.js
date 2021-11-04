import React from "react";
import { Link } from "react-scroll";
import "../Footer.css";

const Footer = ({ phone, site_email, address, paragraphOne, paragraphTwo }) => {
  return (
    <footer class="footer">
      <div class="container bottom_border footer-container">
        <div>
          <div class=" col-md-12">
            <h5 class="headin5_amrc col_white_amrc pt2">Find us</h5>
            <p class="mb10">
              {paragraphOne}
              {paragraphTwo}
            </p>
            <p>
              <i class="fa fa-location-arrow"></i> {address}
            </p>
            <p>
              <i class="fa fa-phone"></i> {phone}
            </p>
            <p>
              <i class="fa fa fa-envelope"></i> {site_email}
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <ul class="foote_bottom_ul_amrc">
          <li>
            <Link
              to="/"
              style={{ cursor: "pointer" }}
              activeClass="active"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              style={{ cursor: "pointer" }}
              activeClass="active"
              spy={true}
              smooth={true}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/our-gallary"
              style={{ cursor: "pointer" }}
              activeClass="active"
              spy={true}
              smooth={true}
            >
              Our Gallary
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              style={{ cursor: "pointer" }}
              activeClass="active"
              spy={true}
              smooth={true}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <p class="text-center">Copyright @2021</p>

        <ul class="social_footer_ul">
          <li>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
