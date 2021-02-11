import React, {useState} from 'react';
import items from '../../data/portfolioData';

import Category from './Category';
import Project from './Project';

const Portfolio = () => {
  const [projectItems, setProjetItems] = useState(items);
  
  return (
    <div>
      <h1>Portfolio page</h1>
      <Category/>
      <Project items={projectItems}/>
    </div>
  );
};

export default Portfolio;
