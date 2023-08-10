import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { listAnime } from '../src/graphql/queries';

function MyListTable() {

    const [animeInfo, setanimeInfo] = useState([])

    useEffect(() => {
        fetchAnimeStatus();
        // console.log(animeInfo)
    }, []);

    async function fetchAnimeStatus() {
        const apiData = await API.graphql({ query: listAnime });
        const animeInfoFromAPI = apiData.data.listAnime.items;
        // setanimeInfo(animeInfoFromAPI);
        setanimeInfo(animeInfoFromAPI.filter((res) => res?.animeData));
        // console.log(animeInfo[0].animeData[0].map)
        console.log(animeInfo)

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
                    res.animeData && <tr key={res.id}>
                        {/* <td >{JSON.parse(res?.animeData)?.mal_id}</td> */}
                        <td>{res.animeData[0]}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default MyListTable;