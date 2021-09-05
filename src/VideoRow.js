import React from 'react'
import "./VideoRow.css"


function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videoRow">
            <img src={image} />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <div className="videoRow__headline">
                    <p>
                        {channel} - <span className="videoRow__subs">
                        <span className="videoRow__subsNumber">{subs}</span> subscribers</span> - {views} views - {timestamp}
                    </p>
                    <p className="videoRow__description">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoRow
