import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Avatar } from '@mui/material';

function Header() {
    return (
        <div className='sticky flex justify-between  top-0 bg-white p-2 '>

            <div className="left flex items-center space-x-3">
                <MenuIcon />
                <img src="https://cdn-icons-png.flaticon.com/512/733/733590.png?w=740&t=st=1687423466~exp=1687424066~hmac=58eecb9b9e9839263f38137ba81c32e0b45514def1a51ca6b7c55f02c570fdd2" alt="" className='h-10 w-10 object-contain'  />
            </div>

            <div className="center flex items-center space-x-3">
                <input type="text" className='border-2 w-96 h-10 border-black p-2' placeholder='Search' />
                <SearchIcon/>
            </div>

            <div className="right flex space-x-3 items-center">
                <AppsIcon/>
                <NotificationsIcon/>
                <VideoCallIcon/>
                <Avatar src='https://media.licdn.com/dms/image/D5603AQEpE0T8HjRJjg/profile-displayphoto-shrink_800_800/0/1672759643973?e=2147483647&v=beta&t=6lVPmHWmutMIfz9ZxiYgFZZTA3ZkiSuSh5Ava2VpHCw'/>
            </div>

        </div>
    )
}

export default Header
