import React from 'react'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return (
    <div>
      <SidebarRow Icon={HomeIcon} title='Home'/>
      <SidebarRow Icon={WhatshotIcon} title='Trending'/>
      <SidebarRow Icon={SubscriptionsIcon} title='Subscription'/>
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title='Library'/>
      <SidebarRow Icon={HistoryIcon} title='History'/>
      <SidebarRow Icon={OndemandVideoIcon} title='Your Video'/>
      <SidebarRow Icon={WatchLaterIcon} title='Watch Later'/>
      <SidebarRow Icon={ThumbUpIcon} title='Liked Video'/>
      <SidebarRow Icon={ExpandMoreIcon} title='Show more'/>

    </div>
  )
}

export default Sidebar
