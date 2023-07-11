import React from 'react'

function myListTable() {
    return (
        <table class="bg-slate-400 w-11/12 m-auto  table-fixed border-collapse border border-slate-400  shadow-custom">
            <thead>
                <tr >
                    <th >My Seen List</th>
                    <th >My Watch List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                </tr>
                <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                </tr>
                <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                </tr>
            </tbody>
        </table>
    )
}

export default myListTable