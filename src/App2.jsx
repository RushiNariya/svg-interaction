import { useState, useMemo } from 'react'
import reactLogo from './assets/stadium.svg'
import './App.css'
import Mapper from './components/Mapper'

function App2() {


    const categories = [
        {
            id: '1',
            name: 'Long side upper tier',
            hex: 'red'
        },
        {
            id: '2',
            name: 'Short side upper tier',
            hex: 'green'
        },
        {
            id: '3',
            name: 'Club level short side',
            hex: 'yellow'
        },
        {
            id: '4',
            name: 'Club level long side',
            hex: 'pink'
        }
    ]



    const mapConst = {
        "name": "my-map",
        "areas": [
            {
                "name": "yellow-left1",
                "_id": 'y-l-1',
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
                "name": "yellow-left2",
                "_id": 'y-l-2',
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
                "name": "yellow-left3",
                "_id": 'y-l-3',
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
                "name": "yellow-left4",
                "_id": 'y-l-4',
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
                "name": "yellow-left5",
                "_id": 'y-l-5',
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
                "name": "yellow-left6",
                "_id": 'y-l-6',
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
                "name": "yellow-left7",
                "_id": 'y-l-7',
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
                "name": "yellow-left8",
                "_id": 'y-l-8',
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
                "name": "yellow-left9",
                "_id": 'y-l-9',
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
                "name": "yellow-left10",
                "_id": 'y-l-10',
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
        ]
    };

    const [mapState, setMapState] = useState({
        "name": "my-map",
        "areas": [
            {
                "name": "yellow-left1",
                "_id": 'y-l-1',
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
                "name": "yellow-left2",
                "_id": 'y-l-2',
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
                "name": "yellow-left3",
                "_id": 'y-l-3',
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
                "name": "yellow-left4",
                "_id": 'y-l-4',
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
                "name": "yellow-left5",
                "_id": 'y-l-5',
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
                "name": "yellow-left6",
                "_id": 'y-l-6',
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
                "name": "yellow-left7",
                "_id": 'y-l-7',
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
                "name": "yellow-left8",
                "_id": 'y-l-8',
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
                "name": "yellow-left9",
                "_id": 'y-l-9',
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
                "name": "yellow-left10",
                "_id": 'y-l-10',
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
        ]
    });

    const [persistColor, setPersistColor] = useState({
        id: null,
        hex: 'orange'
    });

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
        if (selectedCategory) {
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


    const handleCategoryChange = (areaId, categoryId) => {
        const findCategory = categories.find(category => category.id === categoryId);
        const newMapState = JSON.parse(JSON.stringify(mapState));

        // Update the preFillColor based on the value
        newMapState.areas.forEach((area) => {
            if (areaId === area._id){
            area.preFillColor = findCategory.hex;
            area.category = findCategory.id;
            }
        });

        setMapState(newMapState);
    }


    const previewSection = (id) => {
        const newMapState = JSON.parse(JSON.stringify(mapState));

        // Update the preFillColor based on the value
        newMapState.areas.forEach((area) => {
            if (id === area._id){
                setPersistColor({
                    id: id,
                    hex: area.preFillColor
                });
                area.preFillColor = "white";
            }
        });

        setMapState(newMapState);
        revertColorInTimeout();
    }

    const revertColorInTimeout = () => {
        setTimeout(() => {
            const newMapState = JSON.parse(JSON.stringify(mapState));
            newMapState.areas.forEach((area) => {
                if (persistColor.id === area._id) {
                    area.preFillColor = persistColor.hex;
                }
            });
            setMapState(newMapState);
        }, 300);
    }


    // useMemo(() => {
    //     if(persistColor.id){
    //     setTimeout(() => {
    //         const newMapState = JSON.parse(JSON.stringify(mapState));
    //         newMapState.areas.forEach((area) => {
    //             if (persistColor.id === area._id) {
    //                 area.preFillColor = persistColor.hex;
    //             }
    //         });
    //         setMapState(newMapState);
    //     }, 1000);
    // }
    // }, [persistColor]);


    return (
        <>
            <h1> Heiii</h1>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', gridGap: '50px' }}>
                <div style={{ display: 'flex', width: '50%', justifyContent: 'space-evenly', flexDirection: 'column', border: '1px solid #ccc', padding: '5px' }}>
            {mapState.areas.map((area) => {
                return(<div style={{ width: '100%', display: 'flex', gridGap: '15px', alignItems:'center' }}>
                  <span>
                      {area.name}
                  </span>
                    <select value={area?.category || ""} onChange={(e) => handleCategoryChange(area._id, e.target.value)}>
                        <option disabled value={""}>Select the category</option>
                        {categories.map(category => <option value={category.id}>{category.name}</option>)}
                    </select>
                    <p style={{ border: '1px solid #ccc', padding: '5px' }}>{area.coords.toString()}</p>
                    <button onClick={() => previewSection(area._id)}>preview</button>
                </div>)
            } )}
           </div>
           <div>
            <p>Preview Section</p>
           <div style={{ border: '1px solid #ccc', padding: '5px' }}>
            <Mapper URL={reactLogo} MAP={mapState} setValue={handleSeatHover} clickSeat={clickSeat} />
           </div>
           </div>
            </div>
        </>
    )
}

export default App2;
