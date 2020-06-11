import React, { Component } from 'react';
import LibrarySelector from '../../components/LibrarySelector/LibrarySelector';
import Legend from '../../components/Legend/Legend'
import cssClass from './Header.module.css';

class Header extends Component {

  render() {
    return (
      <div className={cssClass.Header}>
        <LibrarySelector libraries={this.props.libraries} changed={this.props.changed} value={this.props.value}/>
        <h2 className={cssClass.Heading}>Plate Hierarchy Dashboard</h2>
        <Legend />
      </div>
      
    )
  }
}

export default Header;