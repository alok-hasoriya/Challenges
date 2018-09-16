import React, { Component} from 'react';

class DataBody extends Component {
  constructor(props){
    super(props);
    this.getRows=this.getRows.bind(this);
  }
  getRows(a){
    let conf = this.props.config;
    return conf.map((b, index) => <td key={index}>{a[b.columnName]}</td>);
  }
  render (){
    let data = this.props.result, rows;
    if(data != null && data.length > 0){
      rows = data.map((a, index) => {
        let obj = this.getRows(a);
        return <tr key={index}>{obj}</tr>;
      });
    } else {
      rows = <tr><td colSpan='3'>No data to display.</td></tr>;
    }
    return (<tbody>{rows}</tbody>);
  }
}

export default DataBody;
