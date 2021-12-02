import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';
import React from 'react'


let treeNodeData=[
    {
        "key": "<h1>Hello</h1>",
        "text": "ROOT\nSYNC\n4000000261003",
        "loc": "100 5",
        "color":"green"
    },    
    {
        "key": "4000000261003",
        "text": "ROOT_SYNC_4000000261003",
        "loc": "100 5",
        "color":"red"
    },
    {
        "key": "4000000261001",
        "text": "SUCCESS_SYNC_4000000261001",
        "loc": "250 150",
        "parent": "4000000261003"
    },
    {
        "key": "4000000261007",
        "text": "DEFAULT_SYNC_4000000261007",
        "loc": "500 150",
        "parent": "4000000261003"
    },
    {
        "key": "4000000261005",
        "text": "SUCCESS_SYNC_4000000261005",
        "loc": "250 300",
        "parent": "4000000261007"
    },
    {
        "key": "4000000261011",
        "text": "FAILURE_SYNC_4000000261011",
        "loc": "500 300",
        "parent": "4000000261007"
    },
    {
        "key": "4000000261009",
        "text": "DEFAULT_SYNC_4000000261009",
        "loc": "750 150",
        "parent": "4000000261003"
    },
    {
        "key": "4000000261377",
        "text": "FAILURE_ASYNC_4000000261377",
        "loc": "750 300",
        "parent": "4000000261009"
    },
    {
        "key": "4000000266666",
        "text": "DEFAULT_SYNC_4000000266666",
        "loc": "1000 150",
        "parent": "4000000261003"
    }
];

function initDiagram() {
const $ = go.GraphObject.make;
const diagram =$(go.Diagram,{'undoManager.isEnabled': true,
'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' }
,model: $(go.TreeModel)});
  
    // define a simple Node template
    diagram.nodeTemplate =
    //   $(go.Node, 'Auto',
    //     new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
    //     $(go.Shape, 'RoundedRectangle', { name: 'SHAPE', fill: 'blue', strokeWidth: 2 },new go.Binding('fill', 'color')),
    //     $(go.TextBlock,{ margin: 8, editable: true },new go.Binding('text').makeTwoWay())
    //     // $(go.TextBlock, { text: "Hello World", stroke: "gray" })
    //   );
    diagram.nodeTemplate =
    $(go.Node, "Auto",
      $(go.Shape, "RoundedRectangle"),
      $(go.TextBlock,new go.Binding("text", "text"),textStyle(),{isMultiline:true,margin:8})
    );
    // diagram.linkTemplate =$(go.Link,{ routing: go.Link.Orthogonal, corner: 5 },$(go.Shape,{fill: "red",strokeWidth: 2 }));
    diagram.linkTemplate =
    $(go.Link,
        {
            routing: go.Link.AvoidsNodes,
            curve: go.Link.JumpOver
          },
      $(go.Shape, { toArrow: 'Standard',strokeWidth: 3  })
    );
    diagram.layout = $(go.TreeLayout);
    return diagram;
  }


  /**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is dicussed below.
 */
function handleModelChange(changes) {
    console.log(changes);
}
  
function textStyle() {
    return {
      font: "bold 11pt Lato, Helvetica, Arial, sans-serif",
      stroke: "white"
    }
  }

export default function GoJSComponent(props) {
    console.log(props);
    return (
        <div>
        <ReactDiagram
          initDiagram={initDiagram}
          divClassName='diagram-component'
          nodeDataArray={props.data}
          onModelChange={handleModelChange}
        />
      </div>
    )
}
