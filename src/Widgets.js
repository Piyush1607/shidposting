import React from 'react'
import './Widgets.css'
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
const Widgets = () => {
  const newsArticle =(heading,subTitle)=>(
    <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subTitle}</p>
        </div>
    </div>
    )

  return (
    <div className ="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle('Bihari trolled','Lmao dead NGL , NO CAP , FYI , COPE SEETH L W RATIO')}
        {newsArticle('Bihari trolled','Lmao dead NGL , NO CAP , FYI , COPE SEETH L W RATIO')}
        {newsArticle('Bihari trolled','Lmao dead NGL , NO CAP , FYI , COPE SEETH L W RATIO')}
        {newsArticle('Bihari trolled','Lmao dead NGL , NO CAP , FYI , COPE SEETH L W RATIO')}
        {newsArticle('Bihari trolled','Lmao dead NGL , NO CAP , FYI , COPE SEETH L W RATIO')}
        {newsArticle('Bihari trolled','Lmao dead NGL , NO CAP , FYI , COPE SEETH L W RATIO')}
        {newsArticle('Bihari trolled','Lmao dead NGL , NO CAP , FYI , COPE SEETH L W RATIO')}
    </div>

  )
}

export default Widgets