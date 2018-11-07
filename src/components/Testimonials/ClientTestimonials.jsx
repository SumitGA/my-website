import React from 'react';

const ClientTestimonials = (props) => {
  const { posts } = { ...props };
  const renderPosts = (data) => {
    return data.map((value) => {
      return (
        <div className="col-md-6" key={value.id}>
          <div className="block-47 d-flex mb-5" key={value.albumId}>
            <div className="block-47-image">
              <img src={value.url} alt="placeholder" className="img-fluid" />
            </div>
            <blockquote className="block-47-quote">
              <p>

                <span key="ldquo">&ldquo;</span>
                Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia,
                there live the blind texts.
                Separated they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
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
