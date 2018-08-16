import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dayrate: 500,
            hours: 8
        }
    }

    changeState(val, which) {
        this.setState({
            [which]: val
        });

    }

    render() {
        const rate =  this.state.dayrate / this.state.hours;
        return (
            <form>
                <NumberInput onChange={value => this.changeState(value, 'dayrate')} id="day-rate" label="Day rate" min={0} max={5000} value={this.state.dayrate} />
                <NumberInput onChange={value => this.changeState(value, 'hours')} id="hours" label="Hours" min={1} max={12} value={this.state.hours} />
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)} />
            </form>
        );
    }
}

