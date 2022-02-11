import React from 'react';

class SearchBox extends React.Component {
    render() {

        return (
            <div   className="bg-light-green  dib  br3 pa3 ma2 grow bw2 shadow-2">
                <input onChange={this.props.onsearchChange} type="text" placeholder='search robots'></input>
            </div>
        )
    }
}

export default SearchBox
