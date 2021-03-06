import React, {Component} from 'react';
import cssClass from './Screening.module.css';

class Screening extends Component {

  render() {

    
    const {className, nodeData} = this.props;


    return (
      <React.Fragment>
        <b className={cssClass.headingHighlight}>{nodeData.name}</b>
        <table>
          <tbody>
          <tr><td><h2>{nodeData.attributes.initial_concentration} mM</h2></td></tr>
          <tr><td>{nodeData.attributes.plate_format}, {nodeData.attributes.scientist}</td></tr>
          <tr><td>{nodeData.attributes.location}</td></tr>
          <tr><td>Initial (Vol, Conc): {nodeData.attributes.initial_volume} &micro;L, {nodeData.attributes.initial_concentration} mM</td></tr>
          <tr><td></td></tr>
          <tr><td>No of Compounds : {nodeData.attributes.no_of_compounds}</td></tr>
          <tr><td><a href="#"> View Activity </a></td></tr>
          <tr><td><a href="#"> Checkout </a></td></tr>
          </tbody>
          
      </table>
    </React.Fragment>
    )
  }
}

export default Screening;
