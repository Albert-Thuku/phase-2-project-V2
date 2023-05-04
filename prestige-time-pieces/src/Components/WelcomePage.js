import React from 'react';


function WelcomePage({handleClick}) {

  return (
    <div className="welcome-page">
          <h1>Welcome to Prestige Time Pieces</h1>
          <p>Explore our collection of watches and find your perfect timepiece.</p>
          <ul>
            <li>Over 1000 different models to choose from</li>
            <li>Free shipping on all orders</li>
            <li>24/7 customer support</li>
          </ul>
          <button onClick={handleClick}>Shop Now</button>
    </div>
  );
}
export default WelcomePage;

