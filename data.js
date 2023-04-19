var APP_DATA = {
  "scenes": [
    {
      "id": "0-img1",
      "name": "img1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3665191429188148,
        "pitch": 0.17611349185428615,
        "fov": 1.3848081938437478
      },
      "linkHotspots": [
        {
          "yaw": -0.5027344765928081,
          "pitch": 0.1790731887653454,
          "rotation": 0,
          "target": "1-img2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-img2",
      "name": "img2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.4001442242643005,
        "pitch": -0.05581766702254498,
        "fov": 1.3848081938437478
      },
      "linkHotspots": [
        {
          "yaw": 2.2840256660239753,
          "pitch": -0.03360670047342751,
          "rotation": 0,
          "target": "0-img1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2741024235687757,
          "pitch": -0.21533744528417742,
          "title": "Teste",
          "text": "Teste"
        }
      ]
    }
  ],
  "name": "marzshow360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
