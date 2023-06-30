import React, { useState } from 'react'
import api from '../services/api';
import { useDispatch } from 'react-redux';
import { getAnimeOverview } from '../rtk/slices/animeAdditionSlice';


function Header({ signOut }) {
    const [name, setName] = useState("");
    const [animeList, setAnimeList] = useState("");
    const dispatch = useDispatch();

    const searchAnime = () => {
        name &&
            // api.get(`/anime?q=${name}`).then((res) => setAnimeList(res.data))
            dispatch(
                getAnimeOverview({
                    q: name,
                })
            );
    }
    
    return (
        <header className=" text-black sticky shadow-lg top-0 p-8 flex items-start justify-between w-12/12 md:w-auto max-w-10xl  z-20 xl:items-center">

            <div className="flex md:flex-row justify-between max-w-12xl md:w-5/12  flex-col gap-y-5 w-7/12">
                <strong className='text-xl text-black  md:text-2xl'>myanimehub</strong>
                <div className='flex flex-row w-80 justify-between gap-x-5 md:justify-between md:gap-x-5 '>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="mx-auto p-2 bg-[#e0e0e0] rounded-md shadow-md md:shadow-custom overflow-hidden  md:w-96 md:max-w-5xl"
                        placeholder='Type anime to search ..'
                    />
                    <button onClick={searchAnime} className='text-black font-light md:font-normal bg-green-100 md:p-2  p-1 rounded-md hover:bg-green-200  shadow-md'>
                        Search
                    </button>
                </div>

            </div>
            <div className='flex flex-row gap-x-2 overflow-visible'>
                <strong onClick={signOut} className='w-16 md:w-20 text-sm text-center md:text-md cursor-pointer text-white-500 box-border bg-green-100 rounded-md p-1 md:p-2 hover:bg-green-200'>My List</strong>
                <strong onClick={signOut} className='w-16 md:w-20  text-sm md:text-md text-center cursor-pointer text-white-500 box-border bg-green-100 rounded-md p-1 md:p-2 hover:bg-green-200'>Logout</strong>
            </div>

        </header>
    )
}

export default Header