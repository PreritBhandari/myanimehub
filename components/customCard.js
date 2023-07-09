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


export const CustomCard = ({ animeData }) => {
    const { tokens } = useTheme();
    const [animeInfo, setanimeInfo] = useState([]);
    const [seen, setSeen] = useState(false)

    useEffect(() => {
        fetchAnimeStatus();
    }, []);

    async function fetchAnimeStatus() {
        const apiData = await API.graphql({ query: listAnime });
        const animeInfoFromAPI = apiData.data.listAnime.items;
        setanimeInfo(animeInfoFromAPI);
    }

    const val = animeInfo.filter((res) => res.id == animeData.mal_id)
    // console.log("value",val)
    // const isSeen = val?.map((res => res.isSeen))

    async function updateAnime(value) {
        value === "seen" && setSeen(!seen);
        const data = {
            id: animeData.mal_id,
            isSeen: seen,
            isWatchList: value === "wish" && true
        };
        await API.graphql({
            query: val.length === 0 ? createAnimeMutation : updateAnimeMutation,
            variables: { input: data },
        });
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

                        {/* <Text as="span">
                            Join us on this beautiful outdoor adventure through the glitteringx
                            rivers through the snowy peaks on New Zealand.
                        </Text> */}
                        <Flex>
                            <span className='seenButton' onClick={() => updateAnime("seen")}>
                                {val[0]?.isSeen ? <img src={NarutoHappy} width={30} height={20} /> : <img src={NarutoSad} />}

                            </span>
                            <Button variation="primary" width={120} onClick={() => updateAnime("wish")}>WishList</Button>
                        </Flex>

                    </Flex>
                </Flex>
            </Card>
        </View>
    );
};