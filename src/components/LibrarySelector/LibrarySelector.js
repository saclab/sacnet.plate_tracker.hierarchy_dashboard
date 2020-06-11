import React, { Component } from 'react';
import cssClass from './LibrarySelector.module.css';

class LibrarySelector extends Component {

  

  render() {
    console.log(this.props.libraries);


    const libraries = this.props.libraries.map((item, key) =>
    <option key={item.id} value={item.id}>{item.name}</option>
);


    return (
      <div className="form-inline">
        <label htmlFor="library">Select Library: </label>
        <select name="library" id="library" className="form-control " onChange={this.props.changed} value={this.props.value}>
          {libraries}
        </select>
      </div>
    )
  }
}

export default LibrarySelector;