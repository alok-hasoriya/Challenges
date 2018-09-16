import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import Header from './header';
import DataBody from './dataBody';
import '../css/basicGrid.css'


class BasicGrid extends Component{

  render (){
    return (
      <div className='basicGrid'>
        <Table striped bordered hover>
          <Header config={this.props.headerConfig} dataSort={this.dataSort}/>
          <DataBody result={this.props.data} config={this.props.headerConfig}/>
        </Table>
      </div>
    );
  }
}

export default BasicGrid;
