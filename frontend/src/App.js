import React from 'react'

function App() {
  return (
    <div class="grid-container">
    <header class="row">
        <div class="logo">
            <a href="index.html">Tech-@-Tack</a>
        </div>
        <div class="header-links">
            <a href="cart.html">Košarica 👜 </a>
            <a href="singin.html">Sign up/in 🖊 </a>
        </div>
          
    </header>
    <main class="main">
      <div class= "row center">
          <div class="card">
              <a href="product.html">
                  <img class="medium" src="./images/p1.jpg" alt="product"></img>
              </a>
              <div class="card-body">
                  <a href="product.html">
                      <h2>Wireless charging stand</h2>
                  </a>
                  <div class="rating">
                  <span> <i class="fa fa-star"></i> </span>
                  <span> <i class="fa fa-star"></i> </span>
                  <span> <i class="fa fa-star"></i> </span>
                  <span> <i class="fa fa-star"></i> </span>
                  <span> <i class="fa fa-star"></i> </span>
                  </div>
              </div>
              <div class="price">€30</div>
          </div>
      </div>
    </main>
    <footer class="row center">
        All rights reserved © Tech-@-Tack 2020
    </footer>
</div>
  );
}

export default App;
