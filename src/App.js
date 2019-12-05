import React, { Component } from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store';
import './css/animate.css';
import './css/flexslider.css';
import './fonts/icomoon/style.css';
import './css/bootstrap.css';
import './css/style.css';
import NavBar from './components/Navigations/NavBar';
import Footers from './components/Navigations/Footers';
import Bio from './components/Bio/Bio';
import ClientTestimonials from './components/Testimonials/ClientTestimonials';
import Portfolio from './components/Portfoli/Portfolio';
import Technologies from './components/Technologies/Technologies';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchPosts = this.fetchPosts.bind(this);
    // this.getPosts = this.getPosts.bind(this);
    this.state = {
      posts: [],
    };
  }

  componentWillMount() {
    this.fetchPosts();
  }

  getPosts = (response) => {
    this.setState({
      posts: response,
    });
  }

  fetchPosts = () => {
    let data = [];
    axios.get('http://jsonplaceholder.typicode.com/posts?_page=1&_limit=6')
      .then((response) => {
        data = [...response.data];
        this.getPosts(data);
      });
  };


  render() {
    const { posts } = { ...this.state };
    return (
      <Provider store={store}>
        <div>
          <NavBar />
          <section className="site-hero" id="section-home" data-stellar-background-ratio="0.5">
            <div className="fullscreen-video">
              <video autoPlay loop muted playsInline>
                <source src={require('./videos/webvideo.mp4')} type="video/mp4" />
              </video>
            </div>
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
                      April 2013 - April 2018
                    </span>
                    <h3>Bachelor In Computer Science</h3>
                    <p>
                      I completed My Bachelor in Computer Science from Tribhuvan University
                      with specializations in Software Engineering and Artificial Intelligence.
                    </p>
                    <span className="school">Tribhuvan University | TU</span>
                  </div>

                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      April 2011 - March 2013.
                    </span>
                    <h3>Higher Secondary Education</h3>
                    <p>
                      I completed my Higher Secondary Education with Mathematics
                      and Physics as major.
                    </p>
                    <span className="school">Higher Secondary Education Board | HSEB</span>
                  </div>

                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      March 2011
                    </span>
                    <h3>School Leaving Certificate</h3>
                    <p>
                      I completed my Secondary Education from Nyatapola Secondary School.
                    </p>
                    <span className="school">Nepal Government</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2 className="mb-5">Experience</h2>
                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      Feburary 2017 - July 2017
                    </span>
                    <h3>Software Engineer | SYS INC</h3>
                    <p>
                      I worked at company named SYS INC. which was an out-sourcing company.
                      During my time there I worked on designing and developing mulitple Java Web
                      services which would later auto generation Ruby on Rails API. I also worked
                      with multiple databases such as Casandra, MongoDB, Postgresql to name a few.
                      Had some experience with Machine Learning and Deep Learning Technologies such
                      as TensorFlow, Apache Spark, Hadoop.
                    </p>
                    <span className="school">SYS INC</span>
                  </div>
                  <div className="resume-item mb-4">
                    <span className="date">
                      <span className="icon-calendar" />
                      August 2017 - August 2018
                    </span>
                    <h3>Software Engineer | Codyssey Web Nepal</h3>
                    <p>
                      At Codyssey Web Nepal I worked on Ruby on Rails as backend technology and
                      ReactJs as the frontend technology.About 1 year duration of working there as a
                      Software Engieer made me a better person and a cunning Software Developer.
                      I got opportunities to get used to with high rated jobs such as DevOps, QA,
                      System Analyst and a Web Designer.
                    </p>
                    <span className="school">Codyssey Web Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Technologies />
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
          <Portfolio />
          <ClientTestimonials posts={posts} />
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
        </div>
      </Provider>
    );
  }
}

export default App;
