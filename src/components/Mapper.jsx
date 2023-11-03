import React from 'react';
import ImageMapper from 'react-img-mapper';

const Mapper = ({ URL, MAP, setValue, clickSeat}) => {
    // const URL = 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.jpg';
    // const MAP = {
    //     name: 'my-map',
    //     // GET JSON FROM BELOW URL AS AN EXAMPLE
    //     areas: 'https://raw.githubusercontent.com/img-mapper/react-docs/master/src/assets/example.json',
    // };

    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }}>
    
        <ImageMapper src={URL} map={MAP} onMouseMove={(e) => setValue(e._id)} onMouseLeave={() => setValue("")} onClick={(e) => clickSeat(e._id)} width={ window.innerWidth > 500 ? 600 :  360} responsive={true} parentWidth={ window.innerWidth > 500 ? 600 :  360} />
    </div>
}

export default Mapper;