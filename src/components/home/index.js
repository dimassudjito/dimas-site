import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Hello, I'm Dimas</h1>
          <p>I'm a software engineering student at the University of Alberta. I love arguing about real-world problems and (sometimes) building something to solve them. I'm currently interested in web development and machine learning.</p>
        </div>
        <div className="col">
          <img src="./assets/profile.jpg" className="rounded-circle w-75"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
