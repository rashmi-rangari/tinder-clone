import React from 'react';
import './Header.css'; 
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import tinderLogo from './tinder_logo.png';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon font-size="large" className="header_icon" />
            </IconButton>
           <img src={tinderLogo} alt="tinder_logo" className="header_logo"></img> 
           <IconButton>
           <ForumIcon font-size="large" className="header_icon"/>
           </IconButton>
           
            
        </div>
    )
}

export default Header;

