import React, { Component } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation_data/02portalloopETH_clean.json";

class EthDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: true,
      isPaused: false,
      Animated: 0,
    };
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData
    };
    const { isStopped, isPaused, Animated } = this.state;

    const clickHandler = event => {
      event.preventDefault();
      if (!isStopped) {
        this.setState({ isStopped: true });
      }
      this.setState({ isStopped: false });
      console.log("clicked");
      this.setState({ Animated: 0 })
    };

    return (
      <div id="ethdrop">
        <Lottie
          options={defaultOptions}
          isStopped={isStopped}
          isPaused={isPaused}
          Animated={Animated}
          
        />
        <button onClick={clickHandler} className="eth-btn">ETH</button>
      </div>
    );
  }
}

export default EthDrop;
