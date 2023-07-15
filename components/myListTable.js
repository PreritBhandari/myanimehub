import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { listAnime } from '../src/graphql/queries';

function MyListTable() {

    const [animeInfo, setanimeInfo] = useState([])

    useEffect(() => {
        fetchAnimeStatus();
    }, []);

    async function fetchAnimeStatus() {
        const apiData = await API.graphql({ query: listAnime });
        const animeInfoFromAPI = apiData.data.listAnime.items;
        setanimeInfo(animeInfoFromAPI);
    }
    return (
        <table class="bg-slate-400 w-11/12 m-auto  table-fixed border-collapse border border-slate-400  shadow-custom">
            <thead>
                <tr >
                    <th >My Seen List</th>
                    <th >My Watch List</th>
                </tr>
            </thead>
            <tbody >
                {animeInfo.map((res) =>
                    <tr key={res.id}>
                        <td >The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default MyListTable;