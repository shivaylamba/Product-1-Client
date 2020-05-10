const Explore = () => {
    return (
        <div className="main-content-wrapper">

	<section>
		<div className="crumina-module crumina-map crumina-map--700" id="map-employer">
			<div className="block-location-info">
				<div className="h1">We have 69.368 job offers for you!</div>
			</div>
		</div>
	</section>

	<section>
		<div className="tabs tabs--border-primary negative-margin-top-115">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<ul className="nav nav-tabs" id="myTab" role="tablist">

							<li role="presentation" className="nav-item active">
								<a className="nav-link active h2 tabs-scroll" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Find your dream job</a>
							</li>

						</ul>
					</div>
				</div>
			</div>

			<div className="tab-content">

				<div className="container">
					<div className="row pb60">
						<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
								<form className="form--search">

									<div className="row">
										<div className="col-md-4 col-sm-6 col-xs-12 mb-3 mb-md-0">
											<input name="name" placeholder="Your Full Name" type="text"/>
										</div>
										<div className="col-md-3 col-sm-6 col-xs-12 mb-3 mb-md-0">
											<select id="select1" className="puzzle--select" data-minimum-results-for-search="Infinity">
												<option data-display="All Specialisms">All Specialisms</option>
												<option value="1">Freelance</option>
												<option value="2">Full Time</option>
												<option value="3">Intership</option>
												<option value="4">Part Time</option>
												<option value="5">Temporary</option>
											</select>
										</div>
										<div className="col-md-3 col-sm-6 col-xs-12 mb-3 mb-md-0">
											<select id="select2" className="puzzle--select" data-minimum-results-for-search="Infinity">
												<option data-display="All Locations">All Locations</option>
												<option value="1">Freelance</option>
												<option value="2">Full Time</option>
												<option value="3">Intership</option>
												<option value="4">Part Time</option>
												<option value="5">Temporary</option>
											</select>
										</div>
										<div className="col-md-2 col-sm-6 col-xs-12 mb-3 mb-md-0">
											<button type="button" className="crumina-button button--dark button--xl">Search</button>
										</div>
									</div>

									<div className="row mt-4 mt-md-0">
										<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
											<div className="checkboxes-wrap">
												<div className="checkbox checkbox--blue-dark">
													<label>
														<input type="checkbox" name="optionsCheckboxes"/>
														<span className="checkbox-material"><span className="check"></span></span>
														Part Time
													</label>
												</div>

												<div className="checkbox checkbox--green">
													<label>
														<input type="checkbox" name="optionsCheckboxes1"/>
														<span className="checkbox-material"><span className="check"></span></span>
														Full Time
													</label>
												</div>

												<div className="checkbox checkbox--red">
													<label>
														<input type="checkbox" name="optionsCheckboxes2"/>
														<span className="checkbox-material"><span className="check"></span></span>
														Temporary
													</label>
												</div>

												<div className="checkbox checkbox--yellow">
													<label>
														<input type="checkbox" name="optionsCheckboxes3"/>
														<span className="checkbox-material"><span className="check"></span></span>
														Internship
													</label>
												</div>

												<div className="checkbox checkbox--blue">
													<label>
														<input type="checkbox" name="optionsCheckboxes4"/>
														<span className="checkbox-material"><span className="check"></span></span>
														Freelance
													</label>
												</div>
											</div>
										</div>
									</div>

								</form>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>

	<section className="bg-light-grey pb120">
		<div className="container">
			<div className="row mb40">
				<div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
					<h3 className="mb40 mt-0">Search Result:</h3>

					<div className="ui-card featured-vacancies">
						<div className="ui-card-content">
							<div className="vacancies-title-location">
								<a href="05_job_details.html" className="vacancies-title h6">Data Center Support Specialist Engineer</a>
								<div className="vacancies-location">
									<time className="published" datetime="2018-03-14 12:00:00">6 hours ago</time>
									London, United Kingdom
								</div>
							</div>
							<a href="05_job_details.html" className="logo-company">
								<img className="logo" src="./img/client2.png" title="company"/>
							</a>
						</div>
						<div className="ui-card-footer">
							<a href="#" className="link--uppercase-wide fs-12">IT Contractor</a>
							<button type="button" className="crumina-button button--blue-dark button--xxs button--uppercase-wide">Part Time</button>
						</div>
					</div>

					<div className="ui-card featured-vacancies">
						<div className="ui-card-content">
							<div className="vacancies-title-location">
								<a href="05_job_details.html" className="vacancies-title h6">Visualizer, web designer Max 3Ds, Cinema 4D</a>
								<div className="vacancies-location">
									<time className="published" datetime="2018-03-14 12:00:00">24 hours ago</time>
									New York, USA
								</div>
							</div>
							<a href="05_job_details.html" className="logo-company">
								<img className="logo" src="./img/client3.png" title="company"/>
							</a>
						</div>
						<div className="ui-card-footer">
							<a href="#" className="link--uppercase-wide fs-12">Digital & Creative</a>
							<button type="button" className="crumina-button button--green button--xxs button--uppercase-wide">Full Time</button>
						</div>
					</div>

					<div className="ui-card">
						<div className="ui-card-content">
							<div className="vacancies-title-location">
								<a href="05_job_details.html" className="vacancies-title h6">Regional Sales Manager</a>
								<div className="vacancies-location">
									<time className="published" datetime="2018-03-14 12:00:00">6 days ago</time>
									Melbourne, Australia
								</div>
							</div>
							<a href="05_job_details.html" className="logo-company">
								<img className="logo" src="./img/client4.png" title="company"/>
							</a>
						</div>
						<div className="ui-card-footer">
							<a href="#" className="link--uppercase-wide fs-12">Sales & Marketing</a>
							<button type="button" className="crumina-button button--red button--xxs button--uppercase-wide">Temporary</button>
						</div>
					</div>

					<div className="ui-card featured-vacancies">
						<div className="ui-card-content">
							<div className="vacancies-title-location">
								<a href="05_job_details.html" className="vacancies-title h6">Front End and Back End Developer</a>
								<div className="vacancies-location">
									<time className="published" datetime="2018-03-14 12:00:00">1 week ago</time>
									California, USA
								</div>
							</div>
							<a href="05_job_details.html" className="logo-company">
								<img className="logo" src="./img/client5.png" title="company"/>
							</a>
						</div>
						<div className="ui-card-footer">
							<a href="#" className="link--uppercase-wide fs-12">Web Development</a>
							<button type="button" className="crumina-button button--yellow button--xxs button--uppercase-wide">Internship</button>
						</div>
					</div>

					<div className="ui-card">
						<div className="ui-card-content">
							<div className="vacancies-title-location">
								<a href="05_job_details.html" className="vacancies-title h6">Professional Copywriter for Commercial Advertising</a>
								<div className="vacancies-location">
									<time className="published" datetime="2018-03-14 12:00:00">3 months ago</time>
									Cologne, Germany
								</div>
							</div>
							<a href="05_job_details.html" className="logo-company">
								<img className="logo" src="./img/client6.png" title="company"/>
							</a>
						</div>
						<div className="ui-card-footer">
							<a href="#" className="link--uppercase-wide fs-12">Writing</a>
							<button type="button" className="crumina-button button--blue button--xxs button--uppercase-wide">Freelance</button>
						</div>
					</div>

					<div className="ui-card">
						<div className="ui-card-content">
							<div className="vacancies-title-location">
								<a href="05_job_details.html" className="vacancies-title h6">Front End and Back End Developer</a>
								<div className="vacancies-location">
									<time className="published" datetime="2018-03-14 12:00:00">6 months ago</time>
									London, United Kingdom
								</div>
							</div>
							<a href="05_job_details.html" className="logo-company">
								<img className="logo" src="./img/client7.png" title="company"/>
							</a>
						</div>
						<div className="ui-card-footer">
							<a href="#" className="link--uppercase-wide fs-12">Web Development</a>
							<button type="button" className="crumina-button button--blue-dark button--xxs button--uppercase-wide">Part Time</button>
						</div>
					</div>
				</div>

				<div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 mt-lg-0">

					<aside aria-label="sidebar" className="sidebar sidebar-right">
						<div className="widget w-featured-vacancies widget-sidebar">
							<h3 className="widget-title">Featured</h3>

							<div className="crumina-module crumina-module-slider navigation-top-right">
								<div className="swiper-btn-wrap">
									<div className="swiper-btn-prev">
										<i className="puzzle-icon fal fa-long-arrow-left"></i>
									</div>

									<div className="swiper-btn-next">
										<i className="puzzle-icon fal fa-long-arrow-right"></i>
									</div>
								</div>
								<div className="swiper-container" data-show-items="1" data-prev-next="1">
									<div className="swiper-wrapper">
										<div className="swiper-slide">
											<div className="ui-card featured-vacancies">
												<div className="ui-card-content">
													<div className="vacancies-title-location">
														<a href="05_job_details.html" className="vacancies-title h6">Data Center Support Specialist Engineer</a>
														<div className="vacancies-location">
															<time className="published" datetime="2018-03-14 12:00:00">6 days ago</time>
															Melbourne, Australia
														</div>
													</div>
													<a href="05_job_details.html" className="logo-company logo-company--thumb">
														<img className="logo" src="./img/client8.png" title="company"/>
														<img src="./img/company1.jpg" title="company"/>
														<div className="overlay"></div>
													</a>
												</div>
												<div className="ui-card-footer">
													<a href="#" className="link--uppercase-wide fs-12">IT Contractor</a>
													<button type="button" className="crumina-button button--blue button--xxs button--uppercase-wide">Freelance</button>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="ui-card featured-vacancies">
												<div className="ui-card-content">
													<div className="vacancies-title-location">
														<a href="05_job_details.html" className="vacancies-title h6">Data Center Support Specialist Engineer</a>
														<div className="vacancies-location">
															<time className="published" datetime="2018-03-14 12:00:00">6 days ago</time>
															Melbourne, Australia
														</div>
													</div>
													<a href="05_job_details.html" className="logo-company logo-company--thumb">
														<img className="logo" src="./img/client8.png" title="company"/>
														<img src="./img/company1.jpg" title="company"/>
														<div className="overlay"></div>
													</a>
												</div>
												<div className="ui-card-footer">
													<a href="#" className="link--uppercase-wide fs-12">IT Contractor</a>
													<button type="button" className="crumina-button button--blue button--xxs button--uppercase-wide">Freelance</button>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="ui-card featured-vacancies">
												<div className="ui-card-content">
													<div className="vacancies-title-location">
														<a href="05_job_details.html" className="vacancies-title h6">Data Center Support Specialist Engineer</a>
														<div className="vacancies-location">
															<time className="published" datetime="2018-03-14 12:00:00">6 days ago</time>
															Melbourne, Australia
														</div>
													</div>
													<a href="05_job_details.html" className="logo-company logo-company--thumb">
														<img className="logo" src="./img/client8.png" title="company"/>
														<img src="./img/company1.jpg" title="company"/>
														<div className="overlay"></div>
													</a>
												</div>
												<div className="ui-card-footer">
													<a href="#" className="link--uppercase-wide fs-12">IT Contractor</a>
													<button type="button" className="crumina-button button--blue button--xxs button--uppercase-wide">Freelance</button>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>

						<div className="widget w-banner widget-sidebar">
							<div className="banner-header">
								Advertising
							</div>
							<div className="banner-content">
								<h4 className="widget-title">Download free Puzzler App for your mobile</h4>

								<div className="icon-market-wrap">
									<a href="#"><i className="puzzle-icon fab fa-apple"></i></a>

									<a href="#"><i className="puzzle-icon fab fa-google-play"></i></a>
								</div>

								<img src="./img/iphone1.png" title="phone"/>

							</div>
						</div>
					</aside>

				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<nav className="navigation">

						<a href="#" className="page-numbers btn-start">
							<i className="puzzle-icon fal fa-angle-double-left"></i>
						</a>

						<a href="#" className="page-numbers btn--prev">
							<i className="puzzle-icon fal fa-angle-left"></i>
						</a>

						<a href="#" className="page-numbers current"><span>1</span></a>
						<a href="#" className="page-numbers"><span>2</span></a>
						<a href="#" className="page-numbers"><span>3</span></a>
						<a href="#" className="page-numbers"><span>4</span></a>
						<a href="#" className="page-numbers"><span>5</span></a>
						<a href="#" className="page-numbers"><span>6</span></a>

						<a href="#" className="page-numbers btn--next">
							<i className="puzzle-icon fal fa-angle-right"></i>
						</a>

						<a href="#" className="page-numbers btn-end">
							<i className="puzzle-icon fal fa-angle-double-right"></i>
						</a>

						<span className="page-numbers all-pages">
							36 Pages
						</span>

					</nav>
				</div>
			</div>
		</div>
	</section>

	<section className="medium-padding120">
		<div className="container">
			<div className="row mb60">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<header className="crumina-module crumina-heading heading--h2 heading--with-decoration heading--inline mb-0">

						<h2 className="heading-title">A Few Words from Happy Candidates</h2>
						<div className="heading-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
					</header>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div className="crumina-module crumina-module-slider pagination-bottom-center slider--item-with-shadow">

						<div className="swiper-container" data-show-items="3" data-prev-next="1" data-space-between="40">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<blockquote className="quote--squared">
										<p>
											<i className="puzzle-icon quote fas fa-quote-left"></i>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.
										</p>

										<div className="quote-footer">
											<div className="author-block">
												<div className="avatar avatar--70">
													<img src="img/author6.jpg" alt="avatar"/>
												</div>
												<div className="author-content">
													<h6 className="author-name">Philip Demarco</h6>
													<div className="author-prof">Copywriter</div>
												</div>
											</div>
										</div>
									</blockquote>
								</div>
								<div className="swiper-slide">
									<blockquote className="quote--squared">
										<p>
											<i className="puzzle-icon quote fas fa-quote-left"></i>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.
										</p>

										<div className="quote-footer">
											<div className="author-block">
												<div className="avatar avatar--70">
													<img src="img/author1.jpg" alt="avatar"/>
												</div>
												<div className="author-content">
													<h6 className="author-name">Angelina Johnson</h6>
													<div className="author-prof">Graphic Designer</div>
												</div>
											</div>
										</div>
									</blockquote>
								</div>
								<div className="swiper-slide">
									<blockquote className="quote--squared">
										<p>
											<i className="puzzle-icon quote fas fa-quote-left"></i>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.
										</p>

										<div className="quote-footer">
											<div className="author-block">
												<div className="avatar avatar--70">
													<img src="img/author7.jpg" alt="avatar"/>
												</div>
												<div className="author-content">
													<h6 className="author-name">Peter Spenser</h6>
													<div className="author-prof">Marketing Director</div>
												</div>
											</div>
										</div>
									</blockquote>
								</div>
								<div className="swiper-slide">
									<blockquote className="quote--squared">
										<p>
											<i className="puzzle-icon quote fas fa-quote-left"></i>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.
										</p>

										<div className="quote-footer">
											<div className="author-block">
												<div className="avatar avatar--70">
													<img src="img/author6.jpg" alt="avatar"/>
												</div>
												<div className="author-content">
													<h6 className="author-name">Philip Demarco</h6>
													<div className="author-prof">Copywriter</div>
												</div>
											</div>
										</div>
									</blockquote>
								</div>
								<div className="swiper-slide">
									<blockquote className="quote--squared">
										<p>
											<i className="puzzle-icon quote fas fa-quote-left"></i>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.
										</p>

										<div className="quote-footer">
											<div className="author-block">
												<div className="avatar avatar--70">
													<img src="img/author1.jpg" alt="avatar"/>
												</div>
												<div className="author-content">
													<h6 className="author-name">Angelina Johnson</h6>
													<div className="author-prof">Graphic Designer</div>
												</div>
											</div>
										</div>
									</blockquote>
								</div>
								<div className="swiper-slide">
									<blockquote className="quote--squared">
										<p>
											<i className="puzzle-icon quote fas fa-quote-left"></i>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.
										</p>

										<div className="quote-footer">
											<div className="author-block">
												<div className="avatar avatar--70">
													<img src="img/author7.jpg" alt="avatar"/>
												</div>
												<div className="author-content">
													<h6 className="author-name">Peter Spenser</h6>
													<div className="author-prof">Marketing Director</div>
												</div>
											</div>
										</div>
									</blockquote>
								</div>
								<div className="swiper-slide">
									<blockquote className="quote--squared">
										<p>
											<i className="puzzle-icon quote fas fa-quote-left"></i>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua in voluptate velit esse cillum.
										</p>

										<div className="quote-footer">
											<div className="author-block">
												<div className="avatar avatar--70">
													<img src="img/author6.jpg" alt="avatar"/>
												</div>
												<div className="author-content">
													<h6 className="author-name">Philip Demarco</h6>
													<div className="author-prof">Copywriter</div>
												</div>
											</div>
										</div>
									</blockquote>
								</div>
							</div>
						</div>

					
						<div className="swiper-pagination"></div>
					</div>
				</div>

			</div>
		</div>
	</section>


	<section className="medium-padding120 bg-accent-primary">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 mb-4 mb-lg-0">
					<header className="crumina-module crumina-heading heading--h2 heading--with-decoration heading--inline decoration--dark-theme mb-0">

						<h2 className="heading-title">Get to start the Puzzler right now!</h2>
						<div className="heading-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
					</header>
				</div>

				<div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
					<button type="button" className="crumina-button button--dark button--l button--with-icon button--icon-left" data-toggle="modal" data-target="#signupModal"><i className="puzzle-icon fas fa-user-tie"></i>Sign Up</button>
				</div>

			</div>
		</div>
	</section>

   </div>
    );
};

export default Explore;