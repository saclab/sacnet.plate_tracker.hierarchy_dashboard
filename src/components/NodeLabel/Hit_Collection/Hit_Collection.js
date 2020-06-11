import React, {Component} from 'react';
import cssClass from './Hit_Collection.module.css';

class Hit_Collection extends Component {

  render() {

    
    const {className, nodeData} = this.props;


    return (
      <React.Fragment>
        <b className={cssClass.headingHighlight}>{nodeData.name}</b>
          <table>
            <tbody>
            <tr><td><h2>{nodeData.attributes.scientist}</h2></td></tr>
            <tr><td>Date Created : {nodeData.attributes.date_created}</td></tr>
            <tr><td>{nodeData.attributes.plate_format}, {nodeData.attributes.location}</td></tr>
            <tr><td>Initial (Vol, Conc): {nodeData.attributes.initial_volume} &micro;L, {nodeData.attributes.initial_concentration} mM</td></tr>
            <tr><td>No of Compounds : {nodeData.attributes.no_of_compounds}</td></tr>
            <tr><td>Compound File : {nodeData.attributes.compound_file}</td></tr>
            <tr><td><a href="#"> View Activity </a></td></tr>
            <tr><td><a href="#"> Checkout </a> </td></tr>
            </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default Hit_Collection;
