import React, { useState } from "react";
import Chart from "./Chart";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button'


import './css.css';
const Demo = () => {

    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])

    // const [minValue, setMinValue] = useState(-5)
    // const [maxValue, setMaxValue] = useState(10)


    const dataF = () => {
        setData1([]);
        for (let x = 0; x < 30; x++) {
            setData1(prev => [...prev, { x, y: Math.random() }])
        }
        setData2([]);
        for (let x = 0; x < 30; x++) {
            setData2(prev => [...prev, { x, y: Math.random() }])
        }
        setData3([]);
        for (let x = 0; x < 30; x++) {
            setData3(prev => [...prev, { x, y: Math.random() }])
        }
        setTimeout(() => {
            dataF()
        }, 1000)
    }

    const [yRanges, setYRanges] = useState([
        { min: -5, max: 10 },
        { min: -5, max: 10 },
        { min: -5, max: 10 },
    ]);

    const handleYRangeChange = (index, field, value) => {
        setYRanges(prevYRanges => {
            const updatedYRanges = [...prevYRanges];
            updatedYRanges[index] = { ...updatedYRanges[index], [field]: value };
            return updatedYRanges;
        });
    };


    return (
        <>
            <Button sx={{ position: 'absolute', fontSize: '20px' }} onClick={dataF}>get dataF</Button>
            <Container maxWidth='lg' sx={{ backgroundColor: '#98A3A9', p: '20px 0' }}>
                <Box >
                    <Chart series={data1} yRanges={yRanges} yRangesChange={handleYRangeChange} index={0} />
                    <Chart series={data2} yRanges={yRanges} yRangesChange={handleYRangeChange} index={1} />
                    <Chart series={data3} yRanges={yRanges} yRangesChange={handleYRangeChange} index={2} />
                </Box>
            </Container>
            {/* <input style={{ width: 40 }} type="number" placeholder="min" value={minValue} onChange={(e) => setMinValue(e.target.value)} />
            <input style={{ width: 40 }} type="number" placeholder="max" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} />
             */}
            {/* <input style={{ width: 40 }} type="number" placeholder="min" value={minValue} onChange={(e) => setMinValue(e.target.value)} />
            <input style={{ width: 40 }} type="number" placeholder="max" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} /> */}

            {/* <input style={{ width: 40 }} type="number" placeholder="min" value={minValue} onChange={(e) => setMinValue(e.target.value)} />
            <input style={{ width: 40 }} type="number" placeholder="max" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} /> */}
        </>
    )
}

export default Demo;