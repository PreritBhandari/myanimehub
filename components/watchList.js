import { Badge, Card, Flex, Heading, Image, View, useTheme } from '@aws-amplify/ui-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { animeAdditionSelector } from '../rtk/slices/animeAdditionSlice';

function WatchList() {
    const { loading, pagination, animeData } = useSelector(animeAdditionSelector);
    const { tokens } = useTheme();

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

                    </Flex>
                </Flex>
            </Card>
        </View>
    )
}

export default WatchList