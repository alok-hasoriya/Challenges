import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';


class DropDown extends Component{
  constructor(props){
    super(props);
    this.state = {
      showSelectedValue : 'Select Options'
    };
    this.onSelectHandler = this.onSelectHandler.bind(this);
  }
  onSelectHandler (value, obj){
    this.setState({showSelectedValue: obj.target.text});
    this.props.ddClickhandler(value, obj.target.text);
  }
  render (){
    return (
            <Dropdown title={this.props.title}>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {this.state.showSelectedValue}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {this.props.list.map((item, key) =>
                  <Dropdown.Item key={key} onSelect={this.onSelectHandler} eventKey={item.value}>{item.label}</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
    );
  }
}
export default DropDown;
