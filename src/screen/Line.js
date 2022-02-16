import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    LineMarkSeries,
} from 'react-vis';

const Line = () => {
    const newDate = (d) => {
        return new Date(d).toLocaleDateString();
    }

    const datas = [
        {
            title: "",
            color: "orange",
            data: [{ x: newDate("2021/10/03"), y: 1900 },
            { x: newDate("2021/10/10"), y: 1800 },
            { x: newDate("2021/10/17"), y: 1470 },
            { x: newDate("2021/10/24"), y: 1550 },
            { x: newDate("2021/10/31"), y: 1180 },
            { x: newDate("2021/11/07"), y: 1030 },
            { x: newDate("2021/11/14"), y: 980 },
            { x: newDate("2021/11/21"), y: 1010 },
            { x: newDate("2021/11/28"), y: 705 },
            { x: newDate("2021/12/05"), y: 641 },
            { x: newDate("2021/12/12"), y: 928 },
            { x: newDate("2021/12/19"), y: 1390 },
            ]
        },
        {
            title: "",
            color: "blue",
            data: [{ x: newDate("2021/10/31"), y: 700 },
            { x: newDate("2021/11/14"), y: 1500 },
            { x: newDate("2021/12/19"), y: 1800 },

            ]
        },
        {
            title: "",
            color: "#ff0000",
            data: [{ x: newDate("2021/10/03"), y: 800 },
            { x: newDate("2021/10/10"), y: 1300 },
            { x: newDate("2021/10/17"), y: 1400 },
            { x: newDate("2021/10/31"), y: 1600 },
            { x: newDate("2021/12/05"), y: 400 },

            ]
        },
        {
            title: "",
            color: "#ff0000",
            data: [{ x: newDate("2021/10/03"), y: 600 },
            { x: newDate("2021/10/17"), y: 900 },
            { x: newDate("2021/11/14"), y: 1300 },
            { x: newDate("2021/12/12"), y: 1600 },

            ]
        },

    ]
    return (
        <div >
            <XYPlot width={900} height={500}
                xType='ordinal'
            >
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                {
                    datas.map((d) => {
                        return (
                            <LineMarkSeries
                                curve={'curveMonotoneX'}
                                data={d.data}
                            />
                        )
                    })
                }
            </XYPlot>
        </div>
    )
}

export default Line