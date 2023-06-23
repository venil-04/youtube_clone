import { Avatar } from '@mui/material'
import React from 'react'

function Videocard({image,channelimg,views,timestamp,title,channel}) {
  return (
    <div className='videocard '>
        <img src={image} alt="" className='w-80 m-2 rounded-xl' />
        <div className="card_info flex w-80 space-x-3">
            <Avatar src={channelimg} className='mt-1 ml-1 -z-10'/>
            <div className="video_text">
                <h4 className='font-bold text-sm'>{title}</h4>
                <p className='text-sm font-bold text-slate-800'>{channel}</p>
                <p className='text-xs'>
                    {views} Views | {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Videocard
