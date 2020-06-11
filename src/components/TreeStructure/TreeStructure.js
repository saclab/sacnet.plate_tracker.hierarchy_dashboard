import React, {Component} from 'react';
import Tree from 'react-d3-tree';
import NodeLabel from '../NodeLabel/NodeLabel';

const nodeSize = {
  x : 410,
  y : 300
};

const textLayout={
  textAnchor: "start", x: 30, y: -10, transform: undefined
}

const translate ={
  x: 900, y: 50
}

const initialDepth = 2;

const nodeSvgShape = {shape: 'circle', shapeProps: {r: 25}};

class TreeStructure extends Component {

  handleLinkClick = (linkSource, linkTarget, evt) => {
    console.log(linkSource);
  }



  render() {
    return (
      <div id="treeWrapper" style={{width: '100%', height: '900px'}}>

        <Tree 
          data={this.props.data}
          orientation = "vertical"
          initialDepth = {initialDepth}
          pathFunc = "elbow"
          nodeSize={nodeSize}
          nodeSvgShape={nodeSvgShape}
          textLayout={textLayout}
          translate={translate}
          onLinkClick = {() => this.handleLinkClick()}
          allowForeignObjects
          nodeLabelComponent={{
        render: <NodeLabel  />,
        foreignObjectWrapper: {
          x: 10,
          y: 0
        }
      }}
          />

      </div>
    );
  }


}

export default TreeStructure;