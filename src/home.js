import React, { Component } from 'react';
import DropDown from './components/dropDown';
import BasicGrid from './components/basicGrid';
import Config from './Config.js';
import { Container, Row, Col, InputGroup} from 'react-bootstrap';
import InputSearch from './components/inputSearch';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      brandData: [],
      timeline: '',
      adName: ''
    };
    this.getData=this.getData.bind(this);
    this.transformData=this.transformData.bind(this);
    this.ddClickhandler = this.ddClickhandler.bind(this);
    this.inputSearchClickHandler = this.inputSearchClickHandler.bind(this);
  }

  transformData(data, a, t){
    let filterData;
    /*if('' === a && t!= ''){
      //filter data by timeline
    }else {
      filterData = data.filter((item, index) =>  a === item.advertiserName);
    }*/
    filterData = data.filter((item, index) =>  a === item.advertiserName);
    filterData.sort((a, b) => b.budget - a.budget);
    let topFiveItems = filterData.splice(0, 5);
    return topFiveItems.map((item, key) => {
      return {
        key: key,
        brandName: item.name,
        compaignCount: item.campaigns.length,
        firstCompaignName: (item.campaigns.length > 0 ? item.campaigns[0].name:'-')
      };
    });
  }

  getData(advertiser, timeline) {
    const url = `http://hck.re/qmPuPD`;
      fetch (url)
        .then(response => response.json())
        .then(data => {
          this.setState({ brandData: this.transformData(data, advertiser, timeline)})
        });
  }

  ddClickhandler (value, text){
    this.setState({
      timeline: text
    });
    //this.getData('', text);
  }

  inputSearchClickHandler (value){
    //console.log("value " + value);
    this.setState({
      adName: value
    });
    this.getData(value, '');
  }

  render (){
    const dropDownItems = Config.timelines;
    const headerConfig = Config.headerConfig;
    return (
      <Container>
      <h2>Zeotap UI Challenge</h2>
      <div className='headerClass'>
        <Row>
        <Col>
        <InputGroup size='sm'>
          <InputGroup.Prepend>
            <InputGroup.Text>Advertiser:</InputGroup.Text>
          </InputGroup.Prepend>
          <InputSearch id='is1' listName='advertiserList' onClick={this.inputSearchClickHandler}/>
        </InputGroup>
        </Col>
        <Col>
        <InputGroup >
          <InputGroup.Prepend>
            <InputGroup.Text>Timeline:</InputGroup.Text>
          </InputGroup.Prepend>
          <DropDown size='sm' list={dropDownItems} ddClickhandler={this.ddClickhandler}/>
        </InputGroup>
        </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col className='col-4'>
            <label>Hello {this.state.adName}</label>
          </Col>
          <Col>
            <label>Showing {this.state.timeline} data</label>
          </Col>
        </Row>
        <Row/>
      </div>
      <br/><br/><br/>
      <Row>
        <BasicGrid headerConfig={headerConfig} data={this.state.brandData}/>
      </Row>
      </Container>);
  }
}

export default Home;
