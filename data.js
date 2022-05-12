var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.30520132279641743,
        "pitch": 0.07908904582462739,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9011428744970331,
          "pitch": 0.09210535747901005,
          "rotation": 7.0685834705770345,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06032919188110597,
          "pitch": 0.4031538653583411,
          "rotation": 3.141592653589793,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.03577889740699902,
          "pitch": 0.19210758821686724,
          "title": "Engineering Auditorium Atrium",
          "text": "Hello World"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03902448334448749,
          "pitch": 0.06772429454876239,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": -0.8029775403155313,
          "pitch": 0.10834309766929984,
          "rotation": 5.497787143782138,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Engine Test",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
