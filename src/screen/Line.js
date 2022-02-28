import React, { useState } from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    LineMarkSeries,
    DiscreteColorLegend
} from 'react-vis';

const Line = () => {
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    const [pattern, setPattern] = useState("")
    console.log("🚀 ~ file: line.js ~ line 16 ~ Line ~ pattern", pattern)

    const newDate = (d) => {
        return new Date(d);
    }

    const datas = [
        {
            title: "",
            color: "orange",
            disabled: false,
            data: [{ x: newDate("2022/02/02"), y: 1900 },
            { x: newDate("2022/02/03"), y: 1800 },
            { x: newDate("2022/02/04"), y: 1470 },
            { x: newDate("2022/02/05"), y: 1550 },
            { x: newDate("2022/02/06"), y: 1180 },
            { x: newDate("2022/02/07"), y: 1030 },
            { x: newDate("2022/02/08"), y: 980 },
            { x: newDate("2022/02/09"), y: 1010 },
            { x: newDate("2022/02/10"), y: 705 },
            { x: newDate("2022/02/11"), y: 641 },
            { x: newDate("2022/02/12"), y: 928 },
            { x: newDate("2022/02/13"), y: 1390 },
            { x: newDate("2022/02/14"), y: 1190 },
            { x: newDate("2022/02/15"), y: 190 },
            { x: newDate("2022/02/16"), y: 1590 },
            { x: newDate("2022/02/17"), y: 1090 },
            { x: newDate("2022/02/18"), y: 1300 },
            { x: newDate("2022/02/19"), y: 690 },
            ]

        },
        {
            title: "",
            color: "blue",
            disabled: false,
            data: [{ x: newDate("2022/02/02"), y: 1010 },
            { x: newDate("2022/02/03"), y: 700 },
            { x: newDate("2022/02/04"), y: 1390 },
            { x: newDate("2022/02/05"), y: 1030 },
            { x: newDate("2022/02/06"), y: 1010 },
            { x: newDate("2022/02/07"), y: 1800 },
            { x: newDate("2022/02/08"), y: 980 },
            { x: newDate("2022/02/09"), y: 1390 },
            { x: newDate("2022/02/10"), y: 705 },
            { x: newDate("2022/02/11"), y: 190 },
            { x: newDate("2022/02/12"), y: 928 },
            { x: newDate("2022/02/13"), y: 1390 },
            { x: newDate("2022/02/14"), y: 1190 },
            { x: newDate("2022/02/15"), y: 980 },
            { x: newDate("2022/02/16"), y: 1590 },
            { x: newDate("2022/02/17"), y: 1030 },
            { x: newDate("2022/02/18"), y: 190 },
            { x: newDate("2022/02/19"), y: 1090 },

            ]
        },
        {
            title: "",
            color: "#ff0000",
            disabled: false,
            data: [{ x: newDate("2022/02/02"), y: 771 },
            { x: newDate("2022/02/03"), y: 1234 },
            { x: newDate("2022/02/04"), y: 1196 },
            { x: newDate("2022/02/05"), y: 994 },
            { x: newDate("2022/02/06"), y: 1010 },
            { x: newDate("2022/02/07"), y: 1062 },
            { x: newDate("2022/02/08"), y: 980 },
            { x: newDate("2022/02/09"), y: 190 },
            { x: newDate("2022/02/10"), y: 705 },
            { x: newDate("2022/02/11"), y: 190 },
            { x: newDate("2022/02/12"), y: 928 },
            { x: newDate("2022/02/13"), y: 1390 },
            { x: newDate("2022/02/14"), y: 1190 },
            { x: newDate("2022/02/15"), y: 980 },
            { x: newDate("2022/02/16"), y: 1234 },
            { x: newDate("2022/02/17"), y: 1030 },
            { x: newDate("2022/02/18"), y: 190 },
            { x: newDate("2022/02/19"), y: 1062 },

            ]
        },
        {
            title: "",
            color: "#ff0000",
            disabled: false,
            data: [{ x: newDate("2022/02/02"), y: 190 },
            { x: newDate("2022/02/03"), y: 980 },
            { x: newDate("2022/02/04"), y: 1196 },
            { x: newDate("2022/02/05"), y: 705 },
            { x: newDate("2022/02/06"), y: 1010 },
            { x: newDate("2022/02/07"), y: 1190 },
            { x: newDate("2022/02/08"), y: 980 },
            { x: newDate("2022/02/09"), y: 1196 },
            { x: newDate("2022/02/10"), y: 705 },
            { x: newDate("2022/02/11"), y: 190 },
            { x: newDate("2022/02/12"), y: 928 },
            { x: newDate("2022/02/13"), y: 1290 },
            { x: newDate("2022/02/14"), y: 1011 },
            { x: newDate("2022/02/15"), y: 180 },
            { x: newDate("2022/02/16"), y: 700 },
            { x: newDate("2022/02/17"), y: 1390 },
            { x: newDate("2022/02/18"), y: 800 },
            { x: newDate("2022/02/19"), y: 1362 },

            ]
        },

    ]



    let filtredDate = []

    var is_weekend = function (date1) {
        var dt = new Date(date1);

        if (dt.getDay() == 7 || dt.getDay() == 0) {
            return "weekend";
        }
    }
    return (
        <div className="flex gap-2 justify-center">
            <div className="border border-red p-3">


                <form >
                    <input type="date" onChange={(e) => setStartDate(e.target.value)} value={startDate} className="border border-sky-500" />
                    <br />To <br />
                    <input type="date" onChange={(e) => setEndDate(e.target.value)} className="border border-sky-500" />
                </form>

                <br />

                <select name="" onChange={(e) => setPattern(e.target.value)}>
                    <option value="week">Week</option>
                    <option value="day" >Day</option>
                </select>

            </div>
            <div>


                <XYPlot width={900} height={500}
                    xType='ordinal'
                >


                    <HorizontalGridLines />
                    <XAxis tickFormat={v => `Value is ${v}`} tickLabelAngle={-90} />
                    <YAxis />

                    {

                    }
                    {pattern === "day" ? datas.map(ele => {
                        filtredDate.push({ title: ele.title, color: ele.color, data: ele.data.filter(e => newDate(startDate) <= e.x && newDate(endDate) >= e.x) })

                    }) : datas.map(ele => {
                        filtredDate.push({ title: ele.title, color: ele.color, data: ele.data.filter(e => is_weekend(e.x) == "weekend") })
                    })}

                    {
                        filtredDate.map((d) => {
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
        </div>
    )
}

export default Line