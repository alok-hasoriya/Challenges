import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class HeaderColumn extends Component{

	render(){
		return(
				<th>
					<span>{this.props.displayName}</span>
				</th>
			);
	}
}
export default HeaderColumn;
