import React, { Component } from 'react';
import Axios from 'axios';
import TreeStructure from '../../components/TreeStructure/TreeStructure';
import Header from '../Header/Header';

class Dashboard extends Component {

  state = {
    data: [
      {
        name: 'Loading...',
        attributes: {
          key1 : 'val1'
        }
      },
    ],
    libraries: [
      {
        name: 'Loading',
        id: 0
      }
    ],
    selectedLibrary: 2001
  };

  handleSelectedLibraryChanged =(e) => {
    let newSelectedLib = e.target.value;
    this.setState({ selectedLibrary: newSelectedLib }, this.handleTreeUpdate );
  }

  handleTreeUpdate = () => {
    Axios.get('https://in-91.devl.snet.biobio.tamu.edu/apps/plate-tracker/api/v1/test/getTree.php', { params: { libID : this.state.selectedLibrary}})
    .then(
      (response) => {
        console.log(response.data);
        //let parsedData = JSON.parse(response.data.toString());
        //this.setState({ data: parsedData });
        this.setState({ data: response.data });
      }
    );
  }

  componentDidMount() {


    this.handleTreeUpdate();
    

    Axios.get('https://in-91.devl.snet.biobio.tamu.edu/apps/plate-tracker/api/v1/test/getLibrary.php')
    .then(
      (response) => {
        //console.log(response.data);
        //let parsedData = JSON.parse(response.data.toString());
        //this.setState({ data: parsedData });
        this.setState({ libraries: response.data });
      }
    );

  }

  

  render () {

    return (
      <React.Fragment>
        <Header libraries={this.state.libraries} changed={this.handleSelectedLibraryChanged} value={this.state.selectedLibrary}/>
        <div>
          <TreeStructure data={this.state.data}/>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;


