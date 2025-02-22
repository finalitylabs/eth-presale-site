import React, { Component } from 'react';

class DropButtons extends Component {
    constructor(props) {
        super(props);
    }

    handleDropButtonClick = async () => {
        const tx = await this.props.transactionFunction(this.props.terminal, this.props.kittyId, this.props.setContainerState);
        if (tx) {
            setTimeout(() => {
                this.props.dropAnimation.clickHandler();
            }, 2000);
        }
    }

    render() {
        return (
            <div 
                onClick={() => this.handleDropButtonClick()} 
                className={this.props.className}
            />
        );
    }
}

export default DropButtons;