import axios from 'axios';
import React, { Component } from 'react';
import './gym.css';
import logo from './images/images/Untitled (3).png';

class Gym extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gyms: [],
            currentTime: new Date().toLocaleTimeString(),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {

            this.setState({ currentTime: new Date().toLocaleTimeString() });
        }, 1000);
    }
    componentDidMount() {
        axios.get('http://localhost:3001/gyms')
            .then(response => {
                this.setState({ gyms: response.data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    handleReset = () => {
        console.log('Form fields reset!');
    };

    render() {
        const { gyms } = this.state;
        return (
            <>
                <center>
                    <form class>
                        <div id='overall'><br></br>
                            <img src={logo} alt="Logo" id='logo'></img>
                            <h1 id='h1'>GYM FLOW 💪🏼</h1><br></br>
                            <ul>
                                {gyms.map(gym => (
                                    <li key={gym.id}>{gym.name} - {gym.location}</li>
                                ))}
                            </ul>
                            <div>
                                <input id="name" type="text" placeholder="   ENTER YOUR NAME OR ID HERE" />
                            </div><br></br>
                            {/* <div>
                                <label htmlFor="currentDate" class='One'>SELECT TODAY'S DATE 📅</label>
                            </div>
                            <input type="date" id="currentDate" name="currentDate"></input> */}
                            <h3 class='One'>Current Time ⏳: {this.state.currentTime}</h3>
                            <button type="submit" class='Enter'>ENTER</button><br></br>
                            <button type='reset' onClick={this.handleReset} class='Enter'>RESET</button>
                        </div>
                    </form>
                </center><br></br><br></br><br></br>
                <center>
                    <footer>
                        <header class="header1">
                            <nav class="navbar">
                                <a href="#" class="active">home</a>
                                <a href="#">about</a>
                                <a href="#">services</a>
                                <a href="#"> plans</a>
                                <a href="#">contact</a>
                            </nav>
                        </header>
                    </footer>
                </center>
            </>
        );
    }
}

export default Gym;

