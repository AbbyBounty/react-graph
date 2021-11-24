
import React from 'react';
import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend,

} from 'react-vis';

const Chart = () => {

  const [useCanvas, setUseCanvas] = useState(false)

  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

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
        onMouseLeave={() => setShow(true)}
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
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries
          cluster="2015"
          color="#12939A"
          data={appleData}

          onSeriesMouseOver={() => { setShow(true); setData(appleData); setName("Apple") }}


        />
        <BarSeries
          cluster="2015"
          color="#79C7E3"
          data={orangeData}
          onSeriesMouseOver={() => { setShow(true); setData(orangeData); setName("Orange") }}
        />
        <BarSeries
          cluster="2015"
          color="pink"
          data={mangoData}
          onSeriesMouseOver={() => { setShow(true); setData(mangoData); setName("Mango") }}

        />

      </XYPlot>



      <Transition.Root show={show} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={() => setShow(false)}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <h3 className="text-red-400">{name}</h3>

                      <div className="mt-8">
                        <div className="flow-root">
                          <div>

                            <table className="table">
                              <thead>
                                <tr>
                                  <td >x</td>
                                  <td>y</td>
                                </tr>
                              </thead>
                              <tbody>
                                {data.map((d) => {
                                  return (
                                    <tr>
                                      <td>{d.x}</td>
                                      <td>{d.y}</td>
                                    </tr>

                                  )
                                })}

                              </tbody>
                            </table>
                            <button onClick={() => setShow(false)} className="btn btn-danger">
                              Cancel
                            </button>                   
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );

}




export default Chart;