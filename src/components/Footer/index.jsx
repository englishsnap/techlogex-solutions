import { NavLink } from "react-router-dom";

import navigationData from "../../data/navigationData";
import heroServicesData from "../../data/heroServicesData";

import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="container">

        <div className="row">

          {/* Brand */}

          <div className="col-md-6">

            <div className="footer-brand">

              <NavLink
                to="/"
                className="footer-logo"
              >
                TechLogex Solutions
              </NavLink>

              <p className="footer-tagline">
                Creative Branding, Design & Technology Company.
              </p>

              <p className="footer-description">
                We help businesses build stronger brands through
                creative design, professional printing, and modern
                digital solutions.
              </p>

            </div>

          </div>


          {/* Quick Links */}

          <div className="col-md-3">

            <div className="footer-column">

              <h3>
                Quick Links
              </h3>

              <ul className="footer-links">

                {navigationData.map((item) => (
                  <li key={item.id}>

                    <NavLink to={item.path}>
                      {item.label}
                    </NavLink>

                  </li>
                ))}

              </ul>

            </div>

          </div>


          {/* Services */}

          <div className="col-lg-3">

            <div className="footer-column">

              <h3>
                Services
              </h3>

              <ul className="footer-links">

                {heroServicesData.map((service) => (
                  <li key={service.id}>

                    <NavLink
                      to={`/services/${service.slug}`}
                    >
                      {service.title}
                    </NavLink>

                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} TechLogex Solutions.
            All rights reserved.
          </p>

          <NavLink to="/contact">
            Let's Talk →
          </NavLink>

        </div>

      </div>

    </footer>
  );
}

export default Footer;