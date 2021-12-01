
import React from 'react';
import { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend,
  LineSeries

} from 'react-vis';

import { Table } from "./table";
// const Chart = () => {

//   const [useCanvas, setUseCanvas] = useState(false)




//   const [show, setShow] = useState(false);
//   const [name, setName] = useState("");

//   const [data, setData] = useState([{
//     title: "apple",
//     disabled: false,
//     cluster: 2015,
//     isActive: true,
//     color: "#12939A",
//     data: [{ x: 0, y: 12 }, { x: 1, y: 22 }, { x: 2, y: 32 }, { x: 3, y: 42 }]
//   },

//   {
//     title: "orange",
//     disabled: false,
//     cluster: 2015,
//     isActive: true,
//     color: "#79C7E3",
//     data: [{ x: 0, y: 12 }, { x: 1, y: 22 }, { x: 2, y: 32 }, { x: 3, y: 42 }]
//   },

//   {
//     title: "mango",
//     disabled: false,
//     cluster: 2015,
//     isActive: true,
//     color: "pink",
//     data: [{ x: 0, y: 12 }, { x: 1, y: 22 }, { x: 2, y: 32 }, { x: 3, y: 42 }]
//   }])

//   const [items, setItems] = useState([{
//     title: "apple",
//     disabled: false,
//     cluster: 2015,
//     isActive: true,
//     color: "#12939A",
//     data: [{ x: 0, y: 12 }, { x: 1, y: 22 }, { x: 2, y: 32 }, { x: 3, y: 42 }]
//   },

//   {
//     title: "orange",
//     disabled: false,
//     cluster: 2015,
//     isActive: true,
//     color: "#79C7E3",
//     data: [{ x: 0, y: 12 }, { x: 1, y: 22 }, { x: 2, y: 32 }, { x: 3, y: 42 }]
//   },

//   {
//     title: "mango",
//     disabled: false,
//     cluster: 2015,
//     isActive: true,
//     color: "pink",
//     data: [{ x: 0, y: 12 }, { x: 1, y: 22 }, { x: 2, y: 32 }, { x: 3, y: 42 }]
//   }])

//   const [newData, setNewData] = useState(data)



//   const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;






//   const clickHandler = (item, i) => {




//     items[i].disabled = !items[i].disabled;
//     setData(data)
//   }



//   return (
//     <div className="m-10" >

//       <XYPlot
//         className="clustered-stacked-bar-chart-example"
//         xType="ordinal"
//         stackBy="y"
//         width={350}
//         height={500}
//       >
//         <DiscreteColorLegend
//           style={{ position: 'absolute', left: '500px', top: '10px' }}
//           orientation="vertical"
//           onItemClick={(clickHandler)}
//           items={items.map((ele) => ele)}

//         />
//         <HorizontalGridLines />
//         <XAxis />
//         <YAxis />
//         {
//           data.map((d) => {
//             if (d.disabled != true) {
//               return <BarSeries
//                 cluster={d.cluster}
//                 color={d.color}
//                 data={d.data}
//                 stroke="red"
//               />
//             }


//           })

//         }


//       </XYPlot>




//     </div >
//   );

// }




// export default Chart;


export default class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        title: "Apples",
        color: "#12939A",
        disabled: false,
        data: [{ x: 0, y: 15 }, { x: 1, y: 24 }, { x: 2, y: 31 }, { x: 3, y: 42 }]
      },

      {
        title: "Orange",
        color: "#79C7E3",
        disabled: false,
        data: [{ x: 0, y: 11}, { x: 1, y: 27 }, { x: 2, y: 38 }, { x: 3, y: 40 }]
      },

      {
        title: "Mangos",
        disabled: false,
        color: "pink",

        data: [{ x: 0, y: 17 }, { x: 1, y: 22 }, { x: 2, y: 36 }, { x: 3, y: 49 }]
      },


      ],
      show: false,
      setData: {}

    };
  }

  clickHandler = (item, i) => {
    const { series } = this.state;
    series[i].disabled = !series[i].disabled;
    this.setState({ series });

  };
 
  setShow = () => {

    this.setState({
      show: false
    })
  }

  callShow = () => {
    this.setState({
      show: true
    })
  }



  render() {
    const { series } = this.state;
    const useCanvas = false

    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
   const setNewData =  (d) => {

    this.setState({setData:d})
    }


    return (
      <div>

        <div className="container mt-6">
          <div className="row">
            <div className="col-sm">
              <XYPlot className="clustered-stacked-bar-chart-example"
                xType="ordinal"
                stackBy="y"
                width={450}
                height={500}
              >

                <DiscreteColorLegend
                  onItemClick={this.clickHandler}
                  width={180}
                  items={series}
                  style={{ position: 'absolute', left: '460px', top: '10px' }}

                />
                <HorizontalGridLines />

                <XAxis />
                <YAxis />


                {
                  series.map((d) => {
                    if (d.disabled != true) {
                      return <VerticalBarSeries
                        cluster={d.cluster}
                        color={d.color}
                        data={d.data}
                        onSeriesMouseOver={()=>{setNewData(d)}}
                      />
                    }


                  })

                }
              </XYPlot>
            </div>

            <div className="col-sm">
              <Table data={this.state.setData} />
            </div>

          </div>

        </div>

      </div >
    );
  }
}