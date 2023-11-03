import { useState, useEffect } from 'react'
import reactLogo from './assets/stadium.svg'
import './App.css'
import Mapper from './components/Mapper'

function App() {
  const mapConst = {
    "name": "my-map",
    "areas": [
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          67,
          68,
          48,
          86,
          73,
          101,
          85,
          86
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          47,
          86,
          29,
          110,
          63,
          122,
          71,
          101
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          28,
          110,
          13,
          138,
          55,
          141,
          60,
          122
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          13,
          140,
          3,
          169,
          52,
          169,
          54,
          144
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          2,
          172,
          0,
          203,
          52,
          203,
          52,
          172
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          1,
          204,
          52,
          204,
          52,
          234,
          2,
          236
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          5,
          238,
          53,
          237,
          56,
          262,
          13,
          267
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          12,
          268,
          57,
          265,
          63,
          285,
          26,
          296
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          28,
          297,
          63,
          287,
          72,
          305,
          46,
          321
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          73,
          307,
          47,
          323,
          66,
          340,
          85,
          323
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          446,
          68,
          426,
          85,
          439,
          101,
          465,
          86
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          440,
          102,
          449,
          119,
          482,
          109,
          465,
          87
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          449,
          121,
          455,
          142,
          498,
          139,
          484,
          112
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          455,
          143,
          499,
          141,
          508,
          169,
          457,
          170
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          457,
          172,
          458,
          203,
          511,
          203,
          509,
          171
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          457,
          206,
          458,
          235,
          509,
          235,
          511,
          204
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          457,
          238,
          454,
          264,
          499,
          267,
          508,
          238
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          456,
          266,
          447,
          285,
          484,
          296,
          498,
          269
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id" : 'y-r',
        "coords": [
          447,
          288,
          439,
          302,
          467,
          320,
          483,
          299
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          439,
          305,
          425,
          321,
          446,
          340,
          465,
          322
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-top",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          191,
          6,
          192,
          49,
          223,
          49,
          224,
          1
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-top",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          226,
          0,
          226,
          49,
          255,
          49,
          254,
          0
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-top",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          256,
          0,
          290,
          2,
          290,
          49,
          257,
          49
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-top",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          292,
          2,
          293,
          49,
          323,
          49,
          323,
          8
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-bottom",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          192,
          356,
          224,
          356,
          224,
          407,
          191,
          402
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-bottom",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          226,
          356,
          226,
          407,
          255,
          409,
          254,
          356
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-bottom",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          256,
          355,
          290,
          355,
          290,
          407,
          257,
          409
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-bottom",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          292,
          356,
          292,
          405,
          293,
          406,
          323,
          401,
          323,
          355
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      }
    ]
  };

  const [mapState, setMapState] = useState({
    "name": "my-map",
    "areas": [
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          67,
          68,
          48,
          86,
          73,
          101,
          85,
          86
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          47,
          86,
          29,
          110,
          63,
          122,
          71,
          101
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          28,
          110,
          13,
          138,
          55,
          141,
          60,
          122
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          13,
          140,
          3,
          169,
          52,
          169,
          54,
          144
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          2,
          172,
          0,
          203,
          52,
          203,
          52,
          172
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          1,
          204,
          52,
          204,
          52,
          234,
          2,
          236
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          5,
          238,
          53,
          237,
          56,
          262,
          13,
          267
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          12,
          268,
          57,
          265,
          63,
          285,
          26,
          296
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          28,
          297,
          63,
          287,
          72,
          305,
          46,
          321
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-left",
        "_id": 'y-l',
        "shape": "poly",
        "coords": [
          73,
          307,
          47,
          323,
          66,
          340,
          85,
          323
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id" : 'y-l',
        "coords": [
          446,
          68,
          426,
          85,
          439,
          101,
          465,
          86
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          440,
          102,
          449,
          119,
          482,
          109,
          465,
          87
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          449,
          121,
          455,
          142,
          498,
          139,
          484,
          112
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          455,
          143,
          499,
          141,
          508,
          169,
          457,
          170
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          457,
          172,
          458,
          203,
          511,
          203,
          509,
          171
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          457,
          206,
          458,
          235,
          509,
          235,
          511,
          204
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          457,
          238,
          454,
          264,
          499,
          267,
          508,
          238
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          456,
          266,
          447,
          285,
          484,
          296,
          498,
          269
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id" : "y-l",
        "coords": [
          447,
          288,
          439,
          302,
          467,
          320,
          483,
          299
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "yellow-right",
        "shape": "poly",
        "_id": 'y-l',
        "coords": [
          439,
          305,
          425,
          321,
          446,
          340,
          465,
          322
        ],
        "preFillColor": "#f2a135",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-top",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          191,
          6,
          192,
          49,
          223,
          49,
          224,
          1
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-top",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          226,
          0,
          226,
          49,
          255,
          49,
          254,
          0
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-top",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          256,
          0,
          290,
          2,
          290,
          49,
          257,
          49
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-top",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          292,
          2,
          293,
          49,
          323,
          49,
          323,
          8
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-bottom",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          192,
          356,
          224,
          356,
          224,
          407,
          191,
          402
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-bottom",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          226,
          356,
          226,
          407,
          255,
          409,
          254,
          356
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-bottom",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          256,
          355,
          290,
          355,
          290,
          407,
          257,
          409
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      },
      {
        "name": "sky-bottom",
        "shape": "poly",
        "_id": 'sky',
        "coords": [
          292,
          356,
          292,
          405,
          293,
          406,
          323,
          401,
          323,
          355
        ],
        "preFillColor": "#7eb7fe",
        "fillColor": "rgba(0,0,100,0.2)"
      }
    ]
  });

  const [selectedCategory, setSelectedCategory] = useState(false);

  let isHovering = false;

  // Create a map of _id to corresponding objects in mapConst.areas
  const mapConstAreaMap = {};
  mapConst.areas.forEach((item) => {
    mapConstAreaMap[item._id] = item;
  });

  const handleSeatHover = (value) => {
    if (!isHovering) {
      isHovering = true;
      updateMap(value);

      setTimeout(() => {
        isHovering = false;
      }, 100);
    };
  };

  const updateMap = (value) => {
    // Deep clone mapState to avoid directly mutating state
    const newMapState = JSON.parse(JSON.stringify(mapState));

    // Update the preFillColor based on the value
    newMapState.areas.forEach((area) => {
      area.strokeColor = value === area._id ? "red" : mapConstAreaMap[area._id].strokeColor;
      area.lineWidth = 3;
    });

    setMapState(newMapState);
  };

  const clickSeat = (value) => {
    // Deep clone mapState to avoid directly mutating state
    const newMapState = JSON.parse(JSON.stringify(mapState));
    setSelectedCategory(!selectedCategory);
    // Update the preFillColor based on the value
    if(selectedCategory) {
      newMapState.areas.forEach((area) => {
        area.preFillColor = mapConstAreaMap[area._id].preFillColor;
        area.strokeColor = "white";
        area.lineWidth = 3;
      });
      setMapState(newMapState);
    }
    else {
    newMapState.areas.forEach((area) => {
      area.preFillColor = value !== area._id ? "white" : mapConstAreaMap[area._id].preFillColor;
      area.strokeColor = value !== area._id ? "white" : 'red';
      area.lineWidth = 3;
    });
    setMapState(newMapState);
  }
  };
 
  return (
    <>
      <h1> Heiii</h1>

      <Mapper URL={reactLogo} MAP={mapState} setValue={handleSeatHover} clickSeat={clickSeat}/>
    </>
  )
}

export default App
