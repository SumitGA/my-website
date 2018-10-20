import React from 'react';

const Bio = () => {
  return (
    <section className="site-section" id="section-about">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
            <img src={require('../../images/personal.jpg')} alt="placeholder" className="img-fluid" />
          </div>
          <div className="col-lg-5 pl-lg-5">
            <div className="section-heading">
              <h2>
                About
                <strong>Me</strong>
              </h2>
            </div>
            <p className="mb-5">Experienced JAVA and Ruby on Rails Developer with a demonstrated history of working in Web Programming and software development. Strong engineering professional with a Bsc. CSIT focused in Computer Science and Information Technology from Orchid International College.</p>
            <p className="mb-5  ">I spend most of my time leaning about new technologies related to software development. I love music and outdoor sports which is what I am doing when I keep my keyboard aside.</p>
            <p>
              <a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
              <a href="#sumit" className="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
            </p>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-md-3 mb-3">
            <div className="section-heading">
              <h2>
                My
                <strong>Skills</strong>
              </h2>
            </div>
          </div>
          <div className="col-md-9">
            <div className="skill">
              <h3>Design</h3>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                  <span>85%</span>
                </div>
              </div>
            </div>

            <div className="skill">
              <h3>HTML5</h3>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '98%' }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                  <span>98%</span>
                </div>
              </div>
            </div>

            <div className="skill">
              <h3>CSS3</h3>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '97%' }} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">
                  <span>97%</span>
                </div>
              </div>
            </div>

            <div className="skill">
              <h3>WordPress</h3>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '88%' }} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">
                  <span>88%</span>
                </div>
              </div>
            </div>

            <div className="skill">
              <h3>Bootstrap</h3>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: '92%' }} aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
                  <span>92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
