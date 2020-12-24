import React from 'react';
import '../index.css'

class ListItem extends React.Component{
    render(){
        return (
            <div className="ListItem">
                <div className="number">{this.props.number}</div>
                {this.props.name} {this.props.surname}
            </div>
        )
    }
}
export default ListItem;