import React from 'react'
import './TitleSub.css'

const TitleSub = ( { title, subtitle } ) => {
  return (
    <div className='title-sub'>
      <div className="title-titlesub">
        {title}
      </div>
      <div className="sub-titlesub">
        {subtitle}
      </div>
    </div>
  )
}

export default TitleSub
