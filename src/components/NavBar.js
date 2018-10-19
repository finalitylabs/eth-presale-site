import React, { Component } from 'react';

import logo from '../assets/FL_Logo_Horizontal.svg';

class NavBar extends Component {
    render() {
        return (
            <div id='navbar'>
                <img src={logo} alt='Finality Labs logo' />
                <ul>
                    <li><a href='#synopsis'>Synopsis</a></li>
                    <li><a href='#portal-main'>Portal</a></li>
                    <li><a href='#features'>Game Features</a></li>
                    <li><a href='#techtext'>Technical Info</a></li>                    
                    <li><a href='#roadmap'>Roadmap</a></li>
                    <li><a href='#social'>Contact</a></li>
                </ul>
            
            </div>
        );
    }
}

export default NavBar;
