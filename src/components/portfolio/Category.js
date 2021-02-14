import React from 'react';

const Category = ({categories, filterItems}) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="btn-group" role="group">
          {categories.map((category, index)=>{
            return (
                <button className="btn btn-outline-dark" type="button" key={index} onClick={()=>{
                filterItems(category)
                }}>
                  {category}
                </button>
            );
          })}
      </div>
    </div>
  );
};

export default Category;