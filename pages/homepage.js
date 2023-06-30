"use client";
import React, { useEffect, useState } from 'react'
import api from '../services/api';

function HomePage() {
    const [name, setName] = useState("");
    const [animeList, setAnimeList] = useState("");
    const searchAnime = () => {
        name &&
            api.get(`/anime?q=${name}`).then((res) => setAnimeList(res.data))
    }

    return (
        <div className=" h-[80vh] flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <input value={name} onChange={(e) => setName(e.target.value)} className="max-w-10xl w-6/12 mx-auto p-3 bg-[#e0e0e0] rounded-xl shadow-custom overflow-hidden md:max-w-5xl"
                placeholder='Type anime to search ..'
            />
            <button onClick={searchAnime} className='text-black font-semibold bg-[#e0e0e0] p-2 rounded-md hover:bg-green-200  shadow-md'>
                Search
            </button>

        </div>
    )
}

export default HomePage;