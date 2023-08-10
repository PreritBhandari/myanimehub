import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { listMyAnimeHubs } from '../src/graphql/queries';

function MyListTable() {

    const [animeInfo, setanimeInfo] = useState([])

    useEffect(() => {
        fetchAnimeStatus();
    }, []);

    async function fetchAnimeStatus() {
        const apiData = await API.graphql({ query: listMyAnimeHubs });
        const animeInfoFromAPI = apiData.data.listMyAnimeHubs.items;
        setanimeInfo(animeInfoFromAPI);
        console.log(animeInfoFromAPI)

    }
    return (
        <div class="flex flex-row items-start w-12/12 justify-between">
            
            <table class="bg-slate-400 w-5/12 ml-20  table-fixed border-collapse border border-slate-400  shadow-custom">
                <thead>
                    <tr class="font-extrabold text-lg">
                        <th >My Seen List</th>
                        {/* <th >My Watch List</th> */}
                    </tr>
                </thead>
                <tbody class="font-mono">
                    {animeInfo.map((res) =>
                        res.isSeen && <tr key={res.id}>
                            {/* <td >{JSON.parse(res?.animeData)?.mal_id}</td> */}
                            <td>{res.title}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <table class="bg-slate-400 w-5/12 mr-20   table-fixed border-collapse border border-slate-400  shadow-custom">
                <thead>
                    <tr class="font-extrabold text-lg">
                        <th >My Watch List</th>
                        {/* <th >My Watch List</th> */}
                    </tr>
                </thead>
                <tbody class="font-mono">
                    {animeInfo.map((res) =>
                        res.isWatchList && <tr key={res.id}>
                            {/* <td >{JSON.parse(res?.animeData)?.mal_id}</td> */}
                            <td>{res.title}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default MyListTable;