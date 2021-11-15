// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import { useEffect, useState, Fragment } from 'react'

import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend
} from 'react-vis';

const Chart = () => {

    const [useCanvas, setUseCanvas] = useState(false)



    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;


    const appleData = [
        { x: 'Q1', y: 1 },
        { x: 'Q2', y: 4 },
        { x: 'Q3', y: 6 },
        { x: 'Q4', y: 8 }
    ]


    const orangeData = [
        { x: 'Q1', y: 1 },
        { x: 'Q2', y: 4 },
        { x: 'Q3', y: 6 },
        { x: 'Q4', y: 8 }
    ]

    const mangoData = [
        { x: 'Q1', y: 1 },
        { x: 'Q2', y: 4 },
        { x: 'Q3', y: 6 },
        { x: 'Q4', y: 8 }
    ]

    return (
        <div className="m-10">

            <XYPlot
                className="clustered-stacked-bar-chart-example"
                xType="ordinal"
                stackBy="y"
                width={450}
                height={500}
            >
                <DiscreteColorLegend
                    style={{ position: 'absolute', left: '500px', top: '10px' }}
                    orientation="vertical"
                    items={[
                        {
                            title: 'Apples',
                            color: '#12939A'
                        },
                        {
                            title: 'Oranges',
                            color: '#79C7E3'
                        },
                        {
                            title: 'Mangos',
                            color: 'pink'
                        }
                    ]}
                />
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <BarSeries
                    cluster="2015"
                    color="#12939A"
                    data={appleData}
                />
                <BarSeries
                    cluster="2015"
                    color="#79C7E3"
                    data={orangeData}
                />
                <BarSeries
                    cluster="2015"
                    color="pink"
                    data={mangoData}
                />

            </XYPlot>
        </div>
    );

}



export default Chart;