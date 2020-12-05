import React from 'react'

function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div className="logo">
            <a href="index.html">Tech-@-Tack</a>
        </div>
        <div className="header-links">
            <a href="cart.html">Košarica 👜 </a>
            <a href="singin.html">Sign up/in 🖊 </a>
        </div>
          
    </header>
    <main className="main">
      <div className= "row center">
          <div className="card">
              <a href="product.html">
                  <img className="medium" src="./images/p1.jpg" alt="product"></img>
              </a>
              <div className="card-body">
                  <a href="product.html">
                      <h2>Wireless charging stand</h2>
                  </a>
                  <div className="rating">
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  </div>
              </div>
              <div className="price">€30</div>
          </div>
      </div>
    </main>
    <footer className="row center">
        All rights reserved © Tech-@-Tack 2020
    </footer>
</div>
  );
}

export default App;
