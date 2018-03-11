import React, {PureComponent}  from 'react';

class ShowLi extends PureComponent {
    render(){
        return(
            <li>{this.props.item.Team_name}</li>
        )
    }
}

export default ShowLi





