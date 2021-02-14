import React from 'react';
import Category from './Category';

const Project = ({items}) => {
  return (
  <div class="row">
      {items.map((projectItem)=>{
        const {id, img, title, desc, category, demo, code, tools} = projectItem;
        return (
          <div className="card m-4" style={{maxWidth:"600px"}}>
            <div className="row g-0">
              <div className="col-md-5">
                <img src={img} className="w-100 h-100"/>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title"><b>{title}</b></h5>
                  <p className="card-text">{desc}</p>
                  <p className="card-text mt-2"><small>Build with: {tools}</small></p>
                  <button type="button" class="btn btn-outline-dark btn-sm disabled m-1">{category}</button>
                  <a href={code}><button type="button" class="btn btn-outline-dark btn-sm m-1">code</button></a>
                  <a href={demo}><button type="button" class="btn btn-outline-dark btn-sm m-1">demo</button></a>              </div>
              </div>
            </div>
          </div>
        );
      })}
  </div>
  );
};

export default Project;