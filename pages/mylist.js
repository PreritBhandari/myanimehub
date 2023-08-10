import React from 'react'
import Header from '../components/header'
import MyListTable from '../components/myListTable'

function MyList() {
    return (
        <div className="bg-[url('/images/mylistbg.jpg')] bg-cover bg-center bg-blend-darken bg-green-300 text-black h-screen overflow-scroll z-100">
            <Header title="mylistpage" />
            <div className='p-10'>
                <MyListTable />
            </div>

        </div>
    )
}

export default MyList