import React, {useState} from 'react';
import items from '../../data/portfolioData';

import Category from './Category';
import Project from './Project';

const Portfolio = () => {
  const [projectItems, setProjetItems] = useState(items);
  const [categories, setCategories] = useState(["All", "Original", "Forgery"]);
  
  const filterItems = (category)=>{
    if (category === "All"){
      setProjetItems(items);
      return;
    }
    const newItems = items.filter((item)=>item.category === category)
    setProjetItems(newItems)
  }

  return (
    <div>
      <h1>Portfolio</h1>
      <Category categories={categories} filterItems={filterItems}/>
      <Project items={projectItems}/>
    </div>
  );
};

export default Portfolio;
