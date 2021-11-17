import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import ActionClusterChart from './components/ActionClusterChart';
import PrettyPrintJson from './PrettyPrintJson'
import 'bootstrap/dist/css/bootstrap.min.css';
import randomColor  from 'randomcolor';


export default function JSONReader() {

    const [prettyJSON,setPrettyJSON]=useState({});
    const [nodeData, setNodeData] = useState([]);
    const [isChartLoaded, setisChartLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function populatePayload(event){
        try {
            const json=JSON.parse(event.target.value);
            setPrettyJSON(json);       
        } catch (error) {
            setPrettyJSON({message:"Invalid JSON"});
        }
    }


    let levelVsNumberOfNodes = new Map();
    let jsonArr=[];
    let edges=[];
    const NODE_WIDTH=400;
    const NODE_HEIGHT=300;
    
    const loadData=()=>{
        jsonArr=[];
        edges=[];
        // var yPosition=NODE_HEIGHT*(levelVsNumberOfNodes.size+1);
        //TODO Need to Calculate the starting Y position for each ROOT node
        try {
            prettyJSON.forEach((node)=>{
                getJSONObjFromNode(node,100,5,1);
                })
                jsonArr.push(...edges);
                setNodeData(jsonArr);
                setisChartLoaded(true);
        } catch (error) {
            console.log("Invalid Action Cluster JSON");
            setShowModal(true);
        }


    }

    
const getJSONObjFromNode=(node,x,y,level)=>{
  let jsonData={};
  
  const nodeId=node.automationAction.mappingId;
  jsonData.id=nodeId;
  jsonData.type="input";
  jsonData.data={
    //   "label":node.nodeType+"_"+node.automationAction.executionType+"_"+node.automationAction.mappingId
    "label": (
        <>
          Node Type:<strong>{node.nodeType}</strong>
          <br/>
          Mapping ID:<strong>{node.automationAction.mappingId}</strong>
          <br/>
          ExecutionType :<strong>{node.automationAction.executionType}</strong>
        </>
      )
    };
  jsonData.position={x,y};
  if(node.nodeType==="ROOT"){
    jsonData.style= { background: '#18e3ed', width: 200 };
  }
  else if(node.nodeType==="SUCCESS"){
    jsonData.style= { background: '#84e384', width: 200};
  }
  else if(node.nodeType==="FAILURE"){
    jsonData.style= { background: '#f86d6d', width: 200 };
  }
  else{
    jsonData.style= { background: '#ffff74', width: 200,color:'blue' };
  }

  pushToLevelVsChildrenMap(level,node.automationAction.mappingId);
  jsonArr.push(jsonData);
  const children=node.childActions;
  const parentID=node.automationAction.mappingId;
//   const childY=150*(level)+(150*levelVsNumberOfNodes.size+1);
  const childY=NODE_HEIGHT*(level);
  var childIndex=0;
  var color = randomColor({luminosity: 'dark'});
  children.forEach((child)=>{
      childIndex++;
      const childLevel=level+1;
      pushToLevelVsChildrenMap(childLevel,child.automationAction.mappingId);
      const noOfChildrenInLevel=levelVsNumberOfNodes.has(childLevel)?levelVsNumberOfNodes.get(childLevel).length:1;
      var childX=NODE_WIDTH*noOfChildrenInLevel;
      if(childIndex!==noOfChildrenInLevel){
        childX=childX+10;
      }
      const childMappingId=child.automationAction.mappingId;

      getJSONObjFromNode(child,childX,childY,childLevel);
      var edgeJSON={};
      edgeJSON.id="e"+parentID+"-"+childMappingId;
      edgeJSON.source=parentID;
      edgeJSON.target=childMappingId;
      edgeJSON.type="step";
      edgeJSON.animated= true;
      edgeJSON.style={ stroke: color };
      edges.push(edgeJSON);
  });
}

const pushToLevelVsChildrenMap=(level,nodeId)=>{
    var currentNodesInLevel=levelVsNumberOfNodes.has(level)?levelVsNumberOfNodes.get(level):[];
    if(currentNodesInLevel.indexOf(nodeId)===-1){
      currentNodesInLevel=[...currentNodesInLevel,nodeId];
    }
    levelVsNumberOfNodes.set(level,currentNodesInLevel);
  }
    
  if(showModal){
    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Invalid Action Cluster Payload</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>The JSON passed is not a valid Action Cluster payload</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setShowModal(false)}}>Close</Button>
            </Modal.Footer>
            </Modal.Dialog>
        )
  }



    if(isChartLoaded){
        return(
        <div>    
            <div className="row">
                <Button type="button" value="Submit JSON" onClick={()=>{setisChartLoaded(false)}}>Hide Chart</Button>
            </div>    
            <br/>     
            <div className="row">
                <ActionClusterChart className="col-sm-6"  data={nodeData}></ActionClusterChart>
            </div>
          </div>
        )
        
    }
    else{
        return (    
        <div> 
            <h1 className="text-secondary">Action Cluster Visualizer</h1>            
            <textarea rows="4" cols="100" type="textarea" placeholder="Enter Action Cluster JSON payload Here" onChange={populatePayload}></textarea >
            <br/>
            <Button type="button" value="Submit JSON" onClick={loadData}>Load Acton Cluster Chart</Button>
            <div className="row">
                {<PrettyPrintJson className="col-sm-6" data={prettyJSON} ></PrettyPrintJson>}   
            </div>
          </div>
        )
    }
}
