import React, {Component} from 'react';
//import cssClass from './NodeLabel.module.css';

class Library extends Component {

  render() {

    
    const {className, nodeData} = this.props;


    return (
      <React.Fragment>
        <h2>{nodeData.name}</h2>
        <table>
          <tbody>
          <tr><td><a href="https://www.google.com"> View Activity </a></td></tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default Library;
