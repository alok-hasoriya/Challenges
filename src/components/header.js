import React, { Component } from 'react';
import HeaderColumn from './headerColumn';

class Header extends Component{

  render (){
    let conf = this.props.config;
		let renderHeader = conf.map((obj, index)=> {
			 return <HeaderColumn key={index} displayName={obj.displayName} columnName={obj.columnName} />;
		});
    return (
      <thead>
					<tr>
						{renderHeader}
					</tr>
			</thead>
    );
  }
}

export default Header;
