// 

import React from 'react';
import Card from './Card'

class CardList extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div >
            {this.props.filtered_robots.map((robot) => {return <Card key={robot.id} robot={robot}/>})}
            </div>
        )
    }
}

export default CardList
