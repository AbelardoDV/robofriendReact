import React from 'react';

class Card extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         searchField : "",
    //     };
    // }
    render() {
        console.log(this.porps)
        return (
            <div  className="bg-light-green  dib  br3 pa3 ma2 grow bw2 shadow-2">
                <img alt="robot" src={`https://robohash.org/${this.props.robot.name}?200x200`} />
                <div>
                <h2> {this.props.robot.name}</h2>
                <p>{this.props.robot.email}</p>
                </div>
            </div>
        )
    }
}

export default Card
