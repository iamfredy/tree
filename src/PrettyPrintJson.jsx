import React from 'react'
  
export default function PrettyPrintJson(props) {
    console.log(props.data);
    return (
    <div style={{color:'Gray',border:'solid',backgroundColor:'white'}}>
        <pre>{ JSON.stringify(props.data, null, 2) }</pre>
    </div>);
}
