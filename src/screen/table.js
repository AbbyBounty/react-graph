import React from 'react'

export const Table = (props) => {
    console.log("🚀 ~ file: table.js ~ line 4 ~ Table ~ props", props)
    console.log("🚀 ~ file: table.js ~ line 5 ~ Table ~ props", props.data.data)


    return (
        <div >
            <h3 style={{ color: props.data.color }}>{props.data.title}</h3>
            <table className="table table-bordered" style={{ color: props.data.color }}>

                <thead >
                    <tr>
                        <th scope="col">X</th>
                        <th>Y</th>

                    </tr>
                </thead>


                <tbody>
                    {props.data.data && props.data.data.map((d) => {
                        return (
                            < tr >

                                <td>{d.x}</td>
                                <td>{d.y}</td>

                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div >
    )
}
