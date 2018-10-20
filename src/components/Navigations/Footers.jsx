import React from 'react';

const Footers = () => {
  return (

    <footer className="site-footer">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-12 text-center">
            <p>
              <a href="https://www.facebook.com/shuvaraya" className="social-item"><span className="icon-facebook2" /></a>
              <a href="https://twitter.com/SumitGautam_SE" className="social-item"><span className="icon-twitter" /></a>
              <a href="https://www.instagram.com/sumitgak/" className="social-item"><span className="icon-instagram2" /></a>
              <a href="https://www.linkedin.com/in/sumit-gautam-202b07a5/" className="social-item"><span className="icon-linkedin2" /></a>
              <a href="https://www.youtube.com/channel/UCUd2w75ooog7XER0he8ENqw?view_as=subscriber" className="social-item"><span className="icon-youtube" /></a>
            </p>
          </div>
        </div>
        <div className="row">
          <p className="col-12 text-center">
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script>
            All rights reserved | This template is made with
            <i className="icon-heart" aria-hidden="true" />
            by
            <a href="https://colorlib.com" className="text-primary">Colorlib</a>
          </p>
        </div>
      </div>
      <script src="js/vendor/jquery.min.js" />
      <script src="js/vendor/popper.min.js" />
      <script src="js/vendor/bootstrap.min.js" />

      <script src="js/vendor/jquery.easing.1.3.js" />
      <script src="js/vendor/jquery.stellar.min.js" />
      <script src="js/vendor/jquery.waypoints.min.js" />

      <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" />
      <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js" />
      <script src="js/custom.js" />

      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false" />
      <script src="js/google-map.js" />

    </footer>
  );
};


export default Footers;
