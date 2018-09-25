import React, { Component } from 'react';

import "./../css/portalSection.css";

import Console from './svg/Console';
import Portal from './animations/Portal';
import Coin from './animations/Coin';

import DropAnimation from './animations/DropAnimation';
import DropButton from './portalComponents/DropButton';
import QRTCount from './portalComponents/QRTCount';
import KittyIdInput from './portalComponents/KittyIdInput';
import KittyCount from './portalComponents/KittyCount';
import Terminal from './portalComponents/Terminal';

import ethForQRT from './ethForQRT';

import consolesvg from '../assets/presale-groups3_main.svg';

import * as catAnimationData from "../assets/animation_data/01portaldropcat_clean.json";
import * as ethAnimationData from "../assets/animation_data/02portalloopETH_clean.json";

class PortalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catDropAnimation: false,
            ethDropAnimation: false,
            coinAnimation: false
        };
    }

    render() {
        return (
            <div id="portal-main">

                <div className="monitor">
                    <div className="remove-click-layer"/>
                    <img src={consolesvg} />
                    <Terminal/>
                    <DropButton 
                        dropAnimation={this.state.catDropAnimation}
                        className="popup-btn cat-popup-btn"
                        />
                    <DropButton 
                        dropAnimation={this.state.ethDropAnimation}
                        transactionFunction={ethForQRT}
                        className="popup-btn eth-popup-btn"
                    />
                    <KittyCount/>
                    <QRTCount/>
                    <KittyIdInput/>
                    <Portal />
                    <Coin ref={ref => !this.state.coinAnimation && this.setState({coinAnimation: ref})}/>
                    <DropAnimation 
                        animationData={catAnimationData} 
                        ref={ref => !this.state.catDropAnimation && this.setState({catDropAnimation: ref})}
                        startCoinAnimation = {this.state.coinAnimation.startAnimation}
                    />
                    <DropAnimation 
                        animationData={ethAnimationData} 
                        ref={ref => !this.state.ethDropAnimation && this.setState({ethDropAnimation: ref})}
                        startCoinAnimation = {this.state.coinAnimation.startAnimation}
                    />
                </div>
                


            </div>
        );
    }
}

export default PortalContainer;
