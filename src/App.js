import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './css/animate.css';
import './css/flexslider.css';
import './fonts/icomoon/style.css';
import './css/bootstrap.css';
import './css/style.css';
import Headers from './components/Navigations/Headers';
import NavBar from './components/Navigations/NavBar';
import Footers from './components/Navigations/Footers';
import Bio from './components/Bio/Bio';
import ClientTestimonials from './components/Testimonials/ClientTestimonials';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Headers />
        <body data-spy="scroll" data-target="#pb-navbar" data-offset="200">
          <NavBar />

          <section className="site-hero" id="section-home" data-stellar-background-ratio="0.5">
            <video autoPlay loop muted playsInline className="fullscreen-video">
              <source src={require('./videos/webvideo.mp4')} type="video/mp4" />
            </video>
            <div className="container">
              <div className="row intro-text align-items-center justify-content-center">
                <div className="col-md-10 text-center">
                  <h1 className="site-heading site-animate">
                    Howdy, I am
                    <strong>Sumit Gautam</strong>
                  </h1>
                  <p className="lead site-subheading mb-4 site-animate">A Passionate Software Engineer with pleathora of expertise on different subject matters ROR, Javascript, Java, Go, DevOps ...</p>
                  <p><a href="#section-about" className="smoothscroll btn btn-primary px-4 py-3">More On Me</a></p>
                </div>
              </div>
            </div>
          </section>
          <Bio />
          <ClientTestimonials />
          <section className="site-section border-top pb-0" id="section-services">
            <div className="container">
              <div className="row mb-4">
                <div className="col-md-12">
                  <div className="section-heading text-center">
                    <h2><strong>Technologies</strong></h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4 text-center mb-5">
                  <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                    <span className="icon">
                      <span className="icon-html-five2" />
                    </span>
                    <h3 className="mb-4">HTML-5</h3>
                    <p>
                      Far far away, behind the word mountains,
                      far from the countries Vokalia and Consonantia,
                      there live the blind texts.
                      Separated they live in Bookmarksgrove right at the coast of the Semantics,
                      a large language ocean.
                    </p>
                    <p>
                      <a href="#learn-more" className="site-link">
                          Learn More
                        <i className="icon-chevron-right" />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5">
                  <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                    <span className="icon">
                      <span className="icon-css3" />
                    </span>
                    <h3 className="mb-4">CSS3</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                      It is a paradisematic country,
                      in which roasted parts of sentences fly into your mouth.
                    </p>
                    <p>
                      <a href="#learn-more" className="site-link">
                          Learn More
                        <i className="icon-chevron-right" />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5">
                  <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                    <span className="icon">
                      <span className="icon-toolbox" />
                    </span>
                    <h3 className="mb-4">DevOps</h3>
                    <p>
                      Even the all-powerful Pointing has no control about
                      the blind texts it is an almost unorthographic life
                      One day however a small line of blind text by the name of
                      Lorem Ipsum decided to leave for the far World of Grammar.
                    </p>
                    <p>
                      <a href="#learn-more" className="site-link">
                          Learn More
                        <i className="icon-chevron-right" />
                      </a>
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 text-center mb-5">
                  <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                    <span className="icon">
                      <span className="icon-adjustments" />
                    </span>
                    <h3 className="mb-4">Software Optimization</h3>
                    <p>
                      Far far away, behind the word mountains,
                      far from the countries Vokalia and Consonantia,
                      there live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics,
                      a large language ocean.
                    </p>
                    <p>
                      <a href="#learn-more" className="site-link">
                        Learn More
                        <i className="icon-chevron-right" />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5">
                  <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                    <span className="icon">
                      <span className="icon-wallet2" />
                    </span>
                    <h3 className="mb-4">Increase Revenue</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia.
                      It is a paradisematic country,
                      in which roasted parts of sentences fly into your mouth.
                    </p>
                    <p>
                      <a href="#site-link" className="site-link">
                        Learn More
                        <i className="icon-chevron-right" />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 text-center mb-5">
                  <div className="site-service-item site-animate" data-animate-effect="fadeIn">
                    <span className="icon">
                      <span className="icon-lightbulb" />
                    </span>
                    <h3 className="mb-4">Intuitive Idea</h3>
                    <p>
                      Even the all-powerful Pointing has no
                      control about the blind texts it is an almost
                      unorthographic life One day however a small line
                      of blind text by the name of Lorem Ipsum decided
                      to leave for the far World of Grammar.
                    </p>
                    <p>
                      <a href="#site-link" className="site-link">
                        Learn More
                        <i className="icon-chevron-right" />
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>


          <section className="site-section" id="section-features">
            <div className="container">
              <div className="row site-section">
                <div className="col-md-8">
                  <p><img src={require('./images/laptop_1.jpg')} alt="" className="img-fluid" /></p>
                </div>
                <div className="col-md-4">
                  <h3 className="mb-3">Big Benefits for Small Business</h3>
                  <p>
                    Even the all-powerful Pointing has no control
                    about the blind texts it is an almost unorthographic
                    life One day however a small line of blind text by the name of
                    Lorem Ipsum decided to leave for the far World of Grammar.
                  </p>

                  <ul className="site-list">
                    <li className="site-check">Pointing has no control</li>
                    <li className="site-check">A small river named Duden flows</li>
                    <li className="site-check">Roasted parts of sentences fly into your mouth</li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-8 order-md-2">
                  <p><img src={require('./images/laptop_1.jpg')} alt="" className="img-fluid" /></p>
                </div>
                <div className="col-md-4 order-md-1">
                  <h3 className="mb-3">All in One Place</h3>
                  <p>
                    Even the all-powerful Pointing has no control
                    about the blind texts it is an almost unorthographic life
                    One day however a small line of blind text by the name of
                    Lorem Ipsum decided to leave for the far World of Grammar.
                  </p>

                  <ul className="site-list">
                    <li className="site-check">Pointing has no control</li>
                    <li className="site-check">A small river named Duden flows</li>
                    <li className="site-check">Roasted parts of sentences fly into your mouth</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="site-section" id="section-portfolio">
            <div className="container">
              <div className="row">
                <div className="section-heading text-center col-md-12">
                  <h2>
                    Featured
                    <strong>Portfolio</strong>
                  </h2>
                </div>
              </div>
              <div className="filters">
                <ul>
                  <li className="active" data-filter="*">All</li>
                  <li data-filter=".packaging">Packaging</li>
                  <li data-filter=".mockup">Mockup</li>
                  <li data-filter=".typography">Typography</li>
                  <li data-filter=".photography">Photography</li>
                </ul>
              </div>

              <div className="filters-content">
                <div className="row grid">
                  <div className="single-portfolio col-sm-4 all mockup">
                    <div className="relative">
                      <div className="thumb">
                        <div className="overlay overlay-bg" />
                        <img className="image img-fluid" src={require('./images/p1.jpg')} alt="" />
                      </div>
                      <a href="images/p1.jpg" className="img-pop-up">
                        <div className="middle">
                          <div className="text align-self-center d-flex"><img src={require('./images/preview.png')} alt="" /></div>
                        </div>
                      </a>
                    </div>
                    <div className="p-inner">
                      <h4>Square Box Mockup</h4>
                      <div className="cat">Mockup</div>
                    </div>
                  </div>
                  <div className="single-portfolio col-sm-4 all mockup">
                    <div className="relative">
                      <div className="thumb">
                        <div className="overlay overlay-bg" />
                        <img className="image img-fluid" src={require('./images/p2.jpg')} alt="" />
                      </div>
                      <a href="images/p2.jpg" className="img-pop-up">
                        <div className="middle">
                          <div className="text align-self-center d-flex"><img src={require('./images/preview.png')} alt="" /></div>
                        </div>
                      </a>
                    </div>
                    <div className="p-inner">
                      <h4>Product Box Package Mockup</h4>
                      <div className="cat">Mockup</div>
                    </div>
                  </div>
                  <div className="single-portfolio col-sm-4 all packaging">
                    <div className="relative">
                      <div className="thumb">
                        <div className="overlay overlay-bg" />
                        <img className="image img-fluid" src={require('./images/p3.jpg')} alt="" />
                      </div>
                      <a href="images/p3.jpg" className="img-pop-up">
                        <div className="middle">
                          <div className="text align-self-center d-flex"><img src={require('./images/preview.png')} alt="" /></div>
                        </div>
                      </a>

                    </div>
                    <div className="p-inner">
                      <h4>Creative Package Design</h4>
                      <div className="cat">Packaging</div>
                    </div>
                  </div>
                  <div className="single-portfolio col-sm-4 all packaging">
                    <div className="relative">
                      <div className="thumb">
                        <div className="overlay overlay-bg" />
                        <img className="image img-fluid" src={require('./images/p4.jpg')} alt="" />
                      </div>
                      <a href="images/p4.jpg" className="img-pop-up">
                        <div className="middle">
                          <div className="text align-self-center d-flex"><img src={require('./images/preview.png')} alt="" /></div>
                        </div>
                      </a>
                    </div>
                    <div className="p-inner">
                      <h4>Packaging Brand</h4>
                      <div className="cat">Packaging</div>
                    </div>
                  </div>
                  <div className="single-portfolio col-sm-4 all typography">
                    <div className="relative">
                      <div className="thumb">
                        <div className="overlay overlay-bg" />
                        <img className="image img-fluid" src={require('./images/p5.jpg')} alt="" />
                      </div>
                      <a href="images/p5.jpg" className="img-pop-up">
                        <div className="middle">
                          <div className="text align-self-center d-flex"><img src={require('./images/preview.png')} alt="" /></div>
                        </div>
                      </a>
                    </div>
                    <div className="p-inner">
                      <h4>Isometric 3D Extrusion</h4>
                      <div className="cat">Typography</div>
                    </div>
                  </div>
                  <div className="single-portfolio col-sm-4 all photography">
                    <div className="relative">
                      <div className="thumb">
                        <div className="overlay overlay-bg" />
                        <img className="image img-fluid" src={require('./images/p6.jpg')} alt="" />
                      </div>
                      <a href="images/p6.jpg" className="img-pop-up">
                        <div className="middle">
                          <div className="text align-self-center d-flex"><img src={require('./images/preview.png')} alt="" /></div>
                        </div>
                      </a>
                    </div>
                    <div className="p-inner">
                      <h4>White Space Photography</h4>
                      <div className="cat">photography</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section bg-light " id="section-resume">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="section-heading text-center">
                    <h2>
                      My
                      <strong>Resume</strong>
                    </h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2 className="mb-5">Education</h2>
                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      March 2013 - Present
                    </span>
                    <h3>Masteral in Information Technology</h3>
                    <p>
                      Even the all-powerful Pointing has no control
                      about the blind texts it is an almost unorthographic.
                    </p>
                    <span className="school">New York University</span>
                  </div>

                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      March 2013 - Present Deacember.
                    </span>
                    <h3>Masteral in Information Technology</h3>
                    <p>
                      Even the all-powerful Pointing has no control about
                      the blind texts it is an almost unorthographic.
                    </p>
                    <span className="school">New York University</span>
                  </div>

                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      March 2013 - Present
                    </span>
                    <h3>Masteral in Information Technology</h3>
                    <p>
                      Even the all-powerful Pointing has no control
                      about the blind texts it is an almost unorthographic.
                    </p>
                    <span className="school">New York University</span>
                  </div>

                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      March 2013 - Present Deacember.
                    </span>
                    <h3>Masteral in Information Technology</h3>
                    <p>
                      Even the all-powerful Pointing has no control about
                      the blind texts it is an almost unorthographic.
                    </p>
                    <span className="school">New York University</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2 className="mb-5">Experience</h2>
                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      March 2013 - Present
                    </span>
                    <h3>Lead Product Designer</h3>
                    <p>
                      Even the all-powerful Pointing has no control about
                      the blind texts it is an almost unorthographic.
                    </p>
                    <span className="school">Github</span>
                  </div>
                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      March 2013 - Present
                    </span>
                    <h3>Lead Product Designer</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                    <span className="school">Facebook</span>
                  </div>
                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      March 2013 - Present
                    </span>
                    <h3>Lead Product Designer</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                    <span className="school">Twitter</span>
                  </div>
                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      March 2013 - Present
                    </span>
                    <h3>Lead Product Designer</h3>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic.
                    </p>
                    <span className="school">Shopify</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="site-section" id="section-blog">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="section-heading text-center">
                    <h2>
                      Blog on
                      <strong>Medium</strong>
                    </h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="blog-entry">
                    <a href="#image">
                      <img src={require('./images/post_1.jpg')} alt="placeholder" className="img-fluid" />
                    </a>
                    <div className="blog-entry-text">
                      <h3>
                        <a href="#production-designer">
                          Creative Product Designer From Facebook
                        </a>
                      </h3>
                      <p className="mb-4">
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic.
                      </p>
                      <div className="meta">
                        <a href="#meta">
                          <span className="icon-calendar" />
                          Aug 7, 2018
                        </a>
                        <a href="#meta">
                          <span className="icon-bubble" />
                          5 Comments
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="blog-entry">
                    <a href="#image">
                      <img src={require('./images/post_2.jpg')} alt="placeholder" className="img-fluid" />
                    </a>
                    <div className="blog-entry-text">
                      <h3>
                        <a href="#facebook">
                          Creative Product Designer From Facebook
                        </a>
                      </h3>
                      <p className="mb-4">
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic.
                      </p>

                      <div className="meta">
                        <a href="#meta">
                          <span className="icon-calendar" />
                          Aug 7, 2018
                        </a>
                        <a href="#meta">
                          <span className="icon-bubble" />
                          5 Comments
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-lg-4 mb-4">
                  <div className="blog-entry">
                    <a href="#image">
                      <img src={require('./images/post_3.jpg')} alt="placeholder" className="img-fluid" />
                    </a>
                    <div className="blog-entry-text">
                      <h3>
                        <a href="#blog">
                          Creative Product Designer From Facebook
                        </a>
                      </h3>
                      <p className="mb-4">
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic.
                      </p>
                      <div className="meta">
                        <a href="#meta">
                          <span className="icon-calendar" />
                          Aug 7, 2018
                        </a>
                        <a href="#meta">
                          <span className="icon-bubble" />
                          5 Comments
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="site-section bg-light" id="section-contact">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="section-heading text-center">
                    <h2>
                      Wanna
                      <strong>Start Work</strong>
                      With Me?
                    </h2>
                  </div>
                </div>

                <div className="col-md-7 mb-5 mb-md-0">
                  <form action="" className="site-form">
                    <h3 className="mb-5">Get In Touch</h3>
                    <div className="form-group">
                      <input type="text" className="form-control px-3 py-4" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control px-3 py-4" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control px-3 py-4" placeholder="Your Phone" />
                    </div>
                    <div className="form-group mb-5">
                      <textarea className="form-control px-3 py-4" cols="30" rows="10" placeholder="Write a Message" />
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary  px-4 py-3" value="Send Message" />
                    </div>
                  </form>
                </div>
                <div className="col-md-5 pl-md-5">
                  <h3 className="mb-5">My Contact Details</h3>
                  <ul className="site-contact-details">
                    <li>
                      <span className="text-uppercase">Email</span>
                      sghost33@gmail.com
                    </li>
                    <li>
                      <span className="text-uppercase">Phone</span>
                      +977 9843645247
                    </li>
                    <li>
                      <span className="text-uppercase">Address</span>
                      Kamalbinayk Bhaktapur, Nepal
                      <br />
                      Sangam Chowk
                      <br />
                      Changunarayan Muncipality, Ward 8
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <Footers />
        </body>
      </div>
    </Provider>
  );
};

export default App;
