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
} from '@aws-amplify/ui-react';

export const CustomCard = ({ animeData }) => {
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

                        <Heading level={6} width={250} style={{ lineHeight: "1em", overflow: "hidden", textAlign:"left" }}>
                            {animeData.title || ''}
                        </Heading>

                        {/* <Text as="span">
                            Join us on this beautiful outdoor adventure through the glittering
                            rivers through the snowy peaks on New Zealand.
                        </Text> */}
                        <Flex>
                            <Button style={{ backgroundColor: "green", color: 'white' }} width={120}>Seen</Button>
                            <Button variation="primary" width={120}>WishList</Button>
                        </Flex>

                    </Flex>
                </Flex>
            </Card>
        </View>
    );
};