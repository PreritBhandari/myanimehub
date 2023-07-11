import {
    Card,
    Image,
    View,
    Heading,
    Flex,
    Badge,
    Text,
    Button,
    useTheme,
    Icon,
    Divider,
} from '@aws-amplify/ui-react';
import { API } from "aws-amplify";

import {
    updateAnime as updateAnimeMutation,
    createAnime as createAnimeMutation,
} from "../src/graphql/mutations";

import { listAnime } from '../src/graphql/queries';
import { useEffect, useState } from 'react';
import { HiOutlineCheckCircle, HiCheckCircle } from "react-icons/hi";
import NarutoSad from '../public/images/anime_icons/narutosad';
import NarutoHappy from '../public/images/anime_icons/narutohappy';
import SharinghanWish from '../public/images/anime_icons/sharinghanwish';
import SharinghanNoWish from '../public/images/anime_icons/sharinghannot';
import { Tooltip } from 'react-tooltip';
import { animeMyListSelector, getMyList } from '../rtk/slices/mylistSlice';
import { useDispatch, useSelector } from 'react-redux';



export const CustomCard = ({ animeData }) => {
    const { tokens } = useTheme();
    const [animeInfo, setanimeInfo] = useState([]);
    const [seen, setSeen] = useState(false)
    const [wish, setWish] = useState(false)
    const { loading, pagination, myAnimeList } = useSelector(animeMyListSelector);

    const dispatch = useDispatch()

    useEffect(() => {
        fetchAnimeStatus();
    }, []);

    async function fetchAnimeStatus() {
        // const apiData = await API.graphql({ query: listAnime });
        // const animeInfoFromAPI = apiData.data.listAnime.items;
        dispatch(
            getMyList({ query: listAnime })
        );
        setanimeInfo(myAnimeList?.listAnime?.items);
    }

    const val = animeInfo?.filter((res) => res.id == animeData?.mal_id)


    console.log("value", val)
    // const isSeen = val?.map((res => res.isSeen))

    async function updateAnime(value) {
        value === "seen" && setSeen(!seen);
        value === "wish" && setWish(!wish);
        const data = value === "seen" ? {
            id: animeData.mal_id,
            isSeen: seen,
        } : value === "wish" ? {
            id: animeData.mal_id,
            isWatchList: wish,

        } : null;
        // await API.graphql({
        //     query: val.length === 0 ? createAnimeMutation : updateAnimeMutation,
        //     variables: { input: data },
        // });

        dispatch(getMyList({
            query: val?.length === 0 ? createAnimeMutation : updateAnimeMutation,
            variables: { input: data },
        }))
        fetchAnimeStatus();

    }

    return (
        <View
            backgroundColor={tokens.colors.background.success}
            padding={tokens.space.xxs}
            width={300}
            height={450}
            marginTop={20}
        >
            <Card backgroundColor={tokens.colors.background.success}
            >
                <Flex direction="column" alignItems="flex-start">
                    <Image
                        alt="Road to milford sound"
                        src={animeData.images.jpg['image_url']}
                        width="100%"
                        height={250}
                    />
                    <Flex
                        direction="column"
                        alignItems="flex-start"
                        gap={tokens.space.xs}
                    >
                        <Flex>
                            {animeData.score && <Badge size="small" variation="info">
                                {animeData.score}
                            </Badge>
                            }
                            {animeData.year && <Badge size="small" variation="error">
                                {animeData.year}
                            </Badge>
                            }
                        </Flex>

                        <Heading level={6} width={250} style={{ lineHeight: "1em", overflow: "hidden", textAlign: "left" }}>
                            {animeData.title || ''}
                        </Heading>
                        <Divider />
                        <Flex style={{ justifyContent: "space-between", width: 250 }}>
                            <Tooltip id="custom-tooltip" style={{ backgroundColor: "rgb(187, 230, 208)", color: "#222" }}
                            />
                            <strong className='airingClass'>{animeData.airing ? 'Airing Now ...' : 'Completed ✅'}</strong>
                            <span data-tooltip-id='custom-tooltip' data-tooltip-content="Add to Seen List" className='seenButton' onClick={() => updateAnime("seen")}>
                                {val?.[0]?.isSeen ? <NarutoHappy /> : <NarutoSad />}
                            </span>
                            <span data-tooltip-id='custom-tooltip' data-tooltip-content="Add to Wish List" className='wishButton' onClick={() => updateAnime("wish")}>
                                {val?.[0]?.isWatchList ?
                                    <SharinghanWish />
                                    :
                                    <SharinghanNoWish />
                                }

                            </span>
                        </Flex>

                    </Flex>
                </Flex>
            </Card>
        </View>
    );
};