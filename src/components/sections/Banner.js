import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
   <>
   <div className="container-fluid py-3 mb-4 d-flex justify-content-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1124&amp;q=100')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div className="p-5 mb-4 col-xxl-7 col-lg-8 col-12" style={{ backdropFilter: "blur(6px) saturate(102%)", WebkitBackdropFilter: "blur(6px) saturate(102%)", backgroundColor: "rgba(255, 255, 255, 0.45)", borderRadius: "12px", border: "1px solid rgba(209, 213, 219, 0.3)" }}>
          <div className="lc-block">
            <h2 className="fw-bolder display-3">Custom jumbotron</h2>
          </div>
          <div className="lc-block col-md-8">
            <p className="lead">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          </div>
          <div className="lc-block">
            <a className="btn btn-dark" href="#" role="button">Click me, I'm a button</a>
          </div>
        </div>
      </div>
   </>
  )
}

export default Banner;
