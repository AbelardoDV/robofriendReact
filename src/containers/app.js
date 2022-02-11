import React from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/search_box'
import './app.css';
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            filtered_robots : robots,
            counter : 0,
        }
        
    }

    clickDetected = (event)=>{
        this.setState( {counter : this.state.counter+1})

    }

    onsearchChange = (event) => {
        this.setState({filtered_robots : robots.filter( robot => robot.name.toLocaleLowerCase().includes(event.target.value))})
    };

    render() {

        return (
            <div className='tc'>
            <h1> RoboFriends</h1>
            <SearchBox onsearchChange={this.onsearchChange}/>
            <CardList filtered_robots={this.state.filtered_robots}/>
            <div>
                Counter
                <p>{this.state.counter}</p>
                <button onClick={this.clickDetected}></button>
            </div>
            </div>
        )
    }
}

export default App
