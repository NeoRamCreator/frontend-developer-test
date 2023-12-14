import React, { useEffect, useRef, useState } from 'react';
import TimeChart from 'timechart/core';
import { lineChart } from 'timechart/plugins/lineChart';
import { d3Axis } from 'timechart/plugins/d3Axis';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Input from '@mui/material/Input'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

function Chart({ series, yRanges, index, yRangesChange }) {
    const chartRef = useRef(null);
    const [chart, setChart] = useState()


    useEffect(() => {
        // console.log(yRange)

        const newChart = new TimeChart(chartRef.current, {
            yRange: yRanges[index],
            series: [
                { data: series, name: 'd1' },
            ],
            plugins: {
                lineChart,
                d3Axis,
            },
        });

        setChart(newChart)
        return () => {
            newChart.dispose();
        };
    }, [series, yRanges]);

    // const [minValue, setMinValue] = useState(-5)
    // const [maxValue, setMaxValue] = useState(10)

    return (
        <>
            <Box sx={{backgroundColor: '#A8B4BB', p: '0 20px 10px 20px', mb: '30px', borderRadius: 2, boxShadow: '0 0 10px 1px'}}>

                <Typography variant="h4" textAlign={'center'}>{`График ${index + 1}`}</Typography>
                <div ref={chartRef} id="chart" style={{ width: '100%', height: '420px', background: '#AEEB8A' }}></div>
                <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Stack spacing={0}>
                        <Box sx={{ width: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                            <Typography variant="span" >min:</Typography>
                            <Input sx={{ width: 50, background: '#C3D0D8', pl: 1, mt: 1 }} type="number" placeholder="min" value={yRanges[index].min} onChange={(e) => yRangesChange(index, 'min', e.target.value)} />
                        </Box>

                        <Box sx={{ width: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                            <Typography variant="span" >max:</Typography>
                            <Input sx={{ width: 50, background: '#C3D0D8', pl: 1, mt: 1 }} type="number" placeholder="max" value={yRanges[index].max} onChange={(e) => yRangesChange(index, 'max', e.target.value)} />
                        </Box>
                    </Stack>
                    <Button variant="outlined" sx={{ mt: 1, height: '40px' }} onClick={() => console.log('screenshot')}>save</Button>
                </Stack>
            </Box>
        </>
    );
}

export default Chart;




