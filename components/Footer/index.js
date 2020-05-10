import Link from "components/Link";

const Footer1 = () => {
  return (
    <footer id="site-footer" className="footer bg-dark-themes">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-0">
              <div className="widget w-info">
                <Link href="index.html">
                  <a className="site-logo">
                  <img className="puzzle-icon" src="assets/img/svg/01_logo_white.svg" alt="logo" width="120"/>
                  </a>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="contact-item">
                  <svg className="puzzle-icon" width="11" height="16">
                    <path
                      fill=""
                      fillRule="evenodd"
                      d="M5.5 13.089c-.756 0-1.375.654-1.375 1.454 0 .801.619 1.455 1.375 1.455s1.375-.654 1.375-1.455c0-.8-.619-1.454-1.375-1.454zM1.375-.003C.619-.003 0 .653 0 1.452c0 .801.619 1.455 1.375 1.455S2.75 2.253 2.75 1.452c0-.799-.619-1.455-1.375-1.455zm0 4.364C.619 4.361 0 5.016 0 5.816 0 6.617.619 7.27 1.375 7.27S2.75 6.617 2.75 5.816c0-.8-.619-1.455-1.375-1.455zm0 4.364C.619 8.725 0 9.379 0 10.18c0 .8.619 1.455 1.375 1.455S2.75 10.98 2.75 10.18c0-.801-.619-1.455-1.375-1.455zm8.25-5.818c.756 0 1.375-.654 1.375-1.455 0-.799-.619-1.455-1.375-1.455S8.25.653 8.25 1.452c0 .801.619 1.455 1.375 1.455zM5.5 8.725c-.756 0-1.375.654-1.375 1.455 0 .8.619 1.455 1.375 1.455s1.375-.655 1.375-1.455c0-.801-.619-1.455-1.375-1.455zm4.125 0c-.756 0-1.375.654-1.375 1.455 0 .8.619 1.455 1.375 1.455S11 10.98 11 10.18c0-.801-.619-1.455-1.375-1.455zm0-4.364c-.756 0-1.375.655-1.375 1.455 0 .801.619 1.454 1.375 1.454S11 6.617 11 5.816c0-.8-.619-1.455-1.375-1.455zm-4.125 0c-.756 0-1.375.655-1.375 1.455 0 .801.619 1.454 1.375 1.454s1.375-.653 1.375-1.454c0-.8-.619-1.455-1.375-1.455zm0-4.364c-.756 0-1.375.656-1.375 1.455 0 .801.619 1.455 1.375 1.455s1.375-.654 1.375-1.455c0-.799-.619-1.455-1.375-1.455z"
                    />
                  </svg>
                  <Link href="#">
                    
                    <a>8 800 567.890.00</a>
                  </Link>
                  Mon-Fri 9am-6pm
                </div>

                <div className="contact-item">
                  <i className="puzzle-icon far fa-at"></i>
                 
                    
                    <a href="mailto:info@sample.com">support@jobook.com</a>
                
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-0">
              <div className="widget widget_links">
                <h5 className="widget-title">Candidates</h5>

                <ul>
                  <li>
                    <Link href="08_candidate_lists_row_map.html">
                      <a>Browse Jobs</a>
                    </Link>
                  </li>

                  <li>
                    <Link href=" 03_job_lists_row_map.html">
                      <a>Browse Companies</a>
                    </Link>
                  </li>

                  <li>
                    <Link href=" 07_company_lists_alphabet.html">
                      <a>Categories</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="11_submit_resume.html">
                      <a>Submit Resume</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="12_resume_preview.html">
                      <a>Dashboard</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-0">
              <div className="widget widget_links">
                <h5 className="widget-title">Employers</h5>

                <ul>
                  <li>
                    <Link href="09_candidate_lists_grid.html">
                      <a>Browse Candidates</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="16_standard_news_with_sidebar.html">
                      <a>Post a Job</a>
                    </Link>
                  </li>

                  <li>
                    <Link href=" 12_resume_preview.html">
                      <a>Dashboard</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-0 mb-lg-0">
              <div className="widget w-contacts">
                <h5 className="widget-title">Sign Up for Weekly Newsletter</h5>
                <p>
                  Subscribe to our newsletter and always be aware of all the
                  latest updates.
                </p>

                <div className="input--border-bottom">
                  <input name="mail" placeholder="Email Address" type="email" />
                  <i className="puzzle-icon far fa-envelope" />
                </div>

                <ul className="socials">
                  <li>
                    <Link href="#">
                      <a>
                        <i className="puzzle-icon fab fa-facebook-square"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <i className="puzzle-icon fab fa-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <i className="puzzle-icon fab fa-linkedin-in"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href=" #">
                      <a>
                        <i className="puzzle-icon fas fa-rss"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center text-lg-left mb-4 mb-lg-0">
              <ul className="footer-main-menu">
                <li>
                  <Link href="index.html">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="02_how_it_works.html">
                    <a>How it Works</a>
                  </Link>
                </li>
                <li>
                  <Link href="03_job_lists_row_map.html">
                    <a>Employers</a>
                  </Link>
                </li>
                <li>
                  <Link href="08_candidate_lists_row_map.html">
                    <a>Candidates</a>
                  </Link>
                </li>
                <li>
                  <Link href="15_news_grid.html">
                    <a>News</a>
                  </Link>
                </li>
                <li>
                  <Link href=" index.html">
                    <a>Pages</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center text-lg-right">
                <div className="copyright">
                    <span>© 2019 </span>
                    <span><a href="index.html">Puzzler.</a></span>
                    <span>designed by <a href="" className="logo-title">themefire.</a></span>
                    <span>Developed by <a href="" className="logo-title">Crumina</a></span>
                </div>

            </div>
          </div>
        </div>
      </div>
      <Link href="#">
        <a className="back-to-top">
          <svg className="puzzle-icon" width="24" height="28">
            <path
              fill=""
              fillRule="evenodd"
              d="M23.027 1.966H.973A.98.98 0 0 1 0 .983C0 .44.432 0 .973 0h22.054A.98.98 0 0 1 24 .983a.983.983 0 0 1-.973.983zM11.306 6.105a.975.975 0 0 1 1.382 0l6.083 6.111a.988.988 0 0 1 0 1.39.974.974 0 0 1-1.377 0l-4.415-4.437v17.853A.98.98 0 0 1 12 28a.975.975 0 0 1-.973-.978V9.169l-4.415 4.437a.976.976 0 0 1-1.383 0 .988.988 0 0 1 0-1.39l6.077-6.111z"
            />
          </svg>
          Go to top
        </a>
      </Link>
    </footer>
  );
};

export default Footer1;
