import React, {useState} from 'react';
import items from '../../data/activityData';

import Experience from './Experience';

const Activity = () => {
    const [experienceItems, setExperienceItems] = useState(items);
    const recentExperience = experienceItems.filter(item => (item.category === "recent"));
    const pastExperience = experienceItems.filter(item => (item.category === "past"));

    const [showPast, setShowPast] = useState(false);

    return (
        <div className="container">
            <h1 className="d-flex justify-content-center my-5">Recent Activities</h1>
            <Experience items={recentExperience}/>
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-dark my-5" onClick={()=>setShowPast(!showPast)}>
                    {!showPast && "See Past Activities" || "Hide Past Activities"}
                </button>
            </div>
            {showPast && (
            <div>
                <h1 className="d-flex justify-content-center my-3">Past Activities</h1>
                <Experience items={pastExperience}/>
            </div>
            )}
        </div>
  )
}

export default Activity;
