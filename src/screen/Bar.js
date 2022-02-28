import React, { useState, useEffect } from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    LineMarkSeries,
    DiscreteColorLegend,
    VerticalBarSeries,
    LabelSeries,
    GradientDefs
} from 'react-vis';

const Bar = () => {

    const [pattern, setPattern] = useState("")
    const [opacity, setOpacity] = useState(1)
    console.log("🚀 ~ file: line.js ~ line 16 ~ Line ~ pattern", pattern)

    const [index, setIndex] = useState(null)
    const newDate = (d) => {
        return new Date(d);
    }


    const newData = [
        { w1: { good: 0.5, risk: 0.5 } },
        { w1: { good: 0.5, risk: 0.5 } },
        { w1: { good: 0.5, risk: 0.5 } },
    ]
    const datas = [
        {
            title: "good",
            color: "#8E1D5C",
            disabled: false,
            data: [{ x: "w1", y: 1, good: 0.5, risk: 0.5 },
            { x: "w2", y: 1.9, good: 1.2, risk: 0.7 },
            { x: "w3", y: 2.0, good: 1.8, risk: 0.2 },
            { x: "w4", y: 5.5, good: 5.1, risk: 0.4 },
            { x: "w5", y: 7.6, good: 7.5, risk: 0 },
            { x: "w6", y: 9.3, good: 9.3, risk: 0 },
            { x: "w7", y: 11.3, good: 11.3, risk: 0 },
            { x: "w8", y: 14.3, good: 14.0, risk: 0.3 },
            { x: "w9", y: 15.3, good: 15.3, risk: 0 },
            { x: "w10", y: 17.6, good: 16.3, risk: 1.3 },
            { x: "w11", y: 29.6, good: 25.8, risk: 3.8 },
            { x: "w12", y: 35.4, good: 30.7, risk: 4.7 },
            { x: "w13", y: 39.4, good: 35.7, risk: 3.7 },

            ]

        }



    ]

    const data = [
        [{ x: "w1", y: 1, good: 0.5, risk: 0.5, opacity: opacity }],
        [{ x: "w2", y: 1.9, good: 1.2, risk: 0.7, opacity: opacity }],
        [{ x: "w3", y: 2.0, good: 1.8, risk: 0.2, opacity: opacity }],
        [{ x: "w4", y: 5.5, good: 5.1, risk: 0.4, opacity: opacity }],
        [{ x: "w5", y: 7.6, good: 7.5, risk: 0, opacity: opacity }],
        [{ x: "w6", y: 9.3, good: 9.3, risk: 0, opacity: opacity }],
        [{ x: "w7", y: 11.3, good: 11.3, risk: 0, opacity: opacity }],
        [{ x: "w8", y: 14.3, good: 14.0, risk: 0, opacity: opacity }],
        [{ x: "w9", y: 15.3, good: 15.3, risk: 0, opacity: opacity }],
        [{ x: "w10", y: 17.6, good: 16.3, risk: 1.3, opacity: opacity }],
        [{ x: "w11", y: 29.6, good: 25.8, risk: 3.8, opacity: opacity }],
        [{ x: "w12", y: 35.4, good: 30.7, risk: 4.7, opacity: opacity }],
        [{ x: "w13", y: 39.4, good: 35.7, risk: 3.7, opacity: opacity }],

    ]

    const label = [
        { x: "w1", y: 1 },
        { x: "w2", y: 1.9 },
        { x: "w3", y: 2.0 },
        { x: "w4", y: 5.5 },
        { x: "w5", y: 7.6 },
        { x: "w6", y: 9.3 },
        { x: "w7", y: 11.3 },
        { x: "w8", y: 14.3 },
        { x: "w9", y: 15.3 },
        { x: "w10", y: 17.6 },
        { x: "w11", y: 29.6 },
        { x: "w12", y: 35.4 },
        { x: "w13", y: 39.4 },
    ]
    let filtredDate = []

    var is_weekend = function (date1) {
        var dt = new Date(date1);

        if (dt.getDay() == 7 || dt.getDay() == 0) {
            return "weekend";
        }
    }

    const chartWidth = 800;
    const chartHeight = 500;
    const chartDomain = [0, chartHeight];

    const test = () => {
        console.log('hello')
    }


    const handleClick = (e, i) => {
        console.log("🚀 ~ file: Bar.js ~ line 112 ~ handleClick ~ e", i)
        data.map((ele, index) => {
            if (i != index) {
                setOpacity(0.3)
                console.log("🚀 ~ file: Bar.js ~ line 60 ~ Bar ~ opacity", opacity)

            }
            console.log("🚀 ~ file: Bar.js ~ line 116 ~ data.map ~ data", data)
        })
    }


    const gradient = (<GradientDefs>
        <linearGradient
            id="myGradient"
            gradientUnits="userSpaceOnUse"
            x1="0" y1="0" x2="200" y2="200">
            <stop offset="50%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#090979" />
        </linearGradient>
    </GradientDefs>);


    return (
        <div className="flex gap-2 justify-center">
            <div className="border border-red p-3">




                <select name="" onChange={(e) => setPattern(e.target.value)}>
                    <option value="week">Week</option>
                    <option value="day" >month</option>
                </select>

            </div>
            <div>


                <XYPlot width={900} height={500}
                    xType='ordinal'
                    stackBy="y"
                    yDomain={[0, 40]}
                    colorType="literal"
                >


                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <DiscreteColorLegend items={datas} orientation="horizontal" />

                    {/* 
                    <DiscreteColorLegend items={datas} orientation="horizontal" />


                    {
                       datas.map(ele => {
                            return ( 
                                <VerticalBarSeries
                                    data={ele.data}
                                    barWidth="0.5"
                                    color={ele.color}
                                />



                            )
                        })
                    }

                    <LabelSeries
                        data={label.map((obj) => {
                            return { ...obj, label: obj.y.toString() };
                        })}
                        labelAnchorX="middle"
                        labelAnchorY="text-after-edge"
                    /> */}

                    {/* <VerticalBarSeries
                        data={[{ x: "w2", y: 20 },
                        { x: "w3", y: 30 }]}
                        barWidth={0.5}
                        onSeriesClick={() => test()}

                        style={{ color: "red" }}
                    />
                    <VerticalBarSeries
                        data={[{ x: "w2", y: 20 },
                        { x: "w3", y: 30 }]}
                        barWidth={0.5}
                    /> */}

                    {
                        data.map((ele, index) => {
                            return (
                                <GradientDefs key={index}>
                                    <linearGradient id={"grad" + index} x1="0" x2="0" y1="0" y2="1">
                                        <stop offset={Math.round(ele[0].good / ele[0].y * 100) + "%"} stopColor="green" stopOpacity={1} />
                                        <stop offset={Math.round(ele[0].risk / ele[0].y * 100) + "%"} stopColor="red" stopOpacity={1} />
                                    </linearGradient>
                                </GradientDefs>
                            )
                        })
                    }

                    {
                        data.map((ele, index) => {
                            return (
                                <VerticalBarSeries data={ele} color={`url(#grad${index}) `} key={index} onSeriesClick={(e) => handleClick(e, index)} />


                            )
                        })
                    }



                    <LabelSeries
                        data={label.map((obj) => {
                            return { ...obj, label: obj.y.toString() };
                        })}
                        labelAnchorX="middle"
                        labelAnchorY="text-after-edge"
                    />



                </XYPlot>

                {/* <XYPlot
                    xType="ordinal"
                    width={chartWidth}
                    height={chartHeight}
                    yDomain={chartDomain}
                >
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries data={[{ "y": 100, "x": "Jan" },
                        { "y": 112, "x": "Feb" },
                        { "y": 230, "x": "Mar" },
                        { "y": 268, "x": "Apr" },
                        { "y": 300, "x": "May" },
                        { "y": 310, "x": "Jun" },
                        { "y": 315, "x": "Jul" },
                        { "y": 340, "x": "Aug" },
                        { "y": 388, "x": "Sep" },
                        { "y": 404, "x": "Oct" },
                        { "y": 442, "x": "Nov" },
                        { "y": 447, "x": "Dec" }]} />
                    <LabelSeries
                        data={data.map((obj) => {
                            return { ...obj, label: obj.y.toString() };
                        })}
                        labelAnchorX="middle"
                        labelAnchorY="text-after-edge"
                    />

                </XYPlot> */}


            </div>
        </div>
    )
}

export default Bar