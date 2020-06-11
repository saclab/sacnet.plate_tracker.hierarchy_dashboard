import React, {Component} from 'react';
import Library from './Library/Library';
import Vendor from './Vendor/Vendor';
import Master_Twin from './Master_Twin/Master_Twin';
import Hit_Collection from './Hit_Collection/Hit_Collection';
import Screening from './Screening/Screening';

import cssClass from './NodeLabel.module.css';

class NodeLabel extends Component {

  render() {

    
    const {className, nodeData} = this.props;

    const renderNode = (nodeData) => {
      if (nodeData.type === 'LIBRARY') return <Library nodeData={nodeData}/>;
      if (nodeData.type === 'VENDOR') return <Vendor nodeData={nodeData}/>;
      if (nodeData.type === 'MASTER_TWIN') return <Master_Twin nodeData={nodeData}/>;
      if (nodeData.type === 'SCREENING') return <Screening nodeData={nodeData}/>;
      if (nodeData.type === 'HIT_COLLECTION') return <Hit_Collection nodeData={nodeData}/>;
    };



    return (
      <div className={cssClass.NodeLabel}>
        {renderNode(nodeData)}
      </div>
    )
  }
}

export default NodeLabel;
