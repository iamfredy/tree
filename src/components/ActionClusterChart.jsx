import React from 'react'
import ReactFlow, { Background } from 'react-flow-renderer'
const flowStyles = { height: 700,background:"white",width:1376 };


const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView({ padding: 0.1, includeHiddenNodes: true });
};

function ActionClusterChart(props) {
    console.log(props.data);
    return (
        <div>
            <ReactFlow onLoad={onLoad} nodeTypes={"output"} elements={props.data}  style={flowStyles} data={{text:'hello'}}>
                <Background />
            </ReactFlow>
        </div>
    )
}

export default ActionClusterChart
