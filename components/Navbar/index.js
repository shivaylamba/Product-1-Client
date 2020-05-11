import "./Navbar.module.css";
import Link from "components/Link";

const Navbar = () => {
  return (
    <header
      className="header header--absolute header--dark"
      id="site-header"
    >
      <div className="container">
        <div className="header-content-wrapper">
          <Link href="/">
            <a className="site-logo">
              <img
                className="puzzle-icon"
                src="assets/img/svg/01_logo_white.svg"
                alt="logo"
                width="120"
              />
            </a>
          </Link>

          <nav id="primary-menu" className="primary-menu">
            <a
              href="javascript:void(0)"
              id="menu-icon-trigger"
              className="menu-icon-trigger showhide"
            >
              <span className="mob-menu--title">Menu</span>
              <span id="menu-icon-wrapper" className="menu-icon-wrapper">
                <svg width="1000px" height="1000px">
                  <path
                    id="pathD"
                    d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
                  ></path>
                  <path id="pathE" d="M 300 500 L 700 500"></path>
                  <path
                    id="pathF"
                    d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
                  ></path>
                </svg>
              </span>
            </a>

            <ul className="primary-menu-menu">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>

              <li className="">
                <Link href="/HowItWorks">
                  <a>How it Works</a>
                </Link>
              </li>

              <li className="menu-item-has-children">
                <Link href="/MicroJobs">
                  <a>
                    Explore
                    <span className="show indicator">
                      <i className="puzzle-icon far fa-angle-down"></i>
                    </span>
                  </a>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/MicroJobs">
                      <a>Micro Jobs/Xtreme Jobs</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Explore">
                      <a>Full Time Job lists</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Explore">
                      <a>Freelancer Job details</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="06_company_profile.html">
                      <a>Company profile</a>
                    </Link>
                  </li>

                  <li>
                    <Link href=" ">
                      <a>Company lists</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item-has-children">
                <Link href="index.html#">
                  <a>
                    Candidates
                    <span className="show indicator">
                      <i className="puzzle-icon far fa-angle-down"></i>
                    </span>
                  </a>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="08_candidate_lists_row_map.html">
                      <a>Candidate lists</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="09_candidate_lists_grid.html">
                      <a>Candidate lists grid</a>
                    </Link>
                  </li>

                  <li>
                    <Link href=" 10_candidate_details.html">
                      <a>Candidate details</a>
                    </Link>
                  </li>

                  <li>
                    <Link href=" 11_submit_resume.html">
                      <a>Submit resume</a>
                    </Link>
                  </li>

                  <li>
                    <Link href=" 12_resume_preview.html">
                      <a>Resume preview</a>
                    </Link>
                  </li>

                  <li>
                    <Link href=" 13_resume_added.html">
                      <a>Resume added</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item-has-children">
                <Link href=" index.html#">
                  <a>
                    News
                    <span className="show indicator">
                      <i className="puzzle-icon far fa-angle-down"></i>
                    </span>
                  </a>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href=" 15_news_grid.html">
                      <a>News page </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="16_standard_news_with_sidebar.html">
                      <a>Standard news with sidebar</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="17_news_details_standard.html">
                      <a>News details standard</a>
                    </Link>
                  </li>

                  <li>
                    <Link href=" 18_news_details_gallery.html">
                      <a>News details gallery</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="19_news_details_with_video.html">
                      <a>News details with video</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item-has-mega-menu menu-item-has-children">
                <Link href=" index.html#">
                  <a>
                    Pages
                    <span className="show indicator">
                      <i className="puzzle-icon far fa-angle-down"></i>
                    </span>
                  </a>
                </Link>
                <div className="megamenu">
                  <div className="megamenu-row">
                    <div className="col3">
                      <ul>
                        <li className="megamenu-item-info">
                          <h6 className="megamenu-item-info-title">Pages</h6>
                        </li>
                        <li>
                          <Link href=" 14_pricing_plan.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Pricing plans
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="20_contacts.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Contacts
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="21_send_message.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Send message
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href=" 23_coming_soon.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Coming Soon Page
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href=" 22_404.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Error 404
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="41_sign_up.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Sign Up
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="40_login.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Login
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col3">
                      <ul>
                        <li className="megamenu-item-info">
                          <h6 className="megamenu-item-info-title">
                            Classic Styles
                          </h6>
                        </li>
                        <li>
                          <Link href=" 33_classic_accordions.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Accordions
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href=" 34_classic_button_styles.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Button Styles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href=" 35_classic_forms.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Forms
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href=" 36_classic_icon_with_text.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Icon with Text
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href=" 38_classic_link_styles.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Link Styles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href=" 37_classic_tab_styles.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Tab Styles
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col3">
                      <ul>
                        <li className="megamenu-item-info">
                          <h6 className="megamenu-item-info-title">
                            Typography
                          </h6>
                        </li>
                        <li>
                          <Link href=" 29_typography_heading_styles.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Heading Styles
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href=" 30_typography_highlights.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Highlights
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href=" 32_typography_blockquotes.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Blockquotes
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href=" 28_typography_columns.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Columns
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href=" 31_typography_lists.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Lists
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="43_typography-icons.html">
                            <a>
                              <i className="puzzle-icon fas fa-caret-right"></i>
                              Icons
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <nav className="login-menu">
            <ul>
              <li>
                <Link href="index.html#">
                  <a data-toggle="modal" href="#signupModal" data-target="#signupModal">
                    Sign Up
                  </a>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="crumina-button button--primary button--s button--hover-primary"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  Login
                </button>
              </li>
            </ul>
          </nav>

          <select
            className="puzzle--select language-switcher"
            data-minimum-results-for-search="Infinity"
            data-dropdown-css-class="language-switcher-dropdown"
          >
            <option value="Ua" data-href="">
              Ua
            </option>
            <option value="En" data-href="">
              En
            </option>
            <option value="Fr" data-href="">
              Fr
            </option>
            <option value="De" data-href="">
              De
            </option>
            <option value="It" data-href="">
              It
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
