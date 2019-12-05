import React from 'react';

const ClientTestimonials = (props) => {
  const { posts } = { ...props };
  const renderPosts = (data) => {
    return data.map((value) => {
      return (
        <div className="col-md-6" key={value.id}>
          <div className="block-47 d-flex mb-5" key={value.albumId}>
            <div className="block-47-image">
              <img src="https://via.placeholder.com/600/92c952" alt="placeholder" className="img-fluid" />
            </div>
            <blockquote className="block-47-quote">
              <p>
                <span key="ldquo">&ldquo;</span>
                { value.body }
                <span key="rdquo">&rdquo;</span>
              </p>
              <cite className="block-47-quote-author">
                <span key="mdash">&mdash;</span>
                Ethan McCown, CEO
                <a href="#ceo">XYZ Inc.</a>
              </cite>
            </blockquote>
          </div>
        </div>
      );
    });
  };

  return (
    <section className="site-section bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="section-heading text-center">
              <h2>
                Client
                <strong>Testimonial</strong>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {
            renderPosts(posts)
          }
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
