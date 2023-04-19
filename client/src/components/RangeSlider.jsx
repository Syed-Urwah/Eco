import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const [value, setValue] = React.useState([1000, 50000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };

    return (
        <>
            <p>{`Rs${value[0]} - Rs${value[1]}`}</p>
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Price range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={1000}
                    max={100000}
                    step={1000}
                />
            </Box>

            <div className="custom-range flex items-center gap-2">
                <label htmlFor='from'>From</label>
                <input onChange={(e)=>setValue([e.target.value, value[1]])} value={value[0]} className='w-20 border border-gray-600 px-2' type="number" name="from" id="from" />
                <label htmlFor='to'>To</label>
                <input onChange={(e)=>setValue([value[0], e.target.value])} value={value[1]} className='w-20 border border-gray-600 px-2' type="number" name="to" id="to" />

            </div>
        </>
    );
}