 //SAMPLE INPUT DATA FOR REACT-RENDER-FLOW 
 //NEED TO CONVERT ACTION CLUSTER DATA TO THIS FORMAT
 export const NodeData=[
    {
      "id": "4000000261003",
      "type": "input",
      "data": {
        "label": "ROOT_SYNC_4000000261003"
      },
      "position": {
        "x": 100,
        "y": 5
      },
      "style": {
        "background": "#0693E3",
        "width": 200
      }
    },
    {
      "id": "4000000261001",
      "type": "input",
      "data": {
        "label": "SUCCESS_SYNC_4000000261001"
      },
      "position": {
        "x": "250",
        "y": 150
      },
      "style": {
        "background": "#00D084",
        "width": 200
      }
    },
    {
      "id": "4000000261007",
      "type": "input",
      "data": {
        "label": "DEFAULT_SYNC_4000000261007"
      },
      "position": {
        "x": "500",
        "y": 150
      },
      "style": {
        "background": "#EB144C",
        "width": 200,
        "color": "blue"
      }
    },
    {
      "id": "4000000261005",
      "type": "input",
      "data": {
        "label": "SUCCESS_SYNC_4000000261005"
      },
      "position": {
        "x": "250",
        "y": 300
      },
      "style": {
        "background": "#00D084",
        "width": 200
      }
    },
    {
      "id": "4000000261011",
      "type": "input",
      "data": {
        "label": "FAILURE_SYNC_4000000261011"
      },
      "position": {
        "x": "500",
        "y": 300
      },
      "style": {
        "background": "#EB144C",
        "width": 200,
        "color": "blue"
      }
    },
    {
      "id": "4000000261009",
      "type": "input",
      "data": {
        "label": "DEFAULT_SYNC_4000000261009"
      },
      "position": {
        "x": "750",
        "y": 150
      },
      "style": {
        "background": "#EB144C",
        "width": 200,
        "color": "blue"
      }
    },
    {
      "id": "4000000261377",
      "type": "input",
      "data": {
        "label": "FAILURE_ASYNC_4000000261377"
      },
      "position": {
        "x": "750",
        "y": 300
      },
      "style": {
        "background": "#EB144C",
        "width": 200,
        "color": "blue"
      }
    },
    {
      "id": "4000000266666",
      "type": "input",
      "data": {
        "label": "DEFAULT_SYNC_4000000266666"
      },
      "position": {
        "x": "1000",
        "y": 150
      },
      "style": {
        "background": "#EB144C",
        "width": 200,
        "color": "blue"
      }
    },
    {
      "id": "e4000000261003-4000000261001",
      "source": "4000000261003",
      "target": "4000000261001",
      "type": "step"
    },
    {
      "id": "e4000000261007-4000000261005",
      "source": "4000000261007",
      "target": "4000000261005",
      "type": "step"
    },
    {
      "id": "e4000000261007-4000000261011",
      "source": "4000000261007",
      "target": "4000000261011",
      "type": "step"
    },
    {
      "id": "e4000000261003-4000000261007",
      "source": "4000000261003",
      "target": "4000000261007",
      "type": "step"
    },
    {
      "id": "e4000000261009-4000000261377",
      "source": "4000000261009",
      "target": "4000000261377",
      "type": "step"
    },
    {
      "id": "e4000000261003-4000000261009",
      "source": "4000000261003",
      "target": "4000000261009",
      "type": "step"
    },
    {
      "id": "e4000000261003-4000000266666",
      "source": "4000000261003",
      "target": "4000000266666",
      "type": "step"
    }
  ];