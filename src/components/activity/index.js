import React, { useState } from 'react'
import items from '../../data/activityData'

import Experience from './Experience'

const Activity = () => {
  const [experienceItems, setExperienceItems] = useState(items)
  const recentExperience = experienceItems.filter(
    (item) => item.category === 'recent'
  )
  const pastExperience = experienceItems.filter(
    (item) => item.category === 'past'
  )

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">Recent Activities</h1>
      <Experience items={recentExperience} />
      <div>
        <h1 className="d-flex justify-content-center">Past Activities</h1>
        <Experience items={pastExperience} />
      </div>
    </div>
  )
}

export default Activity
