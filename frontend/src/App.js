import React from 'react'
import data from './data';

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
            {
                data.products.map((product)=>
                <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                  <img className="medium" src={product.image} alt={product.name}></img>
              </a>
              <div className="card-body">
                  <a href={`/product/${product._id}`}>
                      <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  </div>
              </div>
              <div className="price">€{product.price}</div>
              </div>)}     
      </div>
    </main>
    <footer className="row center">
        All rights reserved © Tech-@-Tack 2020
    </footer>
</div>
  );
}

export default App;
