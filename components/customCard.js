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

export const CustomCard = () => {
    const { tokens } = useTheme();
    return (
        <View
            backgroundColor={tokens.colors.background.secondary}
            padding={tokens.space.xxs}
            width={300}
            marginTop={20}
        >
            <Card>
                <Flex direction="column" alignItems="flex-start">
                    <Image
                        alt="Road to milford sound"
                        src="/images/startpage.jpg"
                        width="100%"
                    />
                    <Flex
                        direction="column"
                        alignItems="flex-start"
                        gap={tokens.space.xs}
                    >
                        <Flex>
                            <Badge size="small" variation="info">
                                8.5
                            </Badge>
                            <Badge size="small" variation="success">
                                Popular
                            </Badge>
                        </Flex>

                        <Heading level={5}>
                            Naruto Shippuden
                        </Heading>

                        {/* <Text as="span">
                            Join us on this beautiful outdoor adventure through the glittering
                            rivers through the snowy peaks on New Zealand.
                        </Text> */}
                        <Flex>
                            <Button variation="destructive" width={120}>Seen</Button>
                            <Button variation="primary" width={120}>WishList</Button>
                        </Flex>

                    </Flex>
                </Flex>
            </Card>
        </View>
    );
};