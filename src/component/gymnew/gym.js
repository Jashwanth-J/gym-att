import React, { Component } from 'react';
import './gym.css';

class Gym extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString(),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ currentTime: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    handleReset = () => {
        console.log('Form fields reset!');
    };
}

export class Gym extends Component {
    render() {
        return (
            <>
                <div className='Total'>
                    <form>
                        <h1 id='head'>Gym-flow</h1>
                        <span><img src='C:\react-gym\second-app\src\component\gymnew\images\Design 1.png'></img></span>
                        <input type='text' placeholder='ENTER YOUR NAME OR ID'></input>
                        <div>
                            <label htmlFor="currentDate" class='One'>SELECT TODAY'S DATE:</label>
                        </div>
                        <input type="date" id="currentDate" name="currentDate" />
                        <h3 class='One'>Current Time: {this.state.currentTime}</h3>
                        <button type="submit" class='Enter'>ENTER</button>
                        <button type='reset' onClick={this.handleReset} class='Enter'>RESET</button>
                    </form>
                </div>
            </>

        )
    }
}

export default Gym
